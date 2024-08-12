import React, { useEffect } from "react";

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
    <div className="w-full bg-transparent fixed top-0 z-50">
      <div className="h-0.5 bg-red-600 w-0" id="myBar"></div>
    </div>
  );
};

export default ProgressBar;
