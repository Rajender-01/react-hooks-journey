"use client";

import { useState, useTransition } from "react";

const blogList: string[] = new Array(20000)
  .fill(0)
  .map((_, i) => `Product${i}`);

const TransitionBasic = () => {
  console.log("render");
  const [text, setText] = useState("");
  const [list, setList] = useState<string[] | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    startTransition(() => {
      setList(blogList);
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-6">
      <div className="max-w-xl mx-auto space-y-5">
        
        <h1 className="text-2xl font-semibold tracking-tight">
          useTransition Demo
        </h1>

        <input
          type="text"
          onChange={handleChange}
          placeholder="Type something..."
          className="w-full px-4 py-2 rounded-lg 
          bg-neutral-900 border border-neutral-800 
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          placeholder:text-neutral-500"
        />

        <p className="text-neutral-400">
          Text: <span className="text-white">{text}</span>
        </p>

        {isPending && (
          <p className="text-indigo-400 animate-pulse">
            Loading heavy list...
          </p>
        )}

        <div className="h-100 overflow-auto rounded-lg border border-neutral-800 p-3 bg-neutral-900">
          {list?.map((item, idx) => {
            return (
              <p
                key={idx}
                className="text-sm text-neutral-300 py-0.5"
              >
                {item}
              </p>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default TransitionBasic;