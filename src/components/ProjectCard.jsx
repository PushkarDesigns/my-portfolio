import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image }) => {
  return (
    <motion.article
      className="group relative bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Project Image */}
      <div className="relative aspect-video">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>
        <a href="#" className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-white/90 text-black px-4 py-2 rounded-md font-semibold">
          View Details
        </a>
      </div>

      {/* Project Info */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
        <p className="text-gray-500 mt-1 text-sm">{description}</p>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
