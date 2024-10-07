import React from "react";
import JavaScript from "../assets/js.svg";
import ReactIcon from "../assets/react.svg";
import Redux from "../assets/redux.svg";
import ReactNative from "../assets/react-native.svg";
import Tailwind from "../assets/tailwind.svg";
import AWS from '../assets/aws.svg'
import MUI from "../assets/mui.svg";
import TypeScript from "../assets/ts.svg";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#11161f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="sm:text-right pb-8 pl-4 bg-[#11161f] flex justify-center">
          <p className="text-2xl font-bold inline border-b-2 border-[#f00]">
            TOOLS AND TECHNOLOGIES
          </p>
        </div>
        <div className="bg-[#11161f] w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 sm:px-14">
          <div className="shadow-lg shadow-[#040c16] hover:shadow-[#f00] duration-500">
            <img
              className="w-20 h-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-2 text-sm">JAVASCRIPT</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:shadow-[#f00] duration-500">
            <img
              className="w-20 h-20 mx-auto"
              src={TypeScript}
              alt="TypeScript icon"
            />
            <p className="my-2 text-sm">TYPESCRIPT</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:shadow-[#f00] duration-500">
            <img className="w-20 h-20 mx-auto" src={ReactIcon} alt="React icon" />
            <p className="my-2 text-sm">REACT</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:shadow-[#f00] duration-500">
            <img className="w-20 h-20 mx-auto" src={ReactNative} alt="React Native icon" />
            <p className="my-2 text-sm">REACT NATIVE</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:shadow-[#f00] duration-500">
            <img className="w-20 h-20 mx-auto" src={Redux} alt="Redux icon" />
            <p className="my-2 text-sm">REDUX</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:shadow-[#f00] duration-500">
            <img className="w-20 h-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-2 text-sm">TAILWIND</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:shadow-[#f00] duration-500">
            <img className="w-20 h-20 mx-auto" src={MUI} alt="MUI icon" />
            <p className="my-2 text-sm">MATERIAL UI</p>
          </div>
         
          <div className="shadow-lg shadow-[#040c16] hover:shadow-[#f00] duration-500">
            <img className="w-20 h-20 mx-auto" src={AWS} alt="AWS icon" />
            <p className="my-4">AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
