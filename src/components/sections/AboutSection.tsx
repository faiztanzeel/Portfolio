import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket } from 'lucide-react';
import Lanyard from '../Lanyard'; // Adjust the import path

export const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern technologies and best practices.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that enhance user experience.'
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Ensuring fast, responsive, and efficient applications across all platforms.'
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Lanyard Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-gray-700/50"
          >
            <Lanyard 
              profileImagePath="./public/images/profile.jpg" // Replace with your image path
              userName="Faiz Tanzeel"                  // Replace with your name
              userTitle="Software Developer"                 // Replace with your title
              companyName=" "                 // Replace with your company
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer who loves turning complex problems into 
              simple, beautiful, and intuitive solutions. When I'm not coding, you'll find me 
              exploring new technologies, contributing to open source, or sharing knowledge with the community.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              My expertise spans across modern web technologies, including React, Node.js, TypeScript, 
              and cloud platforms. I believe in writing clean, maintainable code and creating 
              user experiences that truly matter.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-800/30 border border-gray-700/50 rounded-lg hover:border-gray-600/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};