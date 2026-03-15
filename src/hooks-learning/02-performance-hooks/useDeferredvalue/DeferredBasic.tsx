"use client";

import { useDeferredValue, useState } from "react";

const DeferredBasic = (): React.JSX.Element => {
  const [text, setText] = useState<string>("");
  const deferredText = useDeferredValue(text);
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="typing.."
        onChange={(e) => setText(e.target.value)}
      />

      <h2>Immediate: {text}</h2>
      <h2>Deferred: {deferredText}</h2>
    </div>
  );
};

export default DeferredBasic;
