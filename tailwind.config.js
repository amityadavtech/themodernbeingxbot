/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        blob: "blobAnimation 1s infinite",
        flote: "flote 3s ease-in-out infinite", // ✅ Flote animation add kiya
        'fade-up': 'fadeUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      keyframes: {
        blobAnimation: {
          "100%": {
            backgroundPosition: "right, left, center, right",
          },
          fadeUp: {
            '0%': { opacity: 0, transform: 'translateY(30px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
        flote: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" }, // Default position
          "50%": { transform: "translateY(-4px) rotate(0.1deg)" }, // Slight tilt
        },
      },
    },
  },
  plugins: [],
};
