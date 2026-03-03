"use client";
import { ThemeContext } from "@/src/hooks-learning/01-basic-hooks/useContext/ThemeContext";
import { useContext } from "react";

const Page = (): React.JSX.Element => {
  const context = useContext(ThemeContext);
  if (!context) return <div>No Provider Found</div>;

  const { theme, toggleTheme } = context;
  const isDark = theme === "Dark";

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`w-80 p-8 rounded-lg text-center shadow-lg space-y-6 ${
          isDark ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <h2 className="text-xl font-semibold">useContext Theme Toggle</h2>

        <p className="text-lg">
          Current Theme: <span className="font-bold">{theme}</span>
        </p>

        <button
          onClick={toggleTheme}
          className={`w-full py-2 rounded font-medium transition ${
            isDark
              ? "bg-green-500 hover:bg-green-600 text-black"
              : "bg-indigo-500 hover:bg-indigo-600 text-white"
          }`}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Page;
