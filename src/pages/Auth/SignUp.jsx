import React, { useEffect, useState } from 'react';
import { registerValidation } from '../../Validation/Validation'; 

function SignUp({ setLogin }) {
    // For dark mode
    const [theme, setTheme] = useState(null);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerValidation.validate(formData, { abortEarly: false });
            console.log("Signup Successful", formData);
            setFormData({
                firstname: '',
                lastname: '',
                username: '',
                password: '',
                confirmPassword: ''
            });
            setErrors({});
        } catch (error) {
            const formErrors = {};
            error.inner.forEach(err => {
                formErrors[err.path] = err.message;
            });
            setErrors(formErrors);
        }
    };
    

    return (
        <div className="a-right flex flex-col bg-white/70 dark:bg-slate-800 rounded-2xl p-4 gap-4 shadow-lg">
            <div className="infoForm flex flex-col gap-4 items-center w-100">
                <div className="flex gap-4 justify-end">
                    <h3 className="font-bold text-lg dark:text-white">SignUp</h3>

                    {/* Dark mode Toggle Button */}
                    <div>
                        <button
                            type="button"
                            className="text-black hover:border-4 font-bold dark:text-blue-700 rounded-sm border-2 p-1"
                            onClick={handleThemeSwitch}
                        >
                            Dark
                        </button>
                    </div>
                    {/* Dark mode Toggle Button */}
                </div>

                <form onSubmit={handleSubmit} className="w-full">
                    <div className="flex gap-2 flex-col">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            className={`infoInput ${errors.firstname ? 'border-red-500' : ''} bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none`}
                        />
                        {errors.firstname && <p className="text-red-500">{errors.firstname}</p>}
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            className={`infoInput ${errors.lastname ? 'border-red-500' : ''} bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none`}
                        />
                        {errors.lastname && <p className="text-red-500">{errors.lastname}</p>}
                    </div>

                    <div className="w-full mt-2">
                        <input
                            type="text"
                            placeholder="UserName"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className={`userName w-full ${errors.username ? 'border-red-500' : ''} bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none`}
                        />
                        {errors.username && <p className="text-red-500">{errors.username}</p>}
                    </div>

                    <div className="flex gap-2 flex-col mt-2">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`password ${errors.password ? 'border-red-500' : ''} bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none`}
                        />
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`confirmPassword ${errors.confirmPassword ? 'border-red-500' : ''} bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none`}
                        />
                        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 rounded-lg shadow-md border-2 hover:border-2 dark:border-2 dark:border-black/90 dark:hover:border-[#2eaafa] hover:border-[#2eaafa] mt-2"
                    >
                        SignUp
                    </button>
                </form>
            </div>
 
            <div className="flex flex-col items-center gap-4 p-4">
                <div className="flex text-sm items-center gap-2">
                    <span className="dark:text-white">Already have an account?</span>
                    <span
                        className="font-bold hover:underline hover:cursor-pointer dark:text-white"
                        onClick={() => setLogin("Login")}
                    >
                        Login
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
