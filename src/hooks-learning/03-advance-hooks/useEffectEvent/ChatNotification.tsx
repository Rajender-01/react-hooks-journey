"use client";

import { useEffect, useEffectEvent, useState } from "react";

const ChatNotification = () => {
  const [message, setMessage] = useState("");

  const notify = useEffectEvent(() => {
    console.log("New message:", message);
  });

  useEffect(() => {
    const socket = setInterval(() => {
      notify();
    }, 2000);

    return () => clearInterval(socket);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-90 space-y-5 shadow-lg">

        <h1 className="text-lg font-semibold text-center">
          Chat Notification
        </h1>

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
          className="w-full px-4 py-2 rounded-lg 
          bg-neutral-950 border border-neutral-800
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          placeholder:text-neutral-500"
        />

        <p className="text-xs text-neutral-500 text-center">
          Logs latest message every 2 seconds
        </p>

      </div>
    </div>
  );
};

export default ChatNotification;