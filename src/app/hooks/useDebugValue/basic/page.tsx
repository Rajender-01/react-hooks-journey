"use client"
import UseOnlineStatus from "@/src/hooks-learning/03-advance-hooks/useDebugValue/useOnlineStatus"

const page = () => {
  const isOnline = UseOnlineStatus();
  return <h2>Status: {isOnline === null ? "Loading..." : isOnline ? "Online" : "Offline"}</h2>;
}

export default page
