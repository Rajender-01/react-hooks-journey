"use client";
import { useEffect, useState } from "react";

type Count = number;
const INITIAL_COUNT: Count = 0;

const RunOnceOnMount = (): React.JSX.Element => {
  const [count, setCount] = useState<Count>(INITIAL_COUNT);

  const handleIncrement = (): void => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("1_Run Once On Mount");
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-900 text-white px-8 py-6 rounded-lg text-center space-y-4 shadow-lg">
        
         <h2 className="text-xl font-semibold text-gray-300">
          Run Once on Mount
        </h2>
        
        <div className="text-3xl font-bold text-green-400">
          {count}
        </div>

        <button
          onClick={handleIncrement}
          className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded text-black font-medium"
        >
          Increment
        </button>

      </div>
    </div>
  );
};

export default RunOnceOnMount;

// VISUAL FLOW => render => DOM Update => Effect Runs

/*
EXPLANATION:

1. useState:
   - Manages the "count" state.
   - INITIAL_COUNT is set to 0.
   - setCount updates the state.
   - When count changes, component re-renders.

2. handleIncrement:
   - Increases count by 1 using previous value.
   - Functional update ensures correct state update.

3. useEffect:
   - The empty dependency array [] means:
     -> This effect runs only once when the component mounts.
     -> It behaves like componentDidMount in class components.
   - It will NOT run when count changes.
   - It simply logs "Run Once On Mount" in the console once.

4. Rendering:
   - Current count is displayed.
   - Button click triggers state update.
   - State update causes re-render.
*/