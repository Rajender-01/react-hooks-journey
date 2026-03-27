"use client";

import { useRef } from "react";
import Modal from "./Child";

type ModalRef = {
  openModal: () => void;
};

const Parent = () => {
  const modalRef = useRef<ModalRef | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-90 space-y-6 shadow-lg text-center">

        <h1 className="text-xl font-semibold tracking-tight">
          Modal Control (useRef)
        </h1>

        <p className="text-sm text-neutral-400">
          Open modal from parent using useImperativeHandle
        </p>

        <button
          onClick={() => modalRef.current?.openModal()}
          className="w-full px-4 py-2 rounded-lg 
          bg-indigo-600 hover:bg-indigo-500 transition 
          text-sm font-medium"
        >
          Open Modal
        </button>

        <Modal ref={modalRef} />

      </div>
    </div>
  );
};

export default Parent;