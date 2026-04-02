import { useId } from "react";

const FormExample = () => {
  const nameId = useId();
  const emailId = useId();

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-90 space-y-5 shadow-lg">

        <h1 className="text-xl font-semibold tracking-tight text-center">
          useId Form
        </h1>

        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor={nameId} className="text-sm text-neutral-400">
            Name
          </label>
          <input
            id={nameId}
            type="text"
            placeholder="Enter name..."
            className="w-full px-4 py-2 rounded-lg 
            bg-neutral-950 border border-neutral-800
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            placeholder:text-neutral-500"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor={emailId} className="text-sm text-neutral-400">
            Email
          </label>
          <input
            id={emailId}
            type="email"
            placeholder="Enter email..."
            className="w-full px-4 py-2 rounded-lg 
            bg-neutral-950 border border-neutral-800
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            placeholder:text-neutral-500"
          />
        </div>

      </div>
    </div>
  );
};

export default FormExample;