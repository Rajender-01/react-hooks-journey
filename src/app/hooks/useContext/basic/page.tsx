"use client"
import { ThemeContext } from "@/src/hooks-learning/01-basic-hooks/useContext/ThemeContext"
import { useContext } from "react"

const Page = () => {
  const context = useContext(ThemeContext);
  console.log(context)
  if ( !context) return <div>No Provider Found</div>;

  const { theme, toggleTheme} = context;
  return (
    <div
     style={{
        background: theme === "Dark" ? "#111" : "#fff",
        color: theme === "Dark" ? "#fff" : "#000",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h1>Current theme : {theme}</h1>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

export default Page