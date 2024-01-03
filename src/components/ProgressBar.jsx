import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import "./progressBar.css";

const ProgressBar = () => {
  useEffect(() => {
    const scrollFunction = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    };

    window.onscroll = scrollFunction;

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar" id="myBar"></div>
    </div>
  );
};

export default ProgressBar;
