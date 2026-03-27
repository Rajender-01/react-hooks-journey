"use client";
import { useRef } from "react";
import Form, { FormData } from "./Child";

export type FormDataType = {
  submit: () => void;
  reset: () => void;
  getData: () => FormData;
};

const AdvancedImperative = () => {
  const formRef = useRef<FormDataType | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-95 space-y-6 shadow-lg">

        <h1 className="text-xl font-semibold tracking-tight text-center">
          Advanced Imperative Form
        </h1>

        <Form ref={formRef} />

        <div className="grid grid-cols-3 gap-3">
          
          <button
            onClick={() => formRef.current?.submit()}
            className="px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-sm font-medium"
          >
            Submit
          </button>

          <button
            onClick={() => formRef.current?.reset()}
            className="px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition text-sm font-medium"
          >
            Reset
          </button>

          <button
            onClick={() => formRef.current?.getData()}
            className="px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition text-sm font-medium"
          >
            Get Data
          </button>

        </div>

      </div>
    </div>
  );
};

export default AdvancedImperative;