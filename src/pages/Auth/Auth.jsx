
import React, { useEffect, useState } from "react";
import { signUp, logIn , sendOtp} from "../../api.communicators";
import Logo from "../../img/logo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const [login, setLogin] = useState("Login");
  const [theme, setTheme] = useState(null);

  // Set dark/light mode based on system preference
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Toggle between dark/light mode
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="Auth flex items-center justify-center h-screen gap-16 relative">
      <div className="a-left flex flex-col lg:flex-row gap-4 items-center justify-center">
        <div className="items-center justify-center lg:flex-row flex-col flex">
          <img src={Logo} alt="FeatherPerfect Logo" className="h-24 w-24" />
          <div className="Webname flex flex-col font-bold text-center lg:text-start">
            <h1 className="font-bold text-3xl bg-[100%] bg-repeat bg-gradient-to-r from-[#2eaafa] to-[#1060d7] leading-normal">
              FeatherPerfect
            </h1>
            <h6 className="dark:text-white pt-0 mb-1">
              IPF is our Brand Ambassador!
            </h6>
            <h6 className="text-xs font-extralight dark:text-white/80">
              (You guessed it right! It has Perfect Feathers!)
            </h6>
          </div>
        </div>

        {login === "Login" ? (
          <LogIn
            setLogin={setLogin}
            handleThemeSwitch={handleThemeSwitch}
            currentTheme={theme}
          />
        ) : (
          <SignUp
            setLogin={setLogin}
            handleThemeSwitch={handleThemeSwitch}
            currentTheme={theme}
          />
        )}
      </div>
    </div>
  );
};

const SignUp = ({ setLogin, handleThemeSwitch, currentTheme }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
  
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
  
    
    try {
      // Step 1: Send OTP to the user's email before signing up
      await sendOtp(formData, navigate); // Navigate to verify-otp page

    } catch (error) {
      // Handle any error during OTP sending
      toast.error("Error sending OTP");
      console.error("Error during OTP send:", error);
    }
  };
  

  const navigatePage = () => setLogin("Login");

  return (
    <div className="a-right flex flex-col bg-white/70 dark:bg-slate-800 rounded-2xl p-4 gap-4 shadow-lg">
      <div className="w-full max-w-lg p-8 space-y-6 rounded-sm dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Create an Account
        </h2>
        <form className="space-y-6" onSubmit={handleFormSubmission}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="input-field"
                placeholder="First Name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="input-field"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              placeholder="abc123@xy.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="input-field"
                placeholder="Password"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-field"
                placeholder="Confirm Password"
              />
            </div>
                  


          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Already in Wildlife?{" "}
            <button
              onClick={navigatePage}
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              Log In
            </button>
          </p>
        </div>

        <button onClick={handleThemeSwitch} className="toggle-theme-btn">
          {currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
};

const LogIn = ({ setLogin, handleThemeSwitch, currentTheme }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      const data = await logIn(formData); // Call the logIn API
      console.log("User logged in:", data);
      toast.success("Logged In Successfully");
      navigate("/home");
    } catch (error) {
      toast.error("Login Failed");
      console.error("Error during login:", error);
    }
  };

  const navigatePage = () => setLogin("SignUp");

  return (
    <div className="a-right flex flex-col bg-white/70 dark:bg-slate-800 rounded-2xl p-4 w-96 gap-4 shadow-lg">
      <div className="w-full max-w-md p-8 space-y-6 rounded-lg dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Login to Your Account
        </h2>
        <form className="space-y-4" onSubmit={handleFormSubmission}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your email..."
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your password..."
            />
          </div>

          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Not a Wildlife Member?{" "}
            <button
              onClick={navigatePage}
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              Sign Up
            </button>
          </p>
        </div>

        <button onClick={handleThemeSwitch} className="toggle-theme-btn">
          {currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
