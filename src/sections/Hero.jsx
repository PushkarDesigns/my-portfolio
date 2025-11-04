import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen py-24 relative flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">

      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img src="https://media.istockphoto.com/id/1391423685/video/programmers-hands-and-laptop-keyboard-close-up-working-on-a-project-on-a-laptop.jpg?s=480x480&k=20&c=CzDkEIu9ESQq7-01doRqSvW9xF7E9VnhPhCO_rINeu4=" alt="background" className="w-full h-full object-cover opacity-60"/>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Heading */}
        <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
          Pushkar — <span className="text-green-600">Web Developer</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} viewport={{ once: true }} className="text-gray-300 text-lg md:text-xl mb-8">
          Dedicated BCA student building modern, responsive websites and web apps.
          I focus on clean UI, high performance, and maintainable code.
        </motion.p>

        {/* Buttons */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} viewport={{ once: true }} className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-500 hover:scale-105 transition-all duration-300">
            View Projects
          </a>
          <a href="resume.pdf" download className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300">
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
