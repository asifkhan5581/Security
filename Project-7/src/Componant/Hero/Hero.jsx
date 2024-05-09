import React, { useEffect, useState } from "react";
import "./hero.css";

function Hero() {
  const [scrollpage, setscrollpage] = useState(false);
  useEffect(() => {
    function handlescroll() {
      if (window.scrollY > 100) {
        setscrollpage(true);
      } else {
        setscrollpage(false);
      }
    }
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="hero">
        <div className="hero-contant">
          <h3>
            THE MOST SUCCESSFUL <br /> SECURITY AGENCY
          </h3>
          <div className="btn">
            <button type="submit">Learn More about our Services</button>
          </div>
          {scrollpage && (
            <span onClick={scrollTop}>
              <i class="fa-solid fa-arrow-up"></i>
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default Hero;
