"use client"

import { useLayoutEffect, useState } from "react";

const FlickerFix = () => {
  console.log("re-render")
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const w = window.innerWidth;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWidth(w);
  }, []);
  return (
    <div>
      width: {width}
    </div>
  )
}

export default FlickerFix
