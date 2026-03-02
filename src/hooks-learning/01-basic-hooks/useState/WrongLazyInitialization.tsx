"use client";
import { useState } from "react";

type count = number;
const INITIAL_COUNT: count = 0;

function heavyCalculation(): number[] {
  console.log("heavy calculation - Wrong component");
  const array: number[] = [];
  // use 10000 place of 10
  for (let index = 0; index < 10; index++) {
    array.push(index);
  }
  return array;
}

const WrongLazyInitialization = (): React.JSX.Element => {
  const [count, setCount] = useState<count>(INITIAL_COUNT);
  const [data] = useState(heavyCalculation());

  const handleIncrement = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-xl p-8 text-center shadow-xl space-y-6">
        
        <h2 className="text-2xl font-bold text-white">
          Lazy Init Demo
        </h2>

        <div className="space-y-2">
          <p className="text-4xl font-extrabold text-green-400">
            {count}
          </p>
          <p className="text-gray-400 text-sm">
            Data Length: <span className="text-white font-medium">{data.length}</span>
          </p>
        </div>

        <button
          type="button"
          onClick={handleIncrement}
          className="w-full bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 text-black font-semibold py-2 rounded-lg shadow-md"
        >
          Increment
        </button>

      </div>
    </div>
  );
};

export default WrongLazyInitialization;