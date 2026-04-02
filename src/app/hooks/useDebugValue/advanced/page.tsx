"use client"

import UseFetch from "@/src/hooks-learning/03-advance-hooks/useDebugValue/useFetch"

const page = () => {
  const state = UseFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      advanced : { state.error }
    </div>
  )
}

export default page
