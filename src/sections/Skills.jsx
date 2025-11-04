import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../utils/skillsData";

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
};

const colorMap = {
  orange: "hover:border-orange-400 hover:shadow-orange-400/40",
  blue: "hover:border-blue-400 hover:shadow-blue-400/40",
  yellow: "hover:border-yellow-400 hover:shadow-yellow-400/40",
  cyan: "hover:border-cyan-400 hover:shadow-cyan-400/40",
  red: "hover:border-red-400 hover:shadow-red-400/40",
  teal: "hover:border-teal-400 hover:shadow-teal-400/40",
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 text-center">

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full my-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I use to build modern, scalable, and creative web
            experiences.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div key={index} variants={cardVariants} whileHover={{ scale: 1.07 }} className={`bg-[#1f1f1f] border border-gray-700 ${colorMap[skill.color]} 
              hover:shadow-lg rounded-xl p-8 flex flex-col items-center justify-center text-white transition-all duration-500`}>
              <motion.img src={skill.icon} alt={skill.name} className="w-14 h-14 mb-4" whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 200 }}
              />
              <p className="font-semibold text-lg tracking-wide">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
