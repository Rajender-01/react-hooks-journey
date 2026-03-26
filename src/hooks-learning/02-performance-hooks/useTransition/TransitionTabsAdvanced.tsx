"use client";
import React, { useState, useTransition } from "react";

const HeavyTab = () => {
  const item = [];

  for (let i = 0; i < 30000; i++) {
    item.push(
      <div key={i} className="text-sm text-neutral-300 py-0.5">
        Item {i}
      </div>
    );
  }

  return item;
};

const TransitionTabsAdvanced = () => {
  const [tab, setTab] = useState("Home");
  const [isPending, startTransition] = useTransition();

  const switchTab = (nextTab: string) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-6">
      <div className="max-w-xl mx-auto space-y-5">

        <h1 className="text-2xl font-semibold tracking-tight">
          useTransition Tabs Advance
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => switchTab("Home")}
            className={`px-4 py-2 rounded-lg border text-sm transition
            ${tab === "Home"
                ? "bg-indigo-600 border-indigo-600 text-white"
                : "bg-neutral-900 border-neutral-800 hover:bg-neutral-800"
              }`}
          >
            Home
          </button>

          <button
            onClick={() => switchTab("Products")}
            className={`px-4 py-2 rounded-lg border text-sm transition
            ${tab === "Products"
                ? "bg-indigo-600 border-indigo-600 text-white"
                : "bg-neutral-900 border-neutral-800 hover:bg-neutral-800"
              }`}
          >
            Products
          </button>
        </div>

        {isPending && (
          <p className="text-indigo-400 animate-pulse">
            Loading heavy tab...
          </p>
        )}

        <div className="h-100 overflow-auto rounded-lg border border-neutral-800 p-3 bg-neutral-900">
          {tab === "Home" && (
            <p className="text-neutral-400 text-sm">
              Welcome 👋 This is lightweight Home tab.
            </p>
          )}

          {tab === "Products" && <HeavyTab />}
        </div>

      </div>
    </div>
  );
};

export default TransitionTabsAdvanced;