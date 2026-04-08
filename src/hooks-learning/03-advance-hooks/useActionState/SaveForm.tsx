"use client";

import { useActionState } from "react";

const saveData = async (
  prevState: { status: string },
  formData: FormData
) => {
  const name = formData.get("name");

  try {
    await new Promise((res) => setTimeout(res, 1000));
    return { status: `Saved: ${name} ✅` };
  } catch {
    return { status: "Error saving ❌" };
  }
};

const SaveForm = () => {
  const [state, action, isPending] = useActionState(
    saveData,
    { status: "" }
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-90 space-y-6 shadow-lg">

        <h1 className="text-xl font-semibold text-center">
          Save Data
        </h1>

        <form action={action} className="space-y-4">

          <input
            name="name"
            placeholder="Enter name..."
            className="w-full px-4 py-2 rounded-lg 
            bg-neutral-950 border border-neutral-800
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            placeholder:text-neutral-500"
          />

          <button
            type="submit"
            disabled={isPending}
            className="w-full px-4 py-2 rounded-lg 
            bg-indigo-600 hover:bg-indigo-500 transition 
            text-sm font-medium disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Save"}
          </button>

        </form>

        <div className="text-center text-sm min-h-5">
          <span
            className={`${
              state.status.includes("❌")
                ? "text-red-400"
                : "text-green-400"
            }`}
          >
            {state.status}
          </span>
        </div>

      </div>
    </div>
  );
};

export default SaveForm;