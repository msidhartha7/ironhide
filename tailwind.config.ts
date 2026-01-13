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
                    50: "#e6f5ff", // lightest blue
                    100: "#ccebff",
                    200: "#99d6ff",
                    300: "#66c2ff",
                    400: "#33adff",
                    500: "#0099ff", // base blue
                    600: "#0088e6",
                    700: "#0077cc",
                    800: "#0066b3",
                    900: "#005599",
                    950: "#003d73", // darkest blue
                },
            },
        },
    },
    darkMode: "class",
    plugins: [],
};

export default config;
