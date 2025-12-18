import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleMode}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 text-white shadow-sm backdrop-blur hover:bg-white/20 transition"
    >
      <span className={`h-2.5 w-2.5 rounded-full ${darkMode ? "bg-emerald-400" : "bg-amber-300"}`} />
      {darkMode ? "Dark mode" : "Light mode"}
    </button>
  );
}
