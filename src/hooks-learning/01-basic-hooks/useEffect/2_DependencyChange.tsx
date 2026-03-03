"use client";
import { useEffect, useState } from "react";

type Count = number;
const INITIAL_COUNT: Count = 0;
const DependencyChange = (): React.JSX.Element => {
  const [count, setCount] = useState<Count>(INITIAL_COUNT);

  const handleIncrement = (): void => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("Run Once On Mount and when dependency change");
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default DependencyChange;

/*
EXPLANATION:

1. useState:
   - Manages the "count" state.
   - Initial value is 0.
   - setCount updates the count.
   - When count updates, component re-renders.

2. handleIncrement:
   - Increases count by 1.
   - Uses functional update (prev => prev + 1)
     to ensure correct state update.

3. useEffect with [count] dependency:
   - This effect runs:
       ✔ Once when component mounts.
       ✔ Every time "count" changes.
   - Because "count" is inside the dependency array.
   - When button is clicked:
       -> count updates
       -> component re-renders
       -> useEffect runs again.

4. Important Difference:
   - []  → Runs only once on mount.
   - [count] → Runs on mount + whenever count changes.
   - No dependency array → Runs after every render.

5. In this component:
   - Console log will run initially.
   - Then it will run every time you click "Increment".

6. VISUAL FLOW:
   - State Change (setCount)
   - Component Re-render
   - DOM Update
   - useEffect Runs

   Short form:
   render => DOM Update => Effect Runs
*/
