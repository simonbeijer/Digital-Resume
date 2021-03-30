import { useState, useEffect } from "react";

function getWindowScroll() {
  const { scrollY: scroll } = window;
  return {
    scroll,
  };
}

export default function useWindowScroll() {
  const [windowScroll, setWindowScroll] = useState(getWindowScroll());

  useEffect(() => {
    function updatePosition() {
      setWindowScroll(getWindowScroll());
    }

    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return windowScroll;
}
