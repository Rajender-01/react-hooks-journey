"use client";

import { useDebugValue, useEffect, useState } from "react";

const UseFetch = (url: string) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null as string | null,
  });

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setState({ loading: false, data, error: null }))
      .catch(() => setState({ loading: false, data: null, error: "Error" }));
  }, [url]);

   useDebugValue(state, (s) => {
    if (s.loading) return "Loading...";
    if (s.error) return "Error ❌";
    return "Data Loaded ✅";
  });
  return state;
};

export default UseFetch;
