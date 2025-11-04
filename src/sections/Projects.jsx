import React, { useState } from "react";
import { projectData } from "../utils/projectsData";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all" ? projectData : projectData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="min-h-screen py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Heading */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          {/* <p className="text-green-400 font-extrabold text-lg mb-4">Projects</p> */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Student <span className="text-green-400 font-extrabold mb-4">Projects</span> Showcase
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of academic and personal projects built with passion
            and dedication.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
          {["all", "webdev", "uiux", "ml"].map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 text-sm font-medium rounded-full transition ${selectedCategory === cat
                ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-green-500 hover:text-white"
                }`}>
              {cat === "all" ? "All" : cat === "webdev" ? "Web Development" : cat === "uiux" ? "UI/UX" : "Python"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
