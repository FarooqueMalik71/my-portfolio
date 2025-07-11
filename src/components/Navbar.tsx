import React, { useState, useEffect } from 'react'
import { RiMenuSearchLine } from 'react-icons/ri';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-secondary/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Farooque
            </span>
            <span className="text-white">
              .dev
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="gap-8 lg:gap-12 hidden text-lg md:flex">
            <li className="group">
              <a 
                href="#hero" 
                className="text-gray-300 hover:text-accent transition-colors duration-300 relative"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li className="group">
              <a 
                href="#about" 
                className="text-gray-300 hover:text-accent transition-colors duration-300 relative"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li className="group">
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-accent transition-colors duration-300 relative"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li className="group">
              <a 
                href="#skills" 
                className="text-gray-300 hover:text-accent transition-colors duration-300 relative"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li className="group">
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-accent transition-colors duration-300 relative"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-secondary/50 border border-accent/20 text-accent hover:bg-accent/10 transition-all duration-300"
            >
              <RiMenuSearchLine size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="mt-4 bg-secondary/90 backdrop-blur-md rounded-2xl border border-accent/20 p-6 shadow-2xl">
            <div className="flex flex-col space-y-4">
              <a 
                href="#hero" 
                onClick={() => setMenuOpen(false)} 
                className="text-gray-300 hover:text-accent transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-accent/10"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => setMenuOpen(false)} 
                className="text-gray-300 hover:text-accent transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-accent/10"
              >
                About
              </a>
              <a 
                href="#projects" 
                onClick={() => setMenuOpen(false)} 
                className="text-gray-300 hover:text-accent transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-accent/10"
              >
                Projects
              </a>
              <a 
                href="#skills" 
                onClick={() => setMenuOpen(false)} 
                className="text-gray-300 hover:text-accent transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-accent/10"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                onClick={() => setMenuOpen(false)} 
                className="text-gray-300 hover:text-accent transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-accent/10"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar