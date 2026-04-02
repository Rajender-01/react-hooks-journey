import { useId } from "react";

function InputField({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) {
  const id = useId();

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="text-sm text-neutral-400"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={`Enter ${label.toLowerCase()}...`}
        className="w-full px-4 py-2 rounded-lg 
        bg-neutral-950 border border-neutral-800
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        placeholder:text-neutral-500"
      />
    </div>
  );
}

const AdvancedForm = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-95 space-y-6 shadow-lg">

        <h1 className="text-xl font-semibold tracking-tight text-center">
          Advanced Form (useId)
        </h1>

        <InputField label="Name" type="text" />
        <InputField label="Email" type="email" />
        <InputField label="Password" type="password" />

        <button
          className="w-full px-4 py-2 rounded-lg 
          bg-indigo-600 hover:bg-indigo-500 transition 
          text-sm font-medium"
        >
          Submit
        </button>

      </div>
    </div>
  );
};

export default AdvancedForm;