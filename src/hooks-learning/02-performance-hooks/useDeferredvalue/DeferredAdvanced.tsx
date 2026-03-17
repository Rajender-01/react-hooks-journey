"use client";
import { useState, useDeferredValue } from "react";

function SlowList({ text }: { text: string }) {
  const items = [];

  for (let i = 0; i < 20000; i++) {
    items.push(<div key={i}>{text}</div>);
  }

  return <div>{items}</div>;
}

export default function DeferredAdvanced() {

  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <div style={{ padding: "40px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <SlowList text={deferredText} />
    </div>
  );
}