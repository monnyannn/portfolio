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
      className="bg-gray-50"
    >
      <div className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
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
          </div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group w-full h-full flex justify-center items-center p-6" 
          >
            {/* Animated background glow */}
            <motion.div
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-[200px] h-[300px] bg-gradient-to-r from-custom-primary/30 to-custom-primary-light/30 blur-3xl rounded-[300px]"
            />

            {/* Main image container */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-[400px] h-[400px] overflow-hidden"
            >
              {/* Border glow effect */}
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 border-8 border-custom-primary/30 rounded-[250px] z-10"
              />

              {/* Image */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full relative"
              >
                <img
                  src="/assets/mypic.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover object-center rounded-[250px]"
                />
              </motion.div>

              {/* Shine effect */}
              <motion.div
                animate={{
                  opacity: [0, 0.3, 0],
                  left: ['-100%', '200%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-45 z-20"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
