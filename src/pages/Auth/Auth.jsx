import Logo from "../../img/logo.png";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

// for dark mode
import React, { useEffect, useState } from "react"; //also useState is required, but thats already imported above
// for dark mode

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
    // this method is to navigate from login to signup
    // a litter bit optimize, it create once reference of a method
    const navigatePage = () => setLogin("Login");

    const handleFormSubmission = (e) => {
        e.preventDefault();
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

                    {/* Username Field */}
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn"
                            placeholder="Username"
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
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn"
                                placeholder="Password"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="confirm-password"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                required
                                className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn"
                                placeholder="Confirm Password"
                            />
                        </div>
                    </div>

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
                            Sign In
                        </button>
                    </p>
                </div>

                {/* Dark Mode Toggle */}
                <button
                    onClick={handleThemeSwitch}
                    className="w-full text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    {currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
            </div>
        </div>
    );

    // for dark mode
    // return (
    //     <div className="a-right flex flex-col bg-white/70 dark:bg-slate-800 rounded-2xl p-4 gap-4 shadow-lg">
    //         <div className="infoForm flex flex-col gap-4 items-center">
    //             <div className="flex gap-4 justify-end">
    //                 <h3 className="font-bold text-lg dark:text-white">SignUp</h3>

    //                 {/* Dark mode Toggle Button */}
    //                 <div className="">
    //                     <button
    //                         type="button"
    //                         className="text-black hover:border-4 font-bold dark:text-blue-700 rounded-sm border-2  p-1"
    //                         // onClick={handleThemeSwitch}
    //                     >
    //                         Dark
    //                     </button>
    //                 </div>
    //                 {/* Dark mode Toggle Button */}
    //             </div>

    //             <div className="flex gap-2 ">
    //                 <input
    //                     type="text"
    //                     placeholder="First Name"
    //                     name="firstname"
    //                     className="infoInput bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none"
    //                 />
    //                 <input
    //                     type="text"
    //                     placeholder="Last Name"
    //                     name="lastname"
    //                     className="infoInput bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none"
    //                 />
    //             </div>

    //             <div className="w-full ">
    //                 <input
    //                     type="text"
    //                     placeholder="UserName"
    //                     name="username"
    //                     className="userName w-full bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none"
    //                 />
    //             </div>

    //             <div className="flex gap-2">
    //                 <input
    //                     type="text"
    //                     placeholder="Password"
    //                     name="Password"
    //                     className="password bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none"
    //                 />
    //                 <input
    //                     type="text"
    //                     placeholder="Confirm Password"
    //                     name="Confirm Password"
    //                     className="confirmPassword bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none"
    //                 />
    //             </div>
    //         </div>

    //         <div className="flex flex-col items-center gap-4">
    //             <div className="flex text-sm items-center gap-2">
    //                 <span className="dark:text-white">Already have an account?</span>
    //                 <span
    //                     className="font-bold hover:underline hover:cursor-pointer dark:text-white"
    //                     onClick={navigateToSignUpPage}
    //                 >
    //                     Login
    //                 </span>
    //             </div>

    //             <button
    //                 type="submit"
    //                 className="text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 rounded-lg shadow-md border-2  hover:border-2 dark:border-2 dark:border-black/90 dark:hover:border-[#2eaafa]   hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-transparent hover:to-transparent hover:text-[#297eff] hover:cursor-pointer"
    //             >
    //                 SignUp
    //             </button>
    //         </div>
    //     </div>
    // );
}

function LogIn({ setLogin, handleThemeSwitch = null, currentTheme = "light" }) {
    const navigate = useNavigate();

    // this method is to navigate from login to signup
    const navigatePage = () => setLogin("SignUp");

    const handleFormSubmission = (e) => {
        e.preventDefault();
        // Navigate to the home page
        navigate("/home");
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
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:border-ring-blue-600 transition-all duration-300 hover:border-theme-btn "
                            placeholder="Enter your password..."
                        />
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
                        Sign In
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
                <button
                    onClick={handleThemeSwitch}
                    className="w-full text-sm font-medium text-gray-700 dark:text-gray-300 inline-block"
                >
                    {currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
            </div>
        </div>
    );

    // return (
    //     <div className="a-right flex flex-col bg-white/70 dark:bg-slate-800 rounded-2xl p-4 w-96 gap-4 shadow-lg">
    //         <div className="infoForm flex flex-col gap-4 items-center">
    //             <h3 className="font-bold text-lg dark:text-white">Login</h3>

    //             <div className="w-full ">
    //                 <input
    //                     type="text"
    //                     placeholder="UserName"
    //                     name="username"
    //                     className="userName w-full bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none"
    //                 />
    //             </div>

    //             <div className="w-full ">
    //                 <input
    //                     type="text"
    //                     placeholder="Password"
    //                     name="password"
    //                     className="Password w-full bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none"
    //                 />
    //             </div>

    //             <div className="flex flex-col items-center gap-4">
    //                 <div className="flex text-sm items-center gap-2">
    //                     <span className="dark:text-white">New to Wildlife?</span>
    //                     <span
    //                         className="font-bold hover:underline hover:cursor-pointer dark:text-white"
    //                         onClick={navigateToSignUpPage}
    //                     >
    //                         SignUp
    //                     </span>
    //                 </div>

    //                 <Link to="/home">
    //                     <button
    //                         type="submit"
    //                         className="text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 rounded-lg shadow-md border-2  hover:border-2 dark:border-2 dark:border-black/90 dark:hover:border-[#2eaafa]   hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-transparent hover:to-transparent hover:text-[#297eff] hover:cursor-pointer"
    //                     >
    //                         Login
    //                     </button>
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default Auth;

// bg-gradient-to-r from-[#f9a225] to-[#f95f35]
// linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)
