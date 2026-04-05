"use client";
import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return localStorage.getItem("theme") || "light";
}
function getServerSnapshot() {
  return "light";
}
const ThemeSync = () => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new Event("storage"));
  };
  return (
    <div>
      <h2>Theme: {theme}</h2>
      <button onClick={toggle}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSync;

// Button click
//  ↓
// localStorage update
//  ↓
// storage event fire
//  ↓
// callback run
//  ↓
// React calls getSnapshot()
//  ↓
// new theme
//  ↓
// re-render