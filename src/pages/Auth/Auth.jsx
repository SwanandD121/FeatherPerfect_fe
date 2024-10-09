import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../img/logo.png";
import showEye from "../../img/show-eye.png";  // Import the show-eye icon
import hideEye from "../../img/hide-eye.png";  // Import the hide-eye icon
import "./Auth.css";

const Auth = () => {
    const [login, setLogin] = useState("Login");
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

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
                    <img src={Logo} alt="" className="h-24 w-24" />
                    <div className="Webname flex flex-col font-bold text-center lg:text-start">
                        <h1 className="font-bold text-3xl  bg-[100%] bg-repeat bg-gradient-to-r from-[#2eaafa]-to-[#1060d7] leading-normal">
                            FeatherPerfect
                        </h1>
                        <h6 className="dark:text-white pt-0 mb-1">IPF is our Brand Ambassador!</h6>
                        <h6 className="text-xs font-extralight dark:text-white/80">
                            (You guessed it right! It has Perfect Feathers!)
                        </h6>
                    </div>
                </div>

                {login === "Login" ? (
                    <LogIn setLogin={setLogin} handleThemeSwitch={handleThemeSwitch} currentTheme={theme} />
                ) : (
                    <SignUp setLogin={setLogin} handleThemeSwitch={handleThemeSwitch} currentTheme={theme} />
                )}
            </div>
        </div>
    );
};

function SignUp({ setLogin, handleThemeSwitch = null, currentTheme = "light" }) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passHidden, setPassHidden] = useState(true);  // State to toggle password visibility
    const [confPassHidden, setConfPassHidden] = useState(true);  // State to toggle confirm password visibility

    const validatePassword = (pass) => {
        const minLength = 8;
        const maxLength = 20;
        const hasUpperCase = /[A-Z]/.test(pass);
        const hasLowerCase = /[a-z]/.test(pass);
        const hasNumbers = /\d/.test(pass);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass);

        if (pass.length < minLength || pass.length > maxLength) {
            return `Password must be between ${minLength} and ${maxLength} characters.`;
        }

        if (!(hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar)) {
            return "Password must include uppercase, lowercase, numbers, and special characters.";
        }

        return '';
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordError(validatePassword(newPassword));
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleFormSubmission = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            return;
        }
        if (passwordError) {
            return;
        }
        // Proceed with form submission
        console.log("Form submitted successfully");
    };

    return (
        <div className="a-right flex flex-col bg-white/70 dark:bg-slate-800 rounded-2xl p-4 gap-4 shadow-lg">
            <div className="w-full max-w-lg p-8 space-y-6 rounded-sm dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Create an Account</h2>
                <form className="space-y-6" onSubmit={handleFormSubmission}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                            <input id="first-name" name="first-name" type="text" required className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn" placeholder="First Name" />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                            <input id="last-name" name="last-name" type="text" required className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn" placeholder="Last Name" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                        <input id="username" name="username" type="text" required className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn" placeholder="Username" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={passHidden ? "password" : "text"}  // Toggle between 'password' and 'text'
                                    required
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn"
                                    placeholder="Password"
                                />
                                <img
                                    src={passHidden ? showEye : hideEye}
                                    alt="toggle visibility" 
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer icon"
                                    onClick={() => setPassHidden(!passHidden)}  // Toggle visibility state
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
                            <div className="relative">
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type={confPassHidden ? "password" : "text"}  // Toggle between 'password' and 'text'
                                    required
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn"
                                    placeholder="Confirm Password"
                                />
                                <img
                                    src={confPassHidden ? showEye : hideEye}
                                    alt="toggle visibility"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer icon"
                                    onClick={() => setConfPassHidden(!confPassHidden)}  // Toggle visibility state
                                />
                            </div>
                        </div>
                    </div>

                    {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}

                    <button type="submit" className="submit-button">Sign Up</button>
                </form>

                <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Already have an account?{" "}
                        <button onClick={() => setLogin("Login")} className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
                            Log In
                        </button>
                    </p>
                </div>

                <button onClick={handleThemeSwitch} className="toggle-theme-button">
                    {currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
            </div>
        </div>
    );
}

function LogIn({ setLogin, handleThemeSwitch = null, currentTheme = "light" }) {
    const [passHidden, setPassHidden] = useState(true);  // State to toggle password visibility
    const navigate = useNavigate();

    const handleFormSubmission = (e) => {
        e.preventDefault();
        // Perform login functionality here
        console.log("Logged in successfully");
        navigate("/dashboard");  // Navigate to a dashboard or home after login
    };

    return (
        <div className="a-right flex flex-col bg-white/70 dark:bg-slate-800 rounded-2xl p-4 gap-4 shadow-lg">
            <div className="w-full max-w-lg p-8 space-y-6 rounded-sm dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Login</h2>
                <form className="space-y-6" onSubmit={handleFormSubmission}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                        <input id="username" name="username" type="text" required className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn" placeholder="Username" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={passHidden ? "password" : "text"}  // Toggle between 'password' and 'text'
                                required
                                className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn"
                                placeholder="Password"
                            />
                            <img
                                src={passHidden ? showEye : hideEye}
                                alt="toggle visibility"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer icon"
                                onClick={() => setPassHidden(!passHidden)}  // Toggle visibility state
                            />
                        </div>
                    </div>

                    <button type="submit" className="submit-button">Log In</button>
                </form>

                <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Don't have an account?{" "}
                        <button onClick={() => setLogin("Sign Up")} className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
                            Sign Up
                        </button>
                    </p>
                </div>

                <button onClick={handleThemeSwitch} className="toggle-theme-button">
                    {currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
            </div>
        </div>
    );
}

export default Auth;
