import React, { useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo_nav.svg";
import { motion, AnimatePresence } from "framer-motion";
import github from "../assets/github.svg";
import email from "../assets/gmail.svg";
import linkedin from "../assets/linkedin.svg";
import resume from "../assets/resume.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const iconVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  return (
    <div className="fixed w-full h-[4rem] flex justify-between items-center px-4 bg-[rgba(0,0,0,0.1)] text-gray-300 backdrop-blur-md z-10">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "2.3rem", height: "2.3rem", cursor: "pointer" }}
          />
        </Link>
      </div>
      <ul className="hidden md:flex text-lg">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <motion.div
        onClick={handleClick}
        className="md:hidden cursor-pointer text-2xl z-10"
        variants={iconVariants}
        initial="closed"
        animate={nav ? "open" : "closed"}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </motion.div>
      <AnimatePresence>
        {nav && (
          <motion.ul
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-0 left-0 w-full h-screen bg-[#0c1016] flex flex-col justify-center items-center"
          >
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              <motion.li className="py-5 text-4xl cursor-pointer">
                Home
              </motion.li>
            </Link>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              <motion.li className="py-5 text-4xl cursor-pointer">
                About
              </motion.li>
            </Link>
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              <motion.li className="py-5 text-4xl cursor-pointer">
                Skills
              </motion.li>
            </Link>
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={500}
            >
              <motion.li className="py-5 text-4xl cursor-pointer">
                Projects
              </motion.li>
            </Link>
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              <motion.li className="py-5 text-4xl cursor-pointer">
                Contact
              </motion.li>
            </Link>
          </motion.ul>
        )}
      </AnimatePresence>
      <div className="hidden lg:flex fixed flex-col top-[300%] left-0 ">
        <ul>
          <li>
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/diana-k-a6424827b"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <img
                src={linkedin}
                alt="linkedin"
                style={{ width: "1.8rem", height: "1.8rem" }}
              />
            </a>
          </li>
          <li>
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/WinehouseD"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <img
                src={github}
                alt="github"
                style={{
                  width: "1.8rem",
                  height: "1.8rem",
                  marginTop: "1.5rem",
                }}
              />
            </a>
          </li>
          <li>
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:kitdiana6@gmail.com"
              target="_blank"
              rel="noreferrer"
              title="Email"
            >
              <img
                src={email}
                alt="email"
                style={{
                  width: "1.8rem",
                  height: "1.8rem",
                  marginTop: "1.5rem",
                }}
              />
            </a>
          </li>
          <li>
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/drive/u/0/folders/1efGhFrs3UR90fQGOqkoxAaDo0aNXm8la"
              target="_blank"
              rel="noreferrer"
              title="Resume"
            >
              <img
                src={resume}
                alt="resume"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  marginTop: "1.5rem",
                }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
