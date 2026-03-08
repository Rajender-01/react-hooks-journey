"use client";
import { useEffect, useRef, useState } from "react";

const PreviousValueExample = (): React.JSX.Element => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number | null>(null);

  // eslint-disable-next-line react-hooks/refs
  const previous = prevCountRef.current;

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-gray-900 rounded-2xl shadow-2xl p-10 text-center border border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-6">Previous Value Example</h1>

        <p className="text-6xl font-extrabold text-green-400 mb-4">{count}</p>
        <p className="text-white mb-6">Previous: {previous ?? "-"}</p>

        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="w-full bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 text-black py-3 rounded-xl font-semibold shadow-lg"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default PreviousValueExample;