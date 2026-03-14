"use client";
import { useMemo, useState } from "react";

type Count = number;
type Text = string;

const INITIAL_COUNT: Count = 0;
const INITIAL_TEXT: Text = "";

const UseMemoBasic = (): React.JSX.Element => {
  console.log("re-render");

  const [count, setCount] = useState<Count>(INITIAL_COUNT);
  const [text, setText] = useState<Text>(INITIAL_TEXT);

  const expensiveCalculation: number = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white">
      <div className="w-87.5 p-8 bg-slate-900 rounded-xl shadow-xl border border-slate-800">
        <h2 className="text-2xl font-semibold mb-2">
          Count: <span className="text-blue-400">{count}</span>
        </h2>

        <h3 className="text-lg mb-6 text-slate-300">
          Expensive Calculation:{" "}
          <span className="text-cyan-400 font-medium">
            {expensiveCalculation}
          </span>
        </h3>

        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="w-full py-2 mb-4 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-medium"
        >
          Increment
        </button>

        <input
          placeholder="Type something..."
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default UseMemoBasic;
