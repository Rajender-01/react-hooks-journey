"use client";
import { useInsertionEffect, useState } from "react";

export default function InsertionBasic() {

  const [color, setColor] = useState("red");

  useInsertionEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      .dynamic-box {
        background: ${color};
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [color]);

  return (
    <div style={{ padding: "40px" }}>
      <div className="dynamic-box" style={{ width: 100, height: 100, border:"2px solid green" }} />

      <button onClick={() => setColor("blue")}>
        Change Color
      </button>
    </div>
  );
}