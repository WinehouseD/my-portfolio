import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#11161f] z-4">
      <div className="max-w-[1080px] mx-auto px-10 flex flex-col justify-center h-full">
        <div className="hero-container">
          <h2
            className="hero glitch layers"
            data-text="Front-End React Developer"
          >
            <span>Front-End React Developer</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
