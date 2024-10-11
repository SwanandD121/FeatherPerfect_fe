// src/components/PasswordInput.js
import React, { useState } from "react";

const PasswordInput = ({ id, name, value, onChange, placeholder }) => {
    const [hidden, setHidden] = useState(true);

    const toggleVisibility = () => {
        setHidden((prev) => !prev);
    };

    return (
        <div className="relative flex items-center">
            <input
                id={id}
                name={name}
                type={hidden ? "password" : "text"}
                value={value}
                onChange={onChange}
                required
                className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 outline-none transition-all duration-300 hover:border-theme-btn"
                placeholder={placeholder}
            />
            <button
                type="button"
                onClick={toggleVisibility}
                className="absolute right-3 bg-white dark:bg-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white px-2 py-1 rounded"
            >
                {hidden ? (
                    <i className="fa-regular fa-eye"></i>
                ) : (
                    <i className="fa-regular fa-eye-slash"></i>
                )}
            </button>
        </div>
    );
};

export default PasswordInput;
