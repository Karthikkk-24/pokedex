/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#e94848',
                secondary: '#4d4c4c',
                tertiary: '#1eb3c8'
            }
        },
    },
    plugins: [],
}