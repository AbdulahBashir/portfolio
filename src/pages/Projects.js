import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import factflow1 from "../factflow1.jpg";
import factflow2 from "../factflow2.jpg";
import aura1 from "../aura1.jpeg";
import aura2 from "../aura2.jpeg";
import text1 from "../text1.jpeg";
import text2 from "../text2.jpeg";
import notehive1 from "../notehive.jpg";
import notehive2 from "../notehive2.jpg";

const projects = [
  {
    title: "NoteHive",
    description: "A full-stack notes manager app with secure login and responsive UI using MERN stack.",
    tech: ["React", "Node.js", "MongoDB"],
    images: [notehive1, notehive2],
  },
  {
    title: "TextUtils",
    description: "A collaborative task management tool with real-time updates.",
    tech: ["React", "Tailwind"],
    images: [text1, text2],
  },
  {
    title: "Aura by AZ",
    description: "E-commerce frontend with product filtering and cart functionality.",
    tech: ["React", "Tailwind"],
    images: [aura1, aura2],
  },
  {
    title: "FactFlow",
    description: "A dynamic news website with real-time content updates, responsive layout, and modern UI using React.",
    tech: ["React", "Node.js"],
    images: [factflow1, factflow2],
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  return (
    <section className="bg-black text-gray-400 min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-600 mb-10">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 border border-yellow-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div
                className="relative w-full h-100 overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="flex w-[200%] h-full transition-transform duration-1000 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      hoveredIndex === index ? "50" : "0"
                    }%)`,
                  }}
                >
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Slide ${i}`}
                      onClick={() => setModalImage(img)}
                      className="w-full h-full object-cover cursor-pointer"
                    />
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-600 mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {modalImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
            <div className="relative max-w-3xl w-full">
              <img src={modalImage} alt="Full View" className="w-full rounded-lg" />
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-3 right-3 text-black text-2xl bg-yellow-400 rounded-full px-3 py-1 hover:bg-yellow-500"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
