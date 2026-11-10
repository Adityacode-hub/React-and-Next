
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const themes = {
  Violet: "#8B5CF6",
  Pink: "#EC4899",
  Rose: "#F43F5E",
  Blue: "#3B82F6",
  Cyan: "#06B6D4",
  Emerald: "#10B981",
  Orange: "#F97316",
  Amber: "#F59E0B",
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [accent, setAccent] = useState("#8B5CF6");

  useEffect(() => {
    const saved = localStorage.getItem("taskflow-accent");
    if (saved) setAccent(saved);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accent",
      accent
    );
    localStorage.setItem("taskflow-accent", accent);
  }, [accent]);

  return (
    <ThemeContext.Provider
      value={{ accent, setAccent, themes }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be inside ThemeProvider");
  }

  return context;
}
