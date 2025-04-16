import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaTimes } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.projects-section',
          start: 'top 80%',
        },
      }
    );
  }, []);

  const projects = [
    { title: 'Residential Garage', img: '/assets/garage-hero.jpg', desc: 'A modern residential masterpiece with smart storage solutions.' },
    { title: 'Garage Renovation', img: '/assets/garage-service1.jpg', desc: 'Transformed an outdated garage into a sleek, functional workspace.' },
    { title: 'Commercial Build', img: '/assets/garage-service2.jpg', desc: 'Durable, high-capacity garage designed for business needs.' },
  ];

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
            className="text-5xl font-bold text-black text-center mb-12"
          >
            Our Projects
          </motion.h1>
          <div className="projects-section grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform-style-3d"
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <FaEye size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 perspective-1000"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-offwhite p-8 rounded-lg max-w-3xl w-full transform-style-3d"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ rotateX: 5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-black mb-4">{selectedProject.title}</h3>
              <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <p className="text-gray text-lg">{selectedProject.desc}</p>
              <button
                className="mt-6 bg-gradient-to-r from-blue to-blue/80 text-white py-2 px-4 rounded-lg hover:bg-black transition-colors flex items-center space-x-2 transform-style-3d"
                style={{ transform: 'translateZ(20px)' }}
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes /> <span>Close</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </section>
    </>
  );
}

export default Projects;