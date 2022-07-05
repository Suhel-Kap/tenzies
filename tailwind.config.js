/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require("tailwindcss/defaultTheme");
const colors = {
    ...defaultColors,
    ...{
        "custom-dark-blue": {
            700: "#0B2434",
            600: "#2B283A",
            500: "#4A4E74",
        },
        "neutral": {
            100: "#f5f5f5",
        },
        "green": {
            500: "#59E391",
        },
        "blue": {
            500: "#5035FF",
            700: "#3316f2"
        }
    },
};

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: colors,
        extend: {
            fontFamily: {
                "inter": ["Inter", "sans-serif"]
            },
        },
    },
    plugins: [],
};
