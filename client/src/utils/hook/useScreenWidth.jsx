import { useState, useEffect } from "react";

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const getWindowWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", getWindowWidth);

    return () => {
      window.removeEventListener("resize", getWindowWidth);
    };
  }, []);
  return screenWidth;
}
