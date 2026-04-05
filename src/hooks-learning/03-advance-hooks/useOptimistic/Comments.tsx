"use client";

import { useOptimistic, useState, useTransition } from "react";

const Comments = (): React.JSX.Element => {
  const [comments, setComments] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const [optimisticComments, addComment] = useOptimistic(
    comments,
    (current, newComments: string) => [
      ...current,
      newComments + " (sending...)",
    ],
  );

  const handleAdd = () => {
    startTransition(async () => {
      const newComments = "New Comment";
      addComment(newComments);
      await new Promise((res) => setTimeout(res, 1000));
      setComments((prev) => [...prev, newComments]);
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-105 space-y-6 shadow-lg">

        <h1 className="text-xl font-semibold text-center">
          Optimistic Comments
        </h1>

        <button
          disabled={isPending}
          onClick={handleAdd}
          className="w-full px-4 py-2 rounded-lg 
          bg-indigo-600 hover:bg-indigo-500 transition 
          text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Sending..." : "Add Comment"}
        </button>

        <div className="max-h-75 overflow-auto space-y-2 border border-neutral-800 rounded-lg p-3 bg-neutral-950">
          {optimisticComments.length === 0 && (
            <p className="text-sm text-neutral-500 text-center">
              No comments yet
            </p>
          )}

          {optimisticComments.map((c, i) => (
            <div
              key={i}
              className="text-sm text-neutral-300 border-b border-neutral-800 pb-1"
            >
              {c}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Comments;