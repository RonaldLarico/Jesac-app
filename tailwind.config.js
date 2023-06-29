/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 3s infinite'
      },
      keyframes: {
        'trans-top': {
          '0%, 100%': { transform: 'translateY(30px)' },
          '50%': { transform: 'translate(0)' }
        }
      },
      animation: {
        'trans-top': 'trans-top 1.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

