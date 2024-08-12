import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#11161f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-3xl font-bold inline border-b-2 border-[#f00] ">
              ABOUT
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-5xl font-bold text-gray-100">
            <p>
              Hey, I'm Diana Kit, nice to meet you! Please take a look around.
            </p>
          </div>
          <div>
            <p className="pb-2 sm:text-lg">
              I'm a dedicated Front-End React Developer based in Lviv, Ukraine.
              My professional objective is to secure a position within a
              innovative company, enabling me to contribute substantively to its
              success by delivering tangible business value. Simultaneously, I
              am driven to further enhance my skills and expertise in software
              development.
            </p>
            <p className="pb-2">
              My passion lies in meticulously crafting pixel-perfect,
              cutting-edge interfaces that seamlessly integrate beautiful design
              with intuitively implemented User Experience (UX). This commitment
              underscores my dedication to staying at the forefront of industry
              trends and delivering innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
