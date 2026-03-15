"use client";
import React from "react";
import { useState, useCallback } from "react";

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child Rendered");

  return (
    <button
      onClick={onClick}
      className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
    >
      Child Button
    </button>
  );
});

Child.displayName = "Child";
export default function Parent() {
  console.log("parent");

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950 transition">
      <div className="w-85 p-8 rounded-2xl shadow-xl bg-white dark:bg-slate-900 space-y-5">
        
        <h1 className="text-xl font-semibold text-center text-slate-800 dark:text-white">
          useCallback Demo
        </h1>

        <div className="text-center">
          <p className="text-sm text-slate-500">Count</p>
          <h2 className="text-3xl font-bold text-indigo-600">{count}</h2>
        </div>

        <Child onClick={increment} />

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
        />
      </div>
    </div>
  );
}