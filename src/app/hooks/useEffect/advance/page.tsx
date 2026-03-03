"use client";
import CleanUp from "@/src/hooks-learning/01-basic-hooks/useEffect/4_CleanUp";
import { useState } from "react";

const Page = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle Component
      </button>

      {show && <CleanUp />}
    </div>
  );
};

export default Page;