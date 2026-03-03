"use client";
import { useEffect, useRef } from "react";

const ObserverCleanUp = (): React.JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("Visible");
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      console.log("Observer disconnected");
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-gray-900 text-white px-8 py-6 rounded-lg text-center shadow-lg w-96 space-y-4">
        
        <h2 className="text-xl font-semibold text-gray-300">
          Intersection Observer Cleanup
        </h2>

        <div
          ref={ref}
          className="bg-gray-800 px-4 py-6 rounded text-green-400 font-medium cursor-pointer"
        >
          ObserverCleanUp - Scroll to me
        </div>

        <p className="text-gray-400 text-sm">
          Scroll the page to trigger observer and check console
        </p>

      </div>
    </div>
  );
};

export default ObserverCleanUp;