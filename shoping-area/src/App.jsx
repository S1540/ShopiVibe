import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./output.css";
import Header from "./components/Header";
import HeroSec from "./components/Home/HeroSec";
import ModernLoader from "./components/Home/ModernLoader";
import Categories from "./components/Home/Categories";
import CategoriSubBannerCard from "./components/Home/CategoriSubBannerCard";

import FlashSell from "./components/Home/FlashSell";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader ? (
        <ModernLoader />
      ) : (
        <>
          <Header />
          <div className="bg-gray-200">
            <HeroSec />
            <Categories />
            <CategoriSubBannerCard />
            <FlashSell />
          </div>
        </>
      )}
    </>
  );
}

export default App;
