import { createContext, useContext, useState } from "react";

// Create Theme Context  that is given by the react
const ThemeContext = createContext();

// Theme Provider
export function ThemeProvider({ children }) 
{
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };

  return (
    //it must be aware of the themecontext that we have made
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}


// Custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within the ThemeProvider"
    );
  }

  return context;
}


// Theme Toggle Button
function ThemeToggleButton() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        flex
        items-center
        justify-center
        rounded-full
        border border-gray-700
        bg-amber-500
        px-4 py-2
        text-lg
        transition-all
        duration-200
        hover:scale-105
        hover:bg-amber-400
        active:scale-95
        focus:outline-none
        focus:ring-2
        focus:ring-amber-400
      "
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}


// Theme Card
function ThemeCard({ title, children }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`rounded-xl p-6 ${
        isDark
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-800"
      }`}
    >
      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <div className="mt-3">
        {children}
      </div>
    </div>
  );
}


// Theme Toggler Component
function ThemeToggler() {
  const { isDark } = useTheme();

  return (
    <div
      className={`rounded-2xl p-6 ${
        isDark
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between">
        
        <div>
          <h2 className="text-2xl font-bold">
            Theme Context
          </h2>

          <p className="mt-2 text-gray-400">
            Current theme: {isDark ? "Dark" : "Light"}
          </p>
        </div>

        <ThemeToggleButton />

      </div>

      <div className="mt-6">
        <ThemeCard title="My Card">
          <p>
            Hello Aditya 👋
          </p>
        </ThemeCard>
      </div>
    </div>
  );
}

export default ThemeToggler;