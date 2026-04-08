"use client";

import { useOptimistic, useState, useTransition } from "react";

type Message = {
  id: number;
  text: string;
  sending?: boolean;
};

const ChatApp = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPending, startTransition] = useTransition();

  const [optimisticMessages, addMessage] = useOptimistic(
    messages,
    (current, newMsg: Message) => [
      ...current,
      { ...newMsg, sending: true },
    ]
  );

  const sendMessage = async () => {
    const msg = {
      id: Date.now(),
      text: "Hello",
    };

    startTransition(() => {
      addMessage(msg);
    });

    try {
      await new Promise((res) => setTimeout(res, 1000));
      setMessages((prev) => [...prev, msg]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-90 h-120 flex flex-col shadow-lg">

        {/* Header */}
        <div className="p-3 border-b border-neutral-800 text-center text-sm font-medium">
          Chat
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-auto p-3 space-y-2">
          {optimisticMessages.map((m) => (
            <div
              key={m.id}
              className="bg-neutral-800 px-3 py-2 rounded-lg text-sm flex justify-between items-center"
            >
              <span>{m.text}</span>
              {m.sending && (
                <span className="text-xs text-neutral-400 ml-2">
                  ⏳
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-neutral-800">
          <button
            onClick={sendMessage}
            disabled={isPending}
            className="w-full px-3 py-2 rounded-lg 
            bg-indigo-600 hover:bg-indigo-500 transition 
            text-sm disabled:opacity-50"
          >
            {isPending ? "Sending..." : "Send Message"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ChatApp;