"use client";
import { useMemo, useState } from "react";

const ExpensiveExample = () => {
  console.log("re-render");

  const [number, setNUmber] = useState(0);
  const [dark, setDark] = useState(false);

  const slowFunction = (num: number) => {
    console.log("slow function");
    for (let i = 0; i < 100000; i++) {}
    return num * 2;
  };

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#020617" : "#f8fafc",
    color: dark ? "#f8fafc" : "#020617",
  };

  return (
    <div
      style={theme}
      className="min-h-screen flex items-center justify-center transition-all duration-300"
    >
      <div
        className={`p-8 rounded-2xl shadow-xl w-[320px] space-y-5 ${
          dark ? "bg-slate-900" : "bg-white"
        }`}
      >
        <h1 className="text-xl font-semibold text-center">useMemo Demo ⚡</h1>

        <input
          type="number"
          placeholder="Enter number"
          value={number}
          onChange={(e) => setNUmber(Number(e.target.value))}
          className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
        />

        <button
          onClick={() => setDark((prev) => !prev)}
          className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
        >
          Toggle Theme
        </button>

        <div className="text-center">
          <p className="text-sm opacity-70">Double Value</p>
          <h2 className="text-3xl font-bold">{doubleNumber}</h2>
        </div>
      </div>
    </div>
  );
};

export default ExpensiveExample;