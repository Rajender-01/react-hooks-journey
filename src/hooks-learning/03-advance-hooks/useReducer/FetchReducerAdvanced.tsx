"use client";

import { useEffect, useReducer } from "react";

type State = {
  loading: boolean;
  data: string[];
  error: string | null;
};

type Action =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: string[] }
  | { type: "FETCH_ERROR"; payload: string };

const FetchReducerAdvanced = (): React.JSX.Element => {
  console.log("re-render - 3 times");

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "FETCH_START":
        return { ...state, loading: true };

      case "FETCH_SUCCESS":
        return { loading: false, data: action.payload, error: null };

      case "FETCH_ERROR":
        return { loading: false, data: [], error: action.payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    dispatch({ type: "FETCH_START" });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "FETCH_SUCCESS",
          payload: data.map((item: { title: string }) => item.title),
        }),
      )
      .catch(() =>
        dispatch({
          type: "FETCH_ERROR",
          payload: "Something went wrong",
        }),
      );
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-125 space-y-5 shadow-lg">

        <h1 className="text-xl font-semibold tracking-tight text-center">
          useReducer Data Fetch
        </h1>

        {state.loading && (
          <p className="text-indigo-400 animate-pulse text-center">
            Loading posts...
          </p>
        )}

        {state.error && (
          <p className="text-red-400 text-center">
            {state.error}
          </p>
        )}

        <div className="h-87.5 overflow-auto rounded-lg border border-neutral-800 bg-neutral-950 p-4 space-y-2">
          {state.data.slice(0, 10).map((item) => (
            <p
              key={item}
              className="text-sm text-neutral-300 border-b border-neutral-800 pb-1"
            >
              {item}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FetchReducerAdvanced;