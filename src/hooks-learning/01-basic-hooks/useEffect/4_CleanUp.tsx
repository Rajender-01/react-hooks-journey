"use client";
import { useEffect } from "react";

const CleanUp = () => {
  useEffect(() => {
    console.log("uncomment this to check this");
    // const interval = setInterval(() => {
    //   console.log("Running...");
    // }, 1000);

    // return () => {
    //   console.log("cleanup");
    //   clearInterval(interval);
    // };
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-900 text-white px-8 py-6 rounded-lg text-center shadow-lg w-80 space-y-4">
        
        <h2 className="text-xl font-semibold text-gray-300">
          useEffect Cleanup
        </h2>

        <p className="text-green-400 font-medium">
          Check console for effect & cleanup
        </p>

      </div>
    </div>
  );
};

export default CleanUp;