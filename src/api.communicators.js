// authAPI.js
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// Define the base URL of your backend API
const API = axios.create({ baseURL: "http://localhost:4000/api/v1/auth" }); // Update with your API's base URL

export const sendOtp = async (formData, navigate) => {
  const toastId = toast.loading("Sending OTP...");
  const email = formData.email;
  try {
    const response = await API.post("/sendotp", { email, checkUserPresent: true });
    console.log("SENDOTP API RESPONSE:", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("OTP Sent Successfully");
    navigate("/verify-otp", { state: formData });
  
  } catch (error) {
    console.error("SENDOTP API ERROR:", error);
    toast.error("Could not send OTP");
  } finally {
    toast.dismiss(toastId);
  }
};


export const signUp = async (formData,navigate) => {
  
  try {
    const response = await API.post("/signup", formData);
     console.log("signup client side",response)
    if (response.data.success) {
      toast.success("Sign up successful!");
      navigate("/");  // Redirect after signup
    } else {
      toast.error(response.data.message || "Sign up failed");
    }
  } catch (error) {
    toast.error("An error occurred during sign up");
    console.error("Error during sign up:", error);
  }
};



// Login API
export const logIn = async (formData) => {
  try {
    const response = await API.post("/login", formData);
    console.log("response data =>", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
