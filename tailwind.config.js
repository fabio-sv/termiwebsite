/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        jellyfish: "url('./assets/jellyfish.jpg')",
      },
      colors: {
        "fsv-text-muted": "#7a7a7a",
        "fsv-black": "#1F2229",
        "fsv-gray-dark": "#13141a",
        "fsv-border": "#272a34",
        "fsv-gray": "#E6E6E6",
        "fsv-white": "#FFFFFF",
        "fsv-red": "#EC0101",
        "fsv-red-dark": "#D41919",
        "fsv-pink": "#D71655",
        "fsv-pink-dark": "#BF2E5D",
        "fsv-yellow": "#FF8A18",
        "fsv-yellow-dark": "#FEA44C",
        "fsv-green": "#47D4B9",
        "fsv-green-dark": "#5EBDAB",
        "fsv-cyan": "#05A1F7",
        "fsv-cyan-dark": "#49AEE6",
        "fsv-blue": "#277FFF",
        "fsv-blue-dark": "#367BF0",
        "fsv-blue-bg": "#2471f3",
        "fsv-purple": "#8C42AB",
      },
      fontFamily: {
        "fira-code": ["Fira Code", "monospace"],
        segoe: "Segoe UI",
      },
      keyframes: {
        blink: {
          "0%": { opacity: 1 },
          "48%": { opacity: 1 },
          "50%": { opacity: 0 },
          "99%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        blink: "blink 1.5s linear infinite",
      },
      boxShadow: {
        "5xl": "0 10px 30px 0 rgba(0, 0, 0, 0.75)",
        terminal: "0 0 0 2px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [],
};
