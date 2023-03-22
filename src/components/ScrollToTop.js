import React from "react";
import scrollup from "../assets/icons/scroll-up.png";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (
      window.pageYOffset > 100 &&
      window.pageYOffset <=
        document.documentElement.scrollHeight - window.innerHeight - 70
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <div id="scrollToTop" arialabel="Remonter en haut de page" tabIndex="0" onClick={scrollToTop} className={isVisible ? "show" : ""}>
          <img
            src={scrollup}
            alt="Remonter en haut de la page"
            className="scrollToTop__icon"
          ></img>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
