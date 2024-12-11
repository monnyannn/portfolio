import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'UI/UX Design',
    'Frontend Development',
    'React.js',
    'JavaScript',
    'HTML5 & CSS3',
    'Tailwind CSS',
    'Responsive Design',
    'Git & GitHub',
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Project Management',
    'Time Management',
    'Adaptability',
    'Creative Thinking',
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-custom-bg py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Bio Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-custom-text mb-6">About Me</h2>
            <div className="prose prose-lg text-custom-text/80">
              <p>
                I am a passionate Frontend Developer and UI/UX Designer with a keen eye for creating beautiful, 
                functional, and user-centered digital experiences. My approach combines technical expertise 
                with creative design thinking to build engaging web applications.
              </p>
              <p>
                With a strong foundation in modern web technologies and design principles, I strive to create 
                seamless interfaces that not only look great but also provide exceptional user experiences.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-custom-text mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-custom-bg rounded-lg p-4 text-center"
                >
                  <span className="text-custom-text/90 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Soft Skills Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-custom-text mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-custom-bg rounded-lg p-4 text-center"
                >
                  <span className="text-custom-text/90 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
