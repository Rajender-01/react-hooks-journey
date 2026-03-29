"use client";
import { useInsertionEffect } from "react";

let styleSheet: HTMLStyleElement | null = null;

function insertStyle(css: string) {
  if (!styleSheet) {
    styleSheet = document.createElement("style");
    document.head.appendChild(styleSheet);
  }

  styleSheet.innerHTML += css;
}

export default function AdvancedInsertion() {

  useInsertionEffect(() => {
    insertStyle(`
      .card {
        padding: 20px;
        border: 2px solid black;
        background: lightblue;
      }
    `);
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <div className="card">
        Advanced CSS-in-JS 🚀
      </div>
    </div>
  );
}