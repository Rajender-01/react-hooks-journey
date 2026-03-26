"use client";

import { useReducer } from "react";

type State = { count: number };
type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: State, action: Action): State {
  console.log(state, action);
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

const ReducerBasic = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-[320px] text-center space-y-6 shadow-lg">

        <h1 className="text-xl font-semibold tracking-tight">
          useReducer Counter
        </h1>

        <div className="text-5xl font-bold text-indigo-500">
          {state.count}
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => dispatch({ type: "increment" })}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-sm font-medium"
          >
            Increment
          </button>

          <button
            onClick={() => dispatch({ type: "decrement" })}
            className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition text-sm font-medium border border-neutral-700"
          >
            Decrement
          </button>
        </div>

      </div>
    </div>
  );
};

export default ReducerBasic;