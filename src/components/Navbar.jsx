import React, { useState } from "react";
import logo from "../assets/a.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#0e1117] text-white py-4 md:py-6 lg:py-8 px-6 md:px-16 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
       
      <img src={logo} alt="Logo" style={{ width: "100px", borderRadius: "10px" }} />


        
        <ul className="hidden md:flex space-x-6 lg:space-x-10 text-base md:text-lg lg:text-xl font-medium">
          <li>
            <a href="#home" className="hover:text-blue-400 transition duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition duration-200">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition duration-200">
              Projects
            </a>
          </li>
          <li>
            <a href="#certificates" className="hover:text-blue-400 transition duration-200">
              Certificates
            </a>
          </li>
        </ul>

        
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={handleToggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center text-base font-medium">
          <li>
            <a href="#home" onClick={handleToggle} className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleToggle} className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleToggle} className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#certificates" onClick={handleToggle} className="hover:text-blue-400 transition">
              Certificates
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
