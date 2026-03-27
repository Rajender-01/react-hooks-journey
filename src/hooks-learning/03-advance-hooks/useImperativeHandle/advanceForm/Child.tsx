"use client";
import { forwardRef, useImperativeHandle, useState } from "react";
import { FormDataType } from "./Parent";

export type FormData = {
  name: string;
  email: string;
};

const Form = forwardRef<FormDataType>((_, ref) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  const handleinput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useImperativeHandle(ref, () => ({
    submit() {
      console.log("Form Submitted:", formData);
    },
    reset() {
      setFormData({ name: "", email: "" });
    },
    getData() {
      console.log("Form Submitted:", formData);
      return formData;
    },
  }));

  return (
    <div className="space-y-4">
      
      <input
        type="text"
        name="name"
        placeholder="Enter name..."
        value={formData.name}
        onChange={handleinput}
        className="w-full px-4 py-2 rounded-lg 
        bg-neutral-950 border border-neutral-800
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        placeholder:text-neutral-500"
      />

      <input
        type="email"
        name="email"
        placeholder="Enter email..."
        value={formData.email}
        onChange={handleinput}
        className="w-full px-4 py-2 rounded-lg 
        bg-neutral-950 border border-neutral-800
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        placeholder:text-neutral-500"
      />

      <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-sm text-neutral-400">
        <p>Name: <span className="text-neutral-200">{formData.name || "-"}</span></p>
        <p>Email: <span className="text-neutral-200">{formData.email || "-"}</span></p>
      </div>

    </div>
  );
});

Form.displayName = "Form";
export default Form;