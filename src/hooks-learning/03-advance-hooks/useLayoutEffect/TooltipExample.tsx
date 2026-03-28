"use client";
import { useLayoutEffect, useRef, useState } from "react";

export default function TooltipExample() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  useLayoutEffect(() => {
    if (!show) return;

    const rect = buttonRef.current?.getBoundingClientRect();

    if (rect) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPosition({
        top: rect.bottom + 10,
        left: rect.left,
      });
    }
  }, [show]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">

      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-10 w-100 text-center space-y-6 shadow-lg">

        <h1 className="text-xl font-semibold tracking-tight">
          Tooltip (useLayoutEffect)
        </h1>

        <p className="text-sm text-neutral-400">
          Hover to see tooltip positioned correctly
        </p>

        <button
          ref={buttonRef}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className="px-4 py-2 rounded-lg 
          bg-indigo-600 hover:bg-indigo-500 transition 
          text-sm font-medium"
        >
          Hover me 👆
        </button>

        {show && (
          <div
            className="absolute bg-neutral-800 text-neutral-100 
            px-3 py-1.5 rounded-md text-xs shadow-lg border border-neutral-700"
            style={{
              top: position.top,
              left: position.left,
            }}
          >
            Tooltip
          </div>
        )}

      </div>
    </div>
  );
}