import React from "react";
import github from "../assets/github.svg";
import email from "../assets/gmail.svg";
import linkedin from "../assets/linkedin.svg";
import resume from "../assets/resume.svg";

function Footer() {
  return (
    <div className="bg-[#11161f] p-4 text-center text-gray-300">
      <ul className="flex justify-center space-x-4 pb-3 mt-1 lg:hidden">
        <li>
          <a
            className="flex items-center"
            href="https://www.linkedin.com/in/diana-k-a6424827b"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <img src={linkedin} alt="linkedin" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center"
            href="https://github.com/WinehouseD"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <img src={github} alt="github" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center"
            href="mailto:kitdiana6@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="Email"
          >
            <img src={email} alt="email" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center"
            href="https://drive.google.com/drive/u/0/folders/1efGhFrs3UR90fQGOqkoxAaDo0aNXm8la"
            target="_blank"
            rel="noreferrer"
            title="Resume"
          >
            <img src={resume} alt="resume" className="w-6 h-6" />
          </a>
        </li>
      </ul>
      <div className="mt-4 text-sm text-gray-300 tracking-widest">
        Designed & Built by Diana Kit
      </div>
    </div>
  );
}

export default Footer;
