import React, { useState } from 'react';
import abdullahImg from '../abdullah.png';
import certificateImg from '../certificate.jpg';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('resume');

  return (
    <section className="min-h-screen bg-black text-white px-6 py-6">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10 border-b-2 border-white/20 pb-6">
        {activeTab === 'resume' ? 'My Resume' : 'My Certificate'}
      </h2>

      {/* Tab Buttons */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setActiveTab('resume')}
          className={`px-6 py-2 rounded-full font-semibold border-2 ${
            activeTab === 'resume'
              ? 'bg-yellow-400 text-black border-yellow-400'
              : 'border-white hover:bg-white hover:text-black'
          } transition duration-300`}
        >
          Resume
        </button>
        <button
          onClick={() => setActiveTab('certificate')}
          className={`px-6 py-2 rounded-full font-semibold border-2 ${
            activeTab === 'certificate'
              ? 'bg-yellow-400 text-black border-yellow-400'
              : 'border-white hover:bg-white hover:text-black'
          } transition duration-300`}
        >
          Certificate
        </button>
      </div>

      {/* Resume View */}
      {activeTab === 'resume' && (
        <section className="min-h-screen bg-black text-white px-4 md:px-16 py-10">
          {/* Download Button */}
         

          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
            {/* Sidebar */}
            <aside className="md:w-1/3 bg-white/10 text-white rounded-xl p-6 shadow-lg">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={abdullahImg}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-yellow-400 object-cover"
                />
                <h2 className="text-xl font-bold mt-4">MUHAMMAD ABDULLAH</h2>
                <p className="text-sm text-gray-300">Web Developer</p>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="text-yellow-400 font-semibold">📞 Contact</h3>
                  <p>+923069580053</p>
                  <p>irfanmahi311@gmail.com</p>
                  <p>PhullarWan Depalpur, Okara Pakistan</p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-semibold">🎓 Education</h3>
                  <p><strong>Matric</strong> - Illama Iqbal High School Khair Pur (2017-2019)</p>
                  <p><strong>Intermediate</strong> - Post Graduate College Depalpur (2019-2021)</p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-semibold">📜 Certifications</h3>
                  <ul className="list-disc list-inside">
                    <li>Certified Full Stack Web Developer</li>
                    <li>Certified by PNY Software Technology</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-semibold">💡 Skills</h3>
                  <p>HTML, CSS, Tailwind CSS, Bootstrap</p>
                  <p>React JS, Node.js, MongoDB</p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-semibold">🌐 Language</h3>
                  <p>English, Urdu</p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="md:w-2/3 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-yellow-700 mb-3">About Me</h2>
                <p className="text-white leading-relaxed">
                  Hi, I’m Muhammad Abdullah — a passionate React developer with a knack for crafting modern, responsive, and performance-driven web applications.

                  I specialize in full-stack development using React.js, Node.js, and MongoDB. What drives me is the thrill of turning ideas into interactive, real-world solutions — from clean code to seamless user experience.

                  I love exploring new tech, solving real-world problems, and building tools that actually help people. Whether it's a fun side project, a challenging app, or a team collaboration — I’m always ready to learn and grow.

                  Let’s build something awesome together!
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-700 mb-3">Projects</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white">TextUtils – A React-based text analyzer</h3>
                    <p>Features: Word/Character count, Uppercase/Lowercase conversion, Remove spaces, Email extractor</p>
                    <p className="text-sm text-gray-500">Tools: React, Bootstrap, JavaScript</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">NoteHive – Full-stack notes manager</h3>
                    <p>Features: User authentication, Create/Update/Delete notes, MongoDB integration</p>
                    <p className="text-sm text-gray-500">Stack: React, Node.js, MongoDB</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">FactFlow – News web app</h3>
                    <p>Features: Live news feed by category using external API</p>
                    <p className="text-sm text-gray-500">Tools: React, NewsAPI</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-700 mb-3">Tools & Others</h2>
                <p>Git, GitHub, VS Code, ThunderClient</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-700 mb-3">Reference</h2>
                <p>References available upon request.</p>
              </section>
            </main>
          </div>
           <div className="flex justify-center mt-10">
            <a
              href="/resume.pdf"
              download
              className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full shadow hover:bg-yellow-500 transition"
            >
              Download Resume
            </a>
          </div>
        </section>
      )}

      {/* Certificate View */}
      {activeTab === 'certificate' && (
        <div className="flex justify-center">
          <div className="border border-yellow-400 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 max-w-4xl w-full">
            <img
              src={certificateImg}
              alt="Certificate"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;