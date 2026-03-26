"use client";

import { useReducer } from "react";

type State = {
  name: string;
  email: string;
};

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const FormReducerIntermediate = () => {
  console.log("re-render");

  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
  });

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-90 space-y-5 shadow-lg">
        <h1 className="text-xl font-semibold tracking-tight text-center">
          useReducer Form
        </h1>

        <input
          placeholder="Enter name..."
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg 
          bg-neutral-950 border border-neutral-800
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          placeholder:text-neutral-500"
        />

        <input
          placeholder="Enter email..."
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg 
          bg-neutral-950 border border-neutral-800
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          placeholder:text-neutral-500"
        />

        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 space-y-1">
          <p className="text-sm text-neutral-400">Preview</p>
          <p className="text-neutral-200 text-sm">Name: {state.name || "-"}</p>
          <p className="text-neutral-200 text-sm">
            Email: {state.email || "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormReducerIntermediate;
