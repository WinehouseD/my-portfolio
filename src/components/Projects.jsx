import React from "react";
import BoseImage from "../assets/Bose.png";
import WeatherImage from "../assets/WeatherTrack.png";
import PortfolioImage from "../assets/Portfolio.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full sm:h-screen bg-[#11161f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="sm:text-center pb-8 pl-4 bg-[#11161f] flex justify-center">
          <p className="text-2xl font-bold inline border-b-2 border-[#f00]">
            SOME THINGS I'VE BUILT
          </p>
        </div>
        <div className="bg-[#11161f] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center py-8 sm:px-14">
          <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#700000] mx-auto max-w-xs sm:max-w-md lg:max-w-full">
            <img
              className="w-full object-contain"
              src={WeatherImage}
              alt="Weather"
            />
            <div className="relative p-4">
              <h1 className="text-2xl font-semibold text-white">
                WeatherTrack
              </h1>
              <p className="mt-2 text-gray-300">
                Weather website that enables users to pull weather data from
                their location or any city by gathering real-time data via an
                API.
              </p>
              <p className="font-semibold pt-2 tracking-widest">
                // React, JS, SCSS, API
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#700000] mx-auto max-w-xs sm:max-w-md lg:max-w-full">
            <img className="w-full object-contain" src={BoseImage} alt="Bose" />
            <div className="relative p-4">
              <h1 className="text-2xl font-semibold text-white">Bose</h1>
              <p className="mt-2 text-gray-300">
                Professional and visually appealing landing-page website for an
                American manufacturing company.
              </p>
              <p className="font-semibold pt-2 tracking-widest">
                // JS, Bootstrap, API
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#700000] mx-auto max-w-xs sm:max-w-md lg:max-w-full">
            <img
              className="w-full object-contain"
              src={PortfolioImage}
              alt="Portfolio"
            />
            <div className="relative p-4">
              <h1 className="text-2xl font-semibold text-white">Portfolio</h1>
              <p className="mt-2 text-gray-300">
                Crafted a sleek and responsive portfolio website to showcase my
                skills, achievements, and projects.
              </p>
              <p className="font-semibold pt-2 tracking-widest">
                // JS, Tailwind CSS, Formik
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
