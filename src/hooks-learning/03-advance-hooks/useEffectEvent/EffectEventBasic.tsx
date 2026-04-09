"use client";

import { useEffect, useEffectEvent, useState } from "react";

const EffectEventBasic = (): React.JSX.Element => {
  console.log("re-render");

  const [count, setCount] = useState(0);

  const latestValue = useEffectEvent(() => {
    console.log("start1");
    console.log(count);
  });

  useEffect(() => {
    console.log("start");

    const interval = setInterval(() => {
      latestValue();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-[320px] text-center space-y-6 shadow-lg">

        <h1 className="text-lg font-semibold">
          useEffectEvent Demo
        </h1>

        <div className="text-4xl font-bold text-indigo-500">
          {count}
        </div>

        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
          className="w-full px-4 py-2 rounded-lg 
          bg-indigo-600 hover:bg-indigo-500 transition 
          text-sm font-medium"
        >
          Increase
        </button>

        <p className="text-xs text-neutral-500">
          Logs latest value without re-subscribing effect
        </p>

      </div>
    </div>
  );
};

export default EffectEventBasic;