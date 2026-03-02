"use client";
import { useState } from "react";

const Beginner = (): React.JSX.Element => {
  type CounterValue = number;
  const INITIAL_COUNT: CounterValue = 0;
  const [count, setCount] = useState<CounterValue>(INITIAL_COUNT);

  const handleIncreaseCount = (): void => {
    setCount((prev: CounterValue) => prev + 1);
  };
  const handleDecreaseCount = (): void => {
    setCount((prev: CounterValue) => Math.max(prev - 1, 0));
  };
  const handleResetCount = (): void => {
    setCount(INITIAL_COUNT);
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-gray-900 rounded-2xl shadow-2xl p-10 text-center border border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-8">Counter</h1>

        <div className="text-6xl font-extrabold text-green-400 mb-8">
          {count}
        </div>

        <button
          type="button"
          onClick={handleIncreaseCount}
          className="w-full bg-green-500 mb-2 hover:bg-green-600 active:scale-95 transition-all duration-200 text-black py-3 rounded-xl font-semibold shadow-lg"
        >
          Increase Count
        </button>
        <button
          type="button"
          onClick={handleDecreaseCount}
          className="w-full bg-green-500 mb-2 hover:bg-green-600 active:scale-95 transition-all duration-200 text-black py-3 rounded-xl font-semibold shadow-lg"
        >
          Decrease Count
        </button>
        <button
          type="button"
          onClick={handleResetCount}
          className="w-full bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 text-black py-3 rounded-xl font-semibold shadow-lg"
        >
          Reset Count
        </button>
      </div>
    </div>
  );
};

export default Beginner;
