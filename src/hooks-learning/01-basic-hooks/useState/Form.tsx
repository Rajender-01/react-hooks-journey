"use client";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
};

const Form = (): React.JSX.Element => {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  console.log(formData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name as keyof FormData]: value }));
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4">
      <form className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl space-y-6">
        
        <h2 className="text-2xl font-bold text-white text-center">
          User Form
        </h2>

        <div className="space-y-2">
          <label htmlFor="name" className="text-gray-400 text-sm">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            id="name"
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-gray-400 text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />
        </div>
        <p>NAME: {formData.name}</p>
        <p>EMAIL: {formData.email}</p>
      </form>
    </div>
  );
};

export default Form;