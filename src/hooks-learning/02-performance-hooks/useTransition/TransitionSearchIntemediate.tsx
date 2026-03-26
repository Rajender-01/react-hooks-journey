"use client";
import { ChangeEvent, useState, useTransition } from "react";

const blogList = new Array(20000).fill(0).map((_, i) => `product${i}`);

const TransitionSearchIntemediate = () => {
  console.log("re-render");
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string[] | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setQuery(value);
    startTransition(() => {
      const filteredProduct = blogList.filter((product) => {
        return product.toLowerCase().includes(query.trim().toLowerCase());
      });
      setResult(filteredProduct);
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-6">
      <div className="max-w-xl mx-auto space-y-5">
        <h1 className="text-2xl font-semibold tracking-tight">
          useTransition Search
        </h1>

        <input
          value={query}
          placeholder="Search products..."
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg 
          bg-neutral-900 border border-neutral-800 
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          placeholder:text-neutral-500"
        />

        {isPending && (
          <p className="text-indigo-400 animate-pulse">
            Searching heavy list...
          </p>
        )}

        <div className="h-100 overflow-auto rounded-lg border border-neutral-800 p-3 bg-neutral-900">
          {result?.map((product, index) => {
            return (
              <p key={index} className="text-sm text-neutral-300 py-0.5">
                Name = {product}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TransitionSearchIntemediate;
