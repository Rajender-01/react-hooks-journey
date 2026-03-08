"use client";
import { useRef } from "react";

const UseRefBasic = (): React.JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = (): void => {
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-gray-900 rounded-2xl shadow-2xl p-10 text-center border border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-8">useRef Focus Input</h1>

        <input
          ref={inputRef}
          type="text"
          placeholder="Type here..."
          className="w-full mb-6 px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={focusInput}
          className="w-full bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 text-black py-3 rounded-xl font-semibold shadow-lg"
        >
          Focus Input
        </button>
      </div>
    </div>
  );
};

export default UseRefBasic;