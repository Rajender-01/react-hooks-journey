"use client";
import { useMemo, useState } from "react";

const ExpensiveExample = () => {
  console.log("re-render");
  const [number, setNUmber] = useState(0);
  const [dark, setDark] = useState(false);

  const slowFunction = (num: number) => {
    console.log("slow function");
    for (let i = 0; i < 100000; i++) {}
    return num * 2;
  };

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  
  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        placeholder="number"
        value={number}
        onChange={(e) => setNUmber(Number(e.target.value))}
        className="border-2"
      />
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
      <h2>{doubleNumber}</h2>
    </div>
  );
};

export default ExpensiveExample;
