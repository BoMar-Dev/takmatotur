import { useState, useEffect } from "react";

const Scroll = (initialFade = false) => {
  const [isFaded, setIsFaded] = useState(initialFade);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll >= 1) {
        setIsFaded(true);
      } else {
        setIsFaded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isFaded;
};

export default Scroll;
