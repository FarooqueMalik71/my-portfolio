import React, { useState } from 'react'

import { RiMenuSearchLine } from 'react-icons/ri';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container px-6 pt-8">
      <div className="flex justify-between items-center">
        <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-transparent bg-clip-text">My
          <span className="text-xl font-medium text-violet-600 dark:text-violet-400" >
            -Portfolio
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="gap-10 lg:gap-16 hidden text-lg md:flex">
          <li className="menuLink">
            <a href="#hero">Home</a>
          </li>
          <li className="menuLink">
            <a href="#about">About</a>
          </li>
          <li className="menuLink">
            <a href="#projects">Projects</a>
          </li>
          <li className="menuLink">
            <a href="#skills">Skills</a>
          </li>
          <li className="menuLink">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <RiMenuSearchLine
          className="md:hidden cursor-pointer"
          size={30}
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border border-violet-500 absolute top-16 right-4 dark:bg-gray-800 p-4 shadow-lg rounded-lg flex flex-col items-start space-y-4 md:hidden z-50">
          <a href="#hero" onClick={() => setMenuOpen(false)} className="menuLink">
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="menuLink">
            About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="menuLink">
            Projects
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="menuLink">
            Skills
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="menuLink">
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar