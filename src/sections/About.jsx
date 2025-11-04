import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="container max-w-[1100px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About Me
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true }} className="text-gray-400 text-lg max-w-2xl mx-auto">
            A passionate Web Developer crafting modern, responsive, and user-friendly web solutions.
          </motion.p>
        </div>

        {/* Flex Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">

          {/* Profile Image */}
          <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative group flex-shrink-0">
            <img src="https://plus.unsplash.com/premium_photo-1673734625879-2dd5410bc3e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0" alt="Profile" className="w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-105 hover:shadow-3xl"/>
          </motion.div>

          {/* Text Content */}
          <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              I'm <span className="text-green-600">Pushkar</span>
            </h3>

            <p className="text-gray-300 text-md md:text-lg leading-relaxed mb-6">
              Hi! I’m <span className="text-green-600 font-medium">Pushkar</span>, a BCA student and aspiring
              full-stack developer. I specialize in creating clean, functional, and visually appealing
              web experiences. My focus is on delivering projects that balance creativity with performance.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-400 text-sm md:text-md">
              <p>Birthday: <span className="text-white font-medium">01.07.1990</span></p>
              <p>Age: <span className="text-white font-medium">28</span></p>
              <p>City: <span className="text-white font-medium">Chandigarh, India</span></p>
              <p>Interests: <span className="text-white font-medium">Cricket</span></p>
              <p>Study: <span className="text-white font-medium">Rayat Bahra University</span></p>
              <p>Degree: <span className="text-white font-medium">BCA</span></p>
              <p>Mail: <span className="text-white font-medium">pushkar@gmail.com</span></p>
              <p>Phone: <span className="text-white font-medium">+91 6280xxxxxx</span></p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/resume.pdf" download className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:bg-green-500 hover:scale-105 transition-all duration-300">
                Download CV
              </a>
              <a href="#contact" className="border border-green-500 text-green-500 px-6 py-2 rounded-lg font-medium hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
