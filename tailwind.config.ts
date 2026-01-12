import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: "#ecfeff", // lightest cyan
                    100: "#cffafe",
                    200: "#a5f3fc",
                    300: "#67e8f9",
                    400: "#22d3ee",
                    500: "#06b6d4", // base cyan
                    600: "#0891b2", // primary (deep cyan)
                    700: "#0e7490", // darker variant
                    800: "#155e75",
                    900: "#164e63",
                    950: "#083344", // darkest cyan
                },
            },
        },
    },
    darkMode: "class",
    plugins: [],
};

export default config;
