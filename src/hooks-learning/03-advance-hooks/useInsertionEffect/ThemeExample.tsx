"use client";
import { useInsertionEffect, useState } from "react";

export default function ThemeExample() {
  const [theme, setTheme] = useState("light");
  console.log(theme);

  useInsertionEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      body {
        background: ${theme == "light" ? "white" : "black"};
        color: ${theme == "light" ? "black" : "white"};
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [theme]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-[360px] space-y-6 shadow-lg text-center">

        <h1 className="text-xl font-semibold tracking-tight">
          useInsertionEffect Theme
        </h1>

        <p className="text-sm text-neutral-400">
          Dynamically injecting styles before paint
        </p>

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="w-full px-4 py-2 rounded-lg 
          bg-indigo-600 hover:bg-indigo-500 transition 
          text-sm font-medium"
        >
          Toggle Theme
        </button>

        <p className="text-sm text-neutral-500">
          Current: <span className="text-neutral-200">{theme}</span>
        </p>

      </div>
    </div>
  );
}