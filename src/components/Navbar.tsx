'use client'
import React, { useState, useEffect } from 'react';
import { RiMenuSearchLine } from 'react-icons/ri';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-secondary/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-[1280px]  mx-auto px-6 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Farooque</span>
            <span className="text-white">.dev</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex px-4 py-2  gap-6 lg:gap-10 text-lg">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, i) => (
              <li key={i} className="group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-200 hover:text-accent transition-all relative"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg bg-secondary/50 border border-accent/20 text-accent hover:bg-accent/10 transition-all duration-300"
            >
              <RiMenuSearchLine size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="mt-4 bg-secondary/90 backdrop-blur-md rounded-2xl border border-accent/20 p-6 shadow-2xl space-y-4">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-300 hover:text-accent py-2 px-4 rounded-lg hover:bg-accent/10 transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
