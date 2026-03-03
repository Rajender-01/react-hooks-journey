"use client";
import { useEffect } from "react";

const WebsocketCleanup = (): React.JSX.Element => {
  useEffect(() => {
    const socket = new WebSocket("wss://echo.websocket.org");

    socket.onopen = () => {
      console.log("connected");
    };

    socket.onmessage = (event) => {
      console.log("Message:", event.data);
    };

    return () => {
      socket.close();
      console.log("Socket disconnected");
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-gray-900 text-white px-8 py-6 rounded-lg text-center shadow-lg w-80 space-y-4">
        
        <h2 className="text-xl font-semibold text-gray-300">
          WebSocket Cleanup
        </h2>

        <p className="text-green-400 font-medium">
          Open console to see connection & disconnection logs
        </p>

      </div>
    </div>
  );
};

export default WebsocketCleanup;