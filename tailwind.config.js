/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Gilroy: ['Gilroy', 'Gilroy'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ]
}