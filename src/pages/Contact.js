import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Mail, MessageSquareText, User } from 'lucide-react';

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9sf4s8h',
      'template_1pde1sd',
      form.current,
      'JpHUZKFdOF3XtYpVX'
    ).then(
      (result) => {
        form.current.reset();
      },
      (error) => {
      }
    );
  };

  return (
    <section className="bg-black min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-yellow-400">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Get in Touch</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-white mb-1">
              Name
            </label>
            <div className="relative">
              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder="Your name"
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
              />
              <User className="absolute top-2.5 left-3 text-gray-500" size={20} />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <div className="relative">
              <input
                id="user_email"
                name="user_email"
                type="email"
                placeholder="Your email"
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
              />
              <Mail className="absolute top-2.5 left-3 text-gray-500" size={20} />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message..."
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
              ></textarea>
              <MessageSquareText className="absolute top-2.5 left-3 text-gray-500" size={20} />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
