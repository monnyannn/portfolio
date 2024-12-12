import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const slideIn = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-12 bg-gray-50 px-4 sm:px-6 lg:px-8"
    >
      <div className="min-h-fit flex items-center justify-center px-4 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                variants={slideIn}
                initial="initial"
                animate="animate"
                className="mb-6"
              >
                <motion.h1 
                  variants={slideIn}
                  className="text-heading-1 font-bold text-custom-text mb-4"
                >
                  Hello. I am{' '}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="font-righteous text-custom-primary tracking-wider"
                  >
                    SHITTU ABIMBOLA MUIBAT
                  </motion.span>
                </motion.h1>
              </motion.div>
              
              <motion.h2 
                variants={fadeIn}
                initial="initial"
                animate="animate"
                className="text-heading-2 text-custom-text-secondary mb-6"
              >
                Product Designer | Frontend Developer
              </motion.h2>
              
              <motion.p 
                variants={fadeIn}
                initial="initial"
                animate="animate"
                className="text-body font-open-sans text-custom-text-secondary italic border-l-4 border-custom-primary pl-4 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                &ldquo;Crafting intuitive and visually compelling designs that solve real problems and create seamless user experiences.&rdquo;
              </motion.p>
              
              <motion.div 
                variants={fadeIn}
                initial="initial"
                animate="animate"
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start sm:space-x-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-custom-primary hover:bg-custom-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-primary"
                  >
                    View My Work
                    <span className="text-caption font-open-sans ml-2 opacity-80">→</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 border border-custom-text text-base font-medium rounded-md text-custom-text bg-custom-secondary hover:bg-custom-secondary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-text transition-colors duration-200"
                  >
                    Contact Me
                    <span className="text-caption font-open-sans ml-2 opacity-80">→</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Section */}
          <div 
            className="relative group w-full h-full flex justify-center items-center p-6"
          >
            <div className="relative w-[400px] h-[400px] overflow-hidden rounded-lg">
              <img
                src="/assets/mypic.jpg"
                alt="Profile"
                className="w-full h-full object-fit object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
