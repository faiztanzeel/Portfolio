import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS cloud services.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies.'
    },
    {
      title: 'Frontend Developer',
      company: 'StartUp Studio',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Created responsive user interfaces and implemented interactive features for web applications.'
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'Stanford University',
      location: 'Stanford, CA',
      period: '2017 - 2019',
      description: 'Specialized in Software Engineering and Human-Computer Interaction'
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'UC Berkeley',
      location: 'Berkeley, CA',
      period: '2013 - 2017',
      description: 'Magna Cum Laude, Focus on Web Development and Database Systems'
    }
  ];

  return (
    <section id="resume" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            A comprehensive overview of my professional journey and educational background.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mr-3"></div>
              Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l-2 border-gray-700/50"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-gray-900"></div>
                  
                  <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3 text-gray-400">
                      <span className="font-medium text-blue-400">{exp.company}</span>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mr-3"></div>
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l-2 border-gray-700/50"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full border-2 border-gray-900"></div>
                  
                  <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3 text-gray-400">
                      <span className="font-medium text-purple-400">{edu.school}</span>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};