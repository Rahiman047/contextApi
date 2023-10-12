import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useGlobalContext } from "./Context";

function App() {
  const { name } = useGlobalContext();
  console.log(name);
  return <></>;
}

export default App;
