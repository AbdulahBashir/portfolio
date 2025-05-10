import React from 'react';
import abdullahImg from '../abdullah.png';


const About = () => {
  return (
    <section className="min-h-screen bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-600 mb-12">
          About <span className="text-yellow-800">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left - Image */}
          <div className="w-64 h-64 rounded-2xl overflow-hidden  border-yellow-400 shadow-2xl hover:scale-105 transition duration-300">
            <img
            src={abdullahImg}
            alt="Abdullah Bashir"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Text */}
          <div className="flex-1 text-gray-200 space-y-5">
            <p className="text-lg leading-relaxed">
              👋 Hi, I'm{' '}
              <span className="font-semibold text-yellow-700 text-xl">
                Abdullah Bashir
              </span>
              , a frontend-focused web developer passionate about clean UI, performance, and user experience.
            </p>

            <p className="text-base text-gray-200">
              💻 I specialize in building responsive websites using React, Tailwind CSS, and JavaScript. My goal is to deliver pixel-perfect designs that feel smooth and work across all devices.
            </p>

            <p className="text-base text-gray-200">
              🚀 Currently, I'm expanding my skills in backend technologies like Node.js and MongoDB to become a full-stack developer.
            </p>

            <p className="text-base text-gray-200">
              🎯 I believe in lifelong learning, creative problem-solving, and delivering impactful solutions with code.
            </p>

            {/* Button */}
            <a
              href="/resume"
              className="inline-block mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full shadow-lg transition duration-300"
            >
              View My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
