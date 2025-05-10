// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Skills from './pages/Skills';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
