export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 10px 60px rgba(59,130,246,0.35)",
      },
      backgroundImage: {
        "mesh-1":
          "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.18), transparent 25%), radial-gradient(circle at 80% 0%, rgba(94,234,212,0.18), transparent 25%), radial-gradient(circle at 50% 80%, rgba(248,113,113,0.15), transparent 30%)",
      },
    },
  },
  plugins: [],
};