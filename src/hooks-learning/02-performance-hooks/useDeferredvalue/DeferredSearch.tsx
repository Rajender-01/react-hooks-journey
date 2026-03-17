"use client";

import { useDeferredValue, useMemo, useState } from "react";

const blogList: string[] = new Array(5000).fill(0).map((_, i) => `Product${i}`);

const DeferredSearch = (): React.JSX.Element => {
  console.log("render");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query)

  const filteredProducts: string[] = useMemo(
    () =>
      blogList.filter((product) => {
        console.log("Filtering...");
        return product.toLowerCase().includes(deferredQuery.toLowerCase());
      }),
    [deferredQuery],
  );

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, idx) => <p key={idx}>{product}</p>)
      ) : (
        <p>No Products</p>
      )}
    </div>
  );
};

export default DeferredSearch;
