"use client";
import { useState, useCallback } from "react";

export default function UseCallbackBasic(): React.JSX.Element {

  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    console.log("Function recreated?");
    setCount(prev => prev + 1);
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>{count}</h2>

      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
}