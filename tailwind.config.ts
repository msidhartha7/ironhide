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
                    50: "#e9f1ff",
                    100: "#c8dbff",
                    200: "#a3c2ff",
                    300: "#7aa9ff",
                    400: "#4a8bff",
                    500: "#2f7bff",
                    600: "#1f62d6",
                    700: "#184fb0",
                    800: "#123d8a",
                    900: "#0f2f6a",
                    950: "#081c40",
                },
                night: {
                    50: "#0f1c33",
                    100: "#0c162b",
                    200: "#0a1326",
                    300: "#091122",
                    400: "#080f1f",
                    500: "#070c1a",
                    600: "#060a16",
                    700: "#050813",
                    800: "#040710",
                    900: "#04060e",
                    950: "#03040b",
                },
            },
            backgroundImage: {
                "hero-radial":
                    "radial-gradient(circle at 50% 20%, rgba(69,113,255,0.35), rgba(4,9,21,0) 45%), radial-gradient(circle at 85% 30%, rgba(22,167,255,0.18), rgba(4,9,21,0) 40%), radial-gradient(circle at 20% 40%, rgba(63,116,255,0.22), rgba(4,9,21,0) 40%)",
                "hero-glow":
                    "radial-gradient(1200px circle at 10% 20%, rgba(68,110,255,0.28), rgba(4,9,21,0)), radial-gradient(900px circle at 90% 10%, rgba(22,167,255,0.2), rgba(4,9,21,0))",
            },
            dropShadow: {
                glow: "0 10px 30px rgba(47,123,255,0.35)",
            },
        },
    },
    darkMode: "class",
    plugins: [],
};

export default config;
