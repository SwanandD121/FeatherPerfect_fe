/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "custom-gradient": "linear-gradient(to right, #00C0FD, #E70FAA)",
                "custom-radial": "radial-gradient(145.05% 100% at 50% 0, #1d2b41 0, #020509 57.38%, #0f1a29 88.16%)",
            },
            colors: {
                // define for text
                "theme-primary": "#666666",
                "theme-secondary": "#42446E",

                /** Dark mode schema will be goes here */
                "theme-dark-bg": "#1f1f38",
                "theme-btn": "#4db5ff",
            },
        },
    },
    plugins: [],
    darkMode: "selector",
};
