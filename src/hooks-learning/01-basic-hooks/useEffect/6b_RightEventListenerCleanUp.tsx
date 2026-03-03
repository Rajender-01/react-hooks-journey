"use client";
import { useEffect } from "react";

const RightEventListenerCleanUp = (): React.JSX.Element => {
  useEffect(() => {
    const handleResize = () => {
      console.log("Resized");
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Resize listener removed");
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-gray-900 text-white px-8 py-6 rounded-lg text-center shadow-lg w-80 space-y-4">
        
        <h2 className="text-xl font-semibold text-gray-300">
          Right EventListener Cleanup
        </h2>

        <p className="text-green-400 font-medium">
          Open console and resize window
        </p>

      </div>
    </div>
  );
};

export default RightEventListenerCleanUp;