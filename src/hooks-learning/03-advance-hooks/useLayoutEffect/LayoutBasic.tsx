"use client";

import { useLayoutEffect, useRef } from "react";

const LayoutBasic = () => {
  console.log("re-render");

  const boxRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    console.log("width:", boxRef.current?.offsetWidth);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-[400px] space-y-5 shadow-lg text-center">

        <h1 className="text-xl font-semibold tracking-tight">
          useLayoutEffect Demo
        </h1>

        <p className="text-sm text-neutral-400">
          Measuring element size before paint
        </p>

        <div
          ref={boxRef}
          className="w-full h-40 rounded-lg bg-indigo-600 flex items-center justify-center text-sm font-medium"
        >
          Layout Box
        </div>

      </div>
    </div>
  );
};

export default LayoutBasic;