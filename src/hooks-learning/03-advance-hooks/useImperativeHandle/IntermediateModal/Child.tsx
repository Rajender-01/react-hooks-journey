"use client";
import { forwardRef, useImperativeHandle, useState } from "react";

const Modal = forwardRef((_, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal() {
      setOpen(true);
    },
  }));

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      
      <div className="bg-neutral-900 text-neutral-100 rounded-2xl p-6 w-[320px] border border-neutral-800 shadow-xl space-y-4">
        
        <h2 className="text-lg font-semibold">
          Modal
        </h2>

        <p className="text-sm text-neutral-400">
          This is modal content controlled from parent.
        </p>

        <button
          onClick={() => setOpen(false)}
          className="w-full px-4 py-2 rounded-lg 
          bg-indigo-600 hover:bg-indigo-500 transition 
          text-sm font-medium"
        >
          Close
        </button>

      </div>
    </div>
  );
});

Modal.displayName = "Modal";
export default Modal;