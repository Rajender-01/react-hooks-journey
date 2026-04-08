"use client";
import { useActionState } from "react";

type State = {
  message: string;
};

async function loginAction(prevState: State, formData: FormData): Promise<State> {
  const email = formData.get("email");

  await new Promise((res) => setTimeout(res, 1000));

  if (!email) {
    return { message: "Email required ❌" };
  }

  return { message: "Login successful ✅" };
}

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    { message: "" }
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-90 space-y-6 shadow-lg">

        <h1 className="text-xl font-semibold text-center">
          Login
        </h1>

        <form action={formAction} className="space-y-4">

          <input
            name="email"
            placeholder="Enter email..."
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
            {isPending ? "Logging in..." : "Login"}
          </button>

        </form>

        <div className="text-center text-sm min-h-5">
          <span
            className={`${
              state.message.includes("❌")
                ? "text-red-400"
                : "text-green-400"
            }`}
          >
            {state.message}
          </span>
        </div>

      </div>
    </div>
  );
}