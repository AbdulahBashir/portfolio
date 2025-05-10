import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-yellow-400 shadow-md border-b border-yellow-400">
      <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left - Logo */}
        <div className="text-3xl font-bold tracking-wide">Abdullah Bashir</div>

        {/* Center - Desktop Navigation */}
        <ul className="hidden md:flex space-x-2">
          {["/", "/about", "/resume", "/projects"].map((path, index) => {
            const labels = ["Home", "About", "Resume", "Projects"];
            return (
              <li key={path}>
                <Link
                  to={path}
                  className="cursor-pointer text-black font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-300 bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] active:bg-[#a11f01] focus:ring-[#b82601] hover:brightness-40 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] flex items-center justify-center"
                >
                  {labels[index]}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right - Desktop Contact Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button
              type="button"
              className="flex text-black  justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-yellow-400 hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            > 
              Contact
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-300 text-gray-50 ease-linear duration-300 rounded-full border border-gray-900 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-yellow-400 focus:outline-none text-3xl"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation - Toggleable */}
      {isOpen && (
        <div className="md:hidden px-6 py-3 text-center flex flex-col items-center gap-3">
          {["/", "/about", "/resume", "/projects", "/contact"].map((path, index) => {
            const labels = ["Home", "About", "Resume", "Projects", "Contact"];
            return (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)} // Close menu after click
                className="cursor-pointer text-black font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-300 bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] active:bg-[#a11f01] focus:ring-[#b82601] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] flex items-center justify-center"
              >
                {labels[index]}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
