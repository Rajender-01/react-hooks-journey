"use client";
import { useEffect, useState, useEffectEvent } from "react";

export default function ResizeLogger() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = useEffectEvent(() => {
    setWidth(window.innerWidth);
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-[320px] text-center space-y-4 shadow-lg">

        <h1 className="text-lg font-semibold">
          Resize Logger
        </h1>

        <div className="text-3xl font-bold text-indigo-500">
          {width}px
        </div>

        <p className="text-xs text-neutral-500">
          Updates on window resize
        </p>

      </div>
    </div>
  );
}