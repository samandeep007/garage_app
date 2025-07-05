import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'animate.css';

// Dynamically import all .jpg files from src/assets/photos
const photos = import.meta.glob('../assets/photos/*.jpg', { eager: true });

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // No GSAP, relying on animate.css classes
  }, []);

  // Convert the glob import object into an array of project objects
  const projects = Object.values(photos).map((photo, index) => ({
    img: photo.default,
  }));

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedProject(projects[index]);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIndex);
    setSelectedProject(projects[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(prevIndex);
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <>
      <Helmet>
        <title>Projects | KARTAR Construction</title>
        <meta
          name="description"
          content="View our portfolio of completed garage projects in Calgary, showcasing custom designs and renovations."
        />
      </Helmet>
      <section className="py-16 bg-gradient-to-b from-offwhite to-gray min-h-screen perspective-1000">
        <div className="container mx-auto px-6 transform-style-3d">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-black text-center mb-12 animate__animated animate__fadeIn"
          >
            Our Projects
          </motion.h1>
          <div className="projects-section columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card break-inside-avoid mb-4 overflow-hidden rounded-lg shadow-lg cursor-pointer transform-style-3d animate__animated animate__fadeInUp"
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                onClick={() => openModal(index)}
              >
                <img
                  src={project.img}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/90 flex items-center justify-center z-50 perspective-1000 animate__animated animate__fadeIn"
            onClick={closeModal}
          >
            <motion.div
              className="bg-white p-6 rounded-xl shadow-2xl max-w-4xl w-full transform-style-3d relative"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black transition-colors z-10"
                onClick={closeModal}
              >
                <FaTimes size={24} />
              </button>
              <div className="relative">
                <img
                  src={selectedProject.img}
                  alt=""
                  className="w-full h-[500px] object-contain rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>
              <div className="flex justify-between items-center mt-4 px-2 z-10">
                <button
                  className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2 transform-style-3d z-10"
                  style={{ minWidth: '100px', padding: '10px 20px' }}
                  onClick={prevImage}
                >
                  <FaArrowLeft /> <span className="hidden sm:inline">Previous</span>
                </button>
                <button
                  className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2 transform-style-3d z-10"
                  style={{ minWidth: '100px', padding: '10px 20px' }}
                  onClick={nextImage}
                >
                  <span className="hidden sm:inline">Next</span> <FaArrowRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>
    </>
  );
}

export default Projects;