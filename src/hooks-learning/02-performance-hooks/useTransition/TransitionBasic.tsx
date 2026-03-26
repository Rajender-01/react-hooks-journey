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
    <div>
      <input type="text" onChange={handleChange} />
      <p>Text: {text}</p>
      {isPending && <p>Loading...</p>}
      {list?.map((item, idx) => {
        return <p key={idx}>{item}</p>;
      })}
    </div>
  );
};

export default TransitionBasic;
