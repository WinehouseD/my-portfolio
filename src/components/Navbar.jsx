import React, { useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo_nav.png";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="fixed w-full h-[5rem] flex justify-between items-center px-4 bg-[rgba(12, 16, 22, 0.8)] text-gray-300">
      <div className="z-50">
        {" "}
        <img src={logo} alt="logo" style={{ width: "3.1rem" }} />
      </div>

      {/* pc version */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <motion.div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer text-2xl"
        variants={iconVariants}
        initial="closed"
        animate={nav ? "open" : "closed"}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </motion.div>

      {/* mobile version */}
      <AnimatePresence>
        {nav && (
          <motion.ul
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-0 left-0 w-full h-screen bg-[#0c1016] flex flex-col justify-center items-center"
          >
            <motion.li className="py-5 text-4xl cursor-pointer">Home</motion.li>
            <motion.li className="py-5 text-4xl cursor-pointer">
              About
            </motion.li>
            <motion.li className="py-5 text-4xl cursor-pointer">
              Projects
            </motion.li>
            <motion.li className="py-5 text-4xl cursor-pointer">
              Contact
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
