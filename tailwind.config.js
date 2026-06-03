/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        obsidian: "#0a0a0a",
        ash: "#a3a3a3",
        bone: "#f5f5f0",
        blood: "#8f1111",
        silver: "#c9c9c9"
      },
      fontFamily: {
        display: ["Inter", "Arial", "sans-serif"],
        body: ["Inter", "Arial", "sans-serif"]
      },
      letterSpacing: {
        editorial: "-0.075em"
      },
      boxShadow: {
        brutal: "0 0 80px rgba(143, 17, 17, 0.18)"
      }
    }
  },
  plugins: []
};
