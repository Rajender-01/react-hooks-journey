"use client";
import { useMemo, useState } from "react";

const products: Array<string> = [
  "Shoes",
  "T-Shirt",
  "Watch",
  "Laptop",
  "Phone",
];

export default function FilterExample() {
  const [search, setSearch] = useState<string>("");
  const [text, setText] = useState<string>("");

  const filteredProducts: string[] = useMemo(() => {
    console.log("Filtering...");
    return products.filter((product) =>
      product.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white">
      <div className="w-100 bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-800">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Product Filter
        </h2>

        <input
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <ul className="space-y-2 mb-6">
          {filteredProducts.map((item) => (
            <li
              key={item}
              className="px-3 py-2 bg-slate-800 rounded-md hover:bg-slate-700 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        <input
          placeholder="Type something..."
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
