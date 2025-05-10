import React from 'react';
import gitImg from '../git.png';
import gitHubImg from '../github.jpeg';
import htmlImg from '../html.png';
import nodeImg from '../node.png';
import reactImg from '../react.png';
import cssImg from '../css.png';
import javascriptImg from '../javascript.png';
import expressImg from '../express.js.png';
import mongodbImg from '../mongodb.png';



const Skills = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-yellow-400 animate-pulse">
          Skills & Expertise
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mb-8">
          As a full-stack developer, I am well-versed in both frontend and backend technologies. I enjoy crafting interactive and user-friendly applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src={reactImg} alt="React" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">React.js</h3>
            <p className="text-slate-300">Advanced</p>
          </div>

          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src={javascriptImg} alt="JavaScript" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">JavaScript</h3>
            <p className="text-slate-300">Intermediate</p>
          </div>

          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src={cssImg} alt="CSS" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">CSS3</h3>
            <p className="text-slate-300">Intermediate</p>
          </div>

          {/* Backend Skills */}
          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src={nodeImg} alt="Node.js" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">Node.js</h3>
            <p className="text-slate-300">Advanced</p>
          </div>

          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src={mongodbImg} alt="MongoDB" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">MongoDB</h3>
            <p className="text-slate-300">Intermediate</p>
          </div>

          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src={expressImg} alt="Express.js" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">Express.js</h3>
            <p className="text-slate-300">Advanced</p>
          </div>

          {/* Tools */}
          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src={gitImg} alt="Git" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">Git</h3>
            <p className="text-slate-300">Advanced</p>
            
          </div>

          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src={gitHubImg} alt="Docker" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">GitHub</h3>
            <p className="text-slate-300">Intermediate</p>
          </div>

          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src={htmlImg} alt="Firebase" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">Html</h3>
            <p className="text-slate-300">Advanced</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;