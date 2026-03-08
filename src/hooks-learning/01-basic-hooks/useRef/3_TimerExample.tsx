"use client";

import { useRef } from "react";

const TimerExample = (): React.JSX.Element => {
  console.log("re-render");
  const timeRef = useRef<NodeJS.Timeout | null>(null);

  const StartTimer = () => {
    timeRef.current = setInterval(() => {
      console.log("Running...");
    }, 1000);
  };

  const StopTimer = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-gray-900 rounded-2xl shadow-2xl p-10 text-center border border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-8">Timer Example</h1>
        <div className="flex flex-col gap-4">
          <button
            onClick={StartTimer}
            className="w-full bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 text-black py-3 rounded-xl font-semibold shadow-lg"
          >
            Start Timer
          </button>

          <button
            onClick={StopTimer}
            className="w-full bg-red-500 hover:bg-red-600 active:scale-95 transition-all duration-200 text-black py-3 rounded-xl font-semibold shadow-lg"
          >
            Stop Timer
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimerExample;