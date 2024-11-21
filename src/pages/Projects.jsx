import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "The Courier and Logistic Regulatory Department (CLRD)",
    description: "The Courier and Logistic Regulatory Department (CLRD) oversees and enforces regulations related to the transportation, delivery, and logistics industries. It ensures compliance with safety standards, environmental regulations, and fair business practices, aiming to maintain efficient, reliable, and secure services for both businesses and consumers.",
    image: "/assets/clrd-home.png",
    tags: ["Figma", "Google", "Lucide", "Shadcn", "TailwindCSS"],
    size: "large",
    prototypeLink: 'https://www.figma.com/proto/3kl2UMolMCw2CGRwNOxUOh/NIPOST?page-id=0%3A1&node-id=2004-20789&node-type=frame&viewport=452%2C-91%2C0.04&t=ZkBU0hHZqJRF72oA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2004%3A21206',
  },
  {
    id: 2,
    title: 'SYNTEGRA',
    description: 'Syntegra is a tech company that empowers business with scalable, efficient, and secure infrastructure that drives growth. Our innovative solutions help businesses transform their operations and achieve sustainable success through cutting-edge technology integration.',
    image: "/assets/syntegra-home.png",
    tags: ["Figma", "TailwindCSS", "React"],
    size: "medium",
    prototypeLink: 'https://www.figma.com/proto/XCCJALe8OifppTPthGEYaf/Syntegra?page-id=0%3A1&node-id=1-2734&scaling=scale-down-width&content-scaling=fixed&t=cqwzqY9gyXjkm85z-1',
    liveLink: 'https://syntegra-web.onrendercom',
  },
];

const Projects = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const getSizeClass = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-2';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  const toggleDescription = (id) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-heading-1 font-bold text-custom-text mb-12 text-center"
        >
          Featured Projects
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className={`${getSizeClass(project.size)} group relative rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col`}
            >
              {/* Image Section */}
              <div className="h-[300px] overflow-hidden rounded-t-xl">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <motion.div 
                className="flex-1 p-6 bg-white rounded-b-xl flex flex-col"
                layout
              >
                <h3 className="text-heading-2 font-bold text-custom-text mb-2">
                  {project.title}
                </h3>
                
                <AnimatePresence mode="wait">
                  <motion.div 
                    className="relative"
                    layout
                  >
                    <motion.p 
                      className={`text-body font-open-sans text-custom-text-secondary mb-4 ${!expandedDescriptions[project.id] ? 'line-clamp-2' : ''}`}
                      layout
                    >
                      {project.description}
                    </motion.p>
                    <motion.button
                      onClick={() => toggleDescription(project.id)}
                      className="text-caption font-open-sans text-custom-primary hover:text-custom-primary-dark transition-colors focus:outline-none"
                      layout
                    >
                      {expandedDescriptions[project.id] ? 'Read Less' : 'Read More'}
                    </motion.button>
                  </motion.div>
                </AnimatePresence>

                {/* Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4 mt-4"
                  layout
                >
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      className="text-caption font-open-sans px-3 py-1 rounded-full bg-custom-primary/10 text-custom-primary"
                      layout
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Links */}
                <motion.div 
                  className="flex gap-4 mt-auto"
                  layout
                >
                  <a
                    href={project.prototypeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-caption font-open-sans px-4 py-2 rounded-lg bg-custom-primary text-white hover:bg-custom-primary-dark transition-colors"
                  >
                    View Prototype
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-caption font-open-sans px-4 py-2 rounded-lg border border-custom-primary text-custom-primary hover:bg-custom-primary hover:text-white transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
