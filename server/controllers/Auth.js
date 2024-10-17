const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Profile = require("../models/Profile");
const mailSender = require("../utils/mailSender");
const { passwordUpdated } = require("../mail/passwordUpdate");
require("dotenv").config();

// Helper to send error responses
const sendErrorResponse = (res, statusCode, message) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

// Helper to send OTP
const generateUniqueOtp = async () => {
  let otp;
  let result;
  do {
    otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    result = await OTP.findOne({ otp });
  } while (result);
  return otp;
};

// Send OTP
exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const checkUserPresent = await User.findOne({ email });
    if (checkUserPresent) {
      return sendErrorResponse(res, 401, "User already registered");
    }

    const otp = await generateUniqueOtp();
    console.log("OTP generated:", otp);

    await OTP.create({ email, otp });

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otp,
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, 500, error.message);
  }
};

// Sign Up
exports.signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword, otp } = req.body;

    if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
      return sendErrorResponse(res, 403, "All fields are required");
    }

    if (password !== confirmPassword) {
      return sendErrorResponse(res, 400, "Passwords do not match");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendErrorResponse(res, 400, "User is already registered");
    }

    const recentOtp = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    if (!recentOtp.length || otp !== recentOtp[0].otp) {
      return sendErrorResponse(res, 400, "Invalid or expired OTP");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumer: null,
    });

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      additionalDetails: profileDetails._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    res.status(200).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, 500, "User registration failed");
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return sendErrorResponse(res, 403, "All fields are required");
    }

    const user = await User.findOne({ email }).populate("additionalDetails");
    if (!user) {
      return sendErrorResponse(res, 401, "User not registered, please sign up");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return sendErrorResponse(res, 401, "Incorrect password");
    }

    const payload = { email: user.email, id: user._id, accountType: user.accountType };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });

    user.token = token;
    user.password = undefined;

    res.cookie("token", token, {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    }).status(200).json({
      success: true,
      token,
      user,
      message: "Logged in successfully",
    });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, 500, "Login failed, please try again");
  }
};

// Change Password
exports.changePassword = async (req, res) => {
  try {
    const userDetails = await User.findById(req.user.id);
    const { oldPassword, changePassword, confirmPassword } = req.body;

    if (!oldPassword || !changePassword || !confirmPassword) {
      return sendErrorResponse(res, 400, "All fields are required");
    }

    const isPasswordMatch = await bcrypt.compare(oldPassword, userDetails.password);
    if (!isPasswordMatch) {
      return sendErrorResponse(res, 401, "Old password is incorrect");
    }

    if (changePassword !== confirmPassword) {
      return sendErrorResponse(res, 400, "New password and confirm password do not match");
    }

    const hashedPassword = await bcrypt.hash(changePassword, 10);
    await User.findByIdAndUpdate(req.user.id, { password: hashedPassword }, { new: true });

    await mailSender(
      userDetails.email,
      passwordUpdated(
        userDetails.email,
        `Password updated successfully for ${userDetails.firstName} ${userDetails.lastName}`
      )
    );

    res.status(200).json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, 500, "Error occurred while updating password");
  }
};
