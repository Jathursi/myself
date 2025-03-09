import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaPlay, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Project() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  return (
    <div className="pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.5 }} 
        className="my-20 text-center text-4xl">
        Projects
      </motion.h2>

      <div className="grid gap-8 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 50 }} 
            transition={{ duration: 1.5 }} 
            className="rounded-lg bg-stone-900 p-6 shadow-lg flex flex-col justify-between">
            
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover rounded-lg mb-4" 
            />
            
            <h3 className="mb-2 text-2xl font-semibold text-stone-200">
              {project.title}
            </h3>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="rounded bg-stone-800 px-3 py-1 text-sm font-medium text-stone-300">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 mt-4">
              {project.video && (
                <button 
                  onClick={() => setSelectedVideo(project.video)} 
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  <FaPlay /> Play Video
                </button>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                  <FaGithub /> GitHub
                </a>
              )}
              {project.webpage && (
                <a 
                  href={project.webpage} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  <FaExternalLinkAlt /> Visit Site
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-4 rounded-lg w-[80%] max-w-2xl relative">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-700">
              ✕
            </button>
            <video controls autoPlay className="w-full rounded-lg">
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
