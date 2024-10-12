import React from "react";
import Logo from "../../img/logo.png";
import "./Auth.css";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import eye from "../../img/show-eye.png";
// import hideEye from "../../img/hide-eye.png";

// for dark mode
import { useEffect, useState } from "react"; //also useState is required, but thats already imported above
// for dark mode

const notifyLogin=()=>{
toast.success("Logged in successfully")
}


const Auth = () => {
    // For Toggle Login And SignUp
    const [login, setLogin] = useState("Login");
    // for dark mode
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
    // for dark mode
    // const [theme, setTheme] = useState(null);
    // const [isSignIn, setIsSignedIn] = useState(false);

    // const signupHandler = () => {
    //     //   dummy signup handler
    //     // complete signin handler here

    //     if (isSignIn) {
    //         toast.success("Sign In Successfully");
    //         // toasts can be added further according to use cases
    //     } else {
    //         toast.error("Sign In Failed");
    //     }
    // };

    // const [passHidden, setPassHidden] = useState(true);
    // const [confPassHidden, setConfPassHidden] = useState(true);

    // useEffect(() => {
    //     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //         setTheme("dark");
    //     } else {
    //         setTheme("light");
    //     }
    // }, []);

    // useEffect(() => {
    //     if (theme === "dark") {
    //         document.documentElement.classList.add("dark");
    //     } else {
    //         document.documentElement.classList.remove("dark");
    //     }
    // }, [theme]);

    // const handleThemeSwitch = () => {
    //     setTheme(theme === "dark" ? "light" : "dark");
    // };

    // this method is to navigate from login to signup
    // a litter bit optimize, it create once reference of a method
    const navigatePage = () => setLogin("Login");

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

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

        // Basic strength check (you can expand this)
        const commonPatterns = /^(?=.*123)(?=.*password)(?=.*qwerty)/i;
        if (commonPatterns.test(pass)) {
            return "Password contains common patterns. Please choose a stronger password.";
        }

        return '';
    };

    // Show password logic
    const [passHidden, setPassHidden] = useState(true);
    const [confPassHidden, setConfPassHidden] = useState(true);

    const showPassword = () => {
        setPassHidden(!passHidden);
    };

    const showConfirmPassword = () => {
        setConfPassHidden(!confPassHidden);
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
                    {/* First Name and Last Name Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                First Name
                            </label>
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                required
                                className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn"
                                placeholder="First Name"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Last Name
                            </label>
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                required
                                className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="Email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Email
                        </label>
                        <input
                            id="Email"
                            name="Email"
                            type="Email"
                            required
                            className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn"
                            placeholder="Email"
                        />
                    </div>

                    {/* Password and Confirm Password Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Password
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    id="password"
                                    name="password"
                                    type={passHidden ? "password" : "text"}
                                    required
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className="w-full px-3 py-2 mt-1 pr-10 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none transition-all duration-300 hover:border-theme-btn"
                                    placeholder="Password"
                                />
                                <button 
                                    type="button" 
                                    onClick={showPassword}
                                    className="absolute right-3 bg-white dark:bg-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white px-2 py-1 rounded"
                                >
                                    {
                                        passHidden ? <i class="fa-regular fa-eye"></i> : <i class="fa-regular fa-eye-slash"></i>
                                    }
                                </button>
                            </div>

                        </div>
                        <div>
                            <label
                                htmlFor="confirm-password"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Confirm Password
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type={confPassHidden ? "password" : "text"}
                                    required
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn"
                                    placeholder="Confirm Password"
                                />
                                <button 
                                    type="button" 
                                    onClick={showConfirmPassword}
                                    className="absolute right-3 bg-white dark:bg-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white px-2 py-1 rounded"
                                >
                                    {
                                        confPassHidden ? <i class="fa-regular fa-eye"></i> : <i class="fa-regular fa-eye-slash"></i>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>

                    {passwordError && (
                        <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                    )}

                    {/* SignUp Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-800 duration-300 transition-all outline-none"
                    >
                        Sign Up
                    </button>
                </form>

                {/* New to Wildlife? Sign Up Section */}
                <div className="text-center ">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Alreay in Wildlife?{" "}
                        <button
                            onClick={navigatePage}
                            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
                        >
                            Log In
                        </button>
                    </p>
                </div>

                {/* Dark Mode Toggle */}
                <div className="flex flex-row justify-center items-center"> 
                    <label className="switch"> 
                        <input type="checkbox" onChange={handleThemeSwitch} /> 
                            <span className="slider"></span> 
                    </label>
                </div>
            </div>
        </div>
    );
}

function LogIn({ setLogin, handleThemeSwitch = null, currentTheme = "light" }) {
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    // const [hidden, setHidden] = useState(true);
    const navigate = useNavigate();

    // const loginHandler = () => {
    //     //  dummy login handler
    //     // complete the login  handler here

    //     if (isLoggedIn) {
    //         toast.success("Logged In Successfully");
    //     } else {
    //         toast.error("Login Failed");
    //     }
    // };

    // this method is to navigate from login to signup
    const navigatePage = () => setLogin("SignUp");

    const handleFormSubmission = (e) => {
        e.preventDefault();
        // Navigate to the home page
        notifyLogin();
        navigate("/home");
    };

    // Show password logic
    const [passHidden, setPassHidden] = useState(true);
    const [confPassHidden, setConfPassHidden] = useState(true);

    const showPassword = () => {
        setPassHidden(!passHidden);
    };

    return (
        <div className="a-right flex flex-col bg-white/70 dark:bg-slate-800 rounded-2xl p-4 w-96 gap-4 shadow-lg">
            <div className="w-full max-w-md p-8 space-y-6 rounded-lg dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Login to Your Account</h2>
                <form className=" space-y-4" onSubmit={handleFormSubmission}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn"
                            placeholder="Enter your username..."
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Password
                        </label>
                        <div className="relative flex items-center">
                            <input
                                id="password"
                                name="password"
                                type={passHidden ? "password" : "text"}
                                required
                                className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn "
                                placeholder="Enter your password..."
                            />
                            <button 
                                type="button" 
                                onClick={showPassword}
                                className="absolute right-3 bg-white dark:bg-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white px-2 py-1 rounded"
                                >
                                {
                                    passHidden ? <i class="fa-regular fa-eye"></i> : <i class="fa-regular fa-eye-slash"></i>
                                }
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                                checked
                                readOnly
                            />
                            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                                Remember me
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-800 duration-300 transition-all outline-none"
                    >
                        Log In
                    </button>
                </form>

                {/* New to Wildlife? Sign Up Section */}
                <div className="text-center ">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        New to Wildlife?{" "}
                        <button
                            onClick={navigatePage}
                            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
                        >
                            Sign Up
                        </button>
                    </p>
                </div>

                {/* Dark Mode Toggle */}
                <div className="flex flex-row justify-center items-center"> 
                    <label className="switch"> 
                        <input type="checkbox" onChange={handleThemeSwitch} /> 
                            <span className="slider"></span> 
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Auth;

// bg-gradient-to-r from-[#f9a225] to-[#f95f35]
// linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)
