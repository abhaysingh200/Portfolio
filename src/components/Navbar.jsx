import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#0e1117] text-white py-4 px-6 md:px-16 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-blue-400">Abhay Singh</h1>
        <ul className="flex space-x-4 md:space-x-8 text-sm md:text-base">
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
