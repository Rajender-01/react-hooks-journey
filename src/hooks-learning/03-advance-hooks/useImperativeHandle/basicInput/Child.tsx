"use client";
import { forwardRef, useImperativeHandle, useRef } from "react";

type ChildRef = {
  focusInput: () => void;
};

const Child = forwardRef<ChildRef>((_, ref) => {
  console.log("child re-render");

  const inputRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current?.focus();
    },
  }));

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Child input..."
        className="w-full px-4 py-2 rounded-lg 
        bg-neutral-950 border border-neutral-800
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        placeholder:text-neutral-500"
      />
    </div>
  );
});

Child.displayName = "Child";

export default Child;