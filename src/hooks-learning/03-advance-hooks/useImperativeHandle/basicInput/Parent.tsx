"use client";
import { useRef } from "react";
import Child from "./Child";

type ChildRef = {
  focusInput: () => void;
};

const Parent = () => {
  console.log("parent-re-render");

  const childRef = useRef<ChildRef | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-90 space-y-5 shadow-lg">

        <h1 className="text-xl font-semibold tracking-tight text-center">
          useRef + forwardRef
        </h1>

        <Child ref={childRef} />

        <button
          onClick={() => childRef.current?.focusInput()}
          className="w-full px-4 py-2 rounded-lg 
          bg-indigo-600 hover:bg-indigo-500 transition 
          text-sm font-medium"
        >
          Focus Child Input
        </button>

      </div>
    </div>
  );
};

export default Parent;