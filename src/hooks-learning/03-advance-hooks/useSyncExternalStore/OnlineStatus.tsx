"use client";
import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  return () => {
    window.addEventListener("online", callback);
    window.addEventListener("offline", callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}
function getServerSnapshot() {
  return true;
}
const OnlineStatus = () => {
  const isOnline = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  return (
    <h2>
      {isOnline ? "Online 🟢" : "Offline 🔴"}
    </h2>
  );
};

export default OnlineStatus;
