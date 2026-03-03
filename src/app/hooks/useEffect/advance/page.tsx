"use client";
import CleanUp from "@/src/hooks-learning/01-basic-hooks/useEffect/4_CleanUp";
import ApiCleanUp from "@/src/hooks-learning/01-basic-hooks/useEffect/5_ApiCleanUp";
import WrongEventListenerCleanUp from "@/src/hooks-learning/01-basic-hooks/useEffect/6a_WrongEventListenerCleanUp";
import RightEventListenerCleanUp from "@/src/hooks-learning/01-basic-hooks/useEffect/6b_RightEventListenerCleanUp";
import WebsocketCleanup from "@/src/hooks-learning/01-basic-hooks/useEffect/7_WebsocketCleanup";
import SetTimeOutCleanUp from "@/src/hooks-learning/01-basic-hooks/useEffect/8_SetTimeOutCleanUp";
import ObserverCleanUp from "@/src/hooks-learning/01-basic-hooks/useEffect/9_ObserverCleanUp";
import { useState } from "react";

const Page = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8 px-4">
      
      <button
        onClick={() => setShow(!show)}
        className="bg-indigo-500 hover:bg-indigo-600 transition px-6 py-2 rounded-md font-medium text-black"
      >
        Toggle Component
      </button>

      <div className="w-full flex flex-col items-center gap-6">
        {show && <CleanUp />}
        {show && <ApiCleanUp />}
        {show && <WrongEventListenerCleanUp />}
        {show && <RightEventListenerCleanUp />}
        {show && <WebsocketCleanup />}
        {show && <SetTimeOutCleanUp />}
        {show && <ObserverCleanUp />}
      </div>

    </div>
  );
};

export default Page;