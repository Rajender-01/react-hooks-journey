"use client";
import { useDebugValue, useEffect, useState } from "react";

const UseOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);
  useEffect(() => {
    const updateStatus = () => setIsOnline(navigator.onLine);
    updateStatus();
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);
  // basic usecase - run without open devtool
  // useDebugValue(isOnline ? "Online 🟢" : "Offline 🔴");

  // Intermediate usecase - run only after the devtool open
  useDebugValue(isOnline, (status) => (status ? "Online 🟢" : "Offline 🔴"));
  return isOnline;
};

export default UseOnlineStatus;
