import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./output.css";
import Header from "./components/Header";
import HeroSec from "./components/Home/HeroSec";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSec />
    </>
  );
}

export default App;
