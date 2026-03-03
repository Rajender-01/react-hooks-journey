"use client"
import { useEffect } from "react";

const CleanUp = () => {
  useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    console.log("cleanup");
    clearInterval(interval);
  };
}, []);
  return (
    <div>CleanUp</div>
  )
}

export default CleanUp;