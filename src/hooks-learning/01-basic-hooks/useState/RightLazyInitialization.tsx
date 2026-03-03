"use client";
import { useState } from "react";

type Count = number;
const INITIAL_COUNT: Count = 0;

function heavyCalculation(): number[] {
  console.log("heavy calculation - Right Component");
  const array: Array<number> = [];
  for (let index = 0; index < 100000000; index++) {
    array.push(index);
  }
  return array;
}

const RightLazyInitialization = (): React.JSX.Element => {
  const [count, setCount] = useState<Count>(INITIAL_COUNT);
  const [data] = useState<Array<number>>(() => heavyCalculation());

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

export default RightLazyInitialization;