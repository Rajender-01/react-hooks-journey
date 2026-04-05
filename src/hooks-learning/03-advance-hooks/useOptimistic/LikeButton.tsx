"use client";
import { useOptimistic, useState, useTransition } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isPending, startTransition] = useTransition();

  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (current, value: number) => current + value,
  );

  const handleClick = () => {
    startTransition(async () => {
      addOptimisticLike(1);
      await new Promise((res) => setTimeout(res, 1000));
      setLikes((prev) => prev + 1);
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-75 text-center space-y-6 shadow-lg">

        <h1 className="text-lg font-semibold">
          Optimistic Like
        </h1>

        <div className="text-4xl font-bold text-indigo-500">
          ❤️ {optimisticLikes}
        </div>

        <button
          onClick={handleClick}
          disabled={isPending}
          className="w-full px-4 py-2 rounded-lg 
          bg-indigo-600 hover:bg-indigo-500 transition 
          text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Updating..." : "Like"}
        </button>

        <p className="text-xs text-neutral-500">
          Instant UI update (optimistic)
        </p>

      </div>
    </div>
  );
};

export default LikeButton;