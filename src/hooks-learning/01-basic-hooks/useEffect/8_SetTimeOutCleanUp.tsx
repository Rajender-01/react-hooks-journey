"use client";
import { useEffect } from "react";

const SetTimeOutCleanUp = (): React.JSX.Element => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("setTimeout run");
    }, 3000);

    return () => {
      clearTimeout(timeout);
      console.log("clearTimeout");
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-gray-900 text-white px-8 py-6 rounded-lg text-center shadow-lg w-80 space-y-4">
        
        <h2 className="text-xl font-semibold text-gray-300">
          setTimeout Cleanup
        </h2>

        <p className="text-green-400 font-medium">
          Check console after 3 seconds
        </p>

      </div>
    </div>
  );
};

export default SetTimeOutCleanUp;