import React from 'react';
import { Link } from 'react-router-dom';
import abdullahImg from '../abdullah.png';
import TypeWriterName from './TypeWriterName';

const Home = () => {
  return (
    <section className="bg-black text-gray-400 pt-40 pb-36"> {/* Increased top & bottom spacing */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10">

        {/* Left Content */}
        <div className="text-center md:text-left space-y-4 md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi There,<br />
            I'm <TypeWriterName />
          </h1>
          <p className="text-3xl font-medium text-gray-500">
            A <span className="text-yellow-400">Web Developer</span> Building Modern Websites.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-black border border-yellow-400 text-yellow-400 font-extrabold px-6 py-2 rounded-full shadow-md hover:bg-yellow-400 hover:text-black hover:shadow-lg transition"
          >
            Hire Me →
          </Link>
          <Link
            to="/skills"
            className="inline-block mx-3 bg-black border border-yellow-400 text-yellow-400 font-extrabold px-6 py-2 rounded-full shadow-md hover:bg-yellow-400 hover:text-black hover:shadow-lg transition"
          >
            Skills →
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={abdullahImg}
            alt="Abdullah Bashir"
            className="w-80 h-80 object-cover rounded-full border-4 border-yellow-500" // Increased size
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
