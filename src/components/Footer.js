import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-[#C5C6C7] py-14 border-t border-yellow-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-lg font-semibold text-yellow-400">© 2025 Abdullah</h2>
          <p className="text-sm mt-1 text-slate-100">Crafted with ❤️ using React & Tailwind</p>
        </div>

        

        <div className="flex gap-5">
          <Link to="https://github.com/AbdulahBashir" target="_blank" className="hover:text-slate-400 transition">
            <Github />
          </Link>
          <Link to="https://www.linkedin.com/in/abdullah-bashir-36750a365?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFFU9NiIASOyHPX2BZe1MTA%3D%3D" target="_blank" className="hover:text-blue-700 transition">
            <Linkedin />
          </Link>
          <Link to="mailto:muhammadabdullahbashir83@gmail.com" className="hover:text-pink-400 transition">
            <Mail />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
