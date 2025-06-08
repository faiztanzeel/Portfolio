import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and advanced filtering capabilities.',
      image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Vue.js', 'Firebase', 'TypeScript', 'Tailwind'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Data visualization dashboard for weather analytics with interactive charts, forecasting, and historical data analysis.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Social Media Mobile App',
      description: 'Cross-platform mobile application for social networking with real-time messaging, photo sharing, and user engagement features.',
      image: 'https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'AI-Powered Content Generator',
      description: 'Machine learning application that generates content using natural language processing and provides content optimization suggestions.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Python', 'TensorFlow', 'React', 'OpenAI API'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure voting platform built on blockchain technology ensuring transparency, immutability, and voter anonymity.',
      image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, UI/UX design, and problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded mr-3"></div>
            Featured Projects
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/30 border border-gray-700/50 rounded-lg overflow-hidden hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700/50 border border-gray-600/50 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded mr-3"></div>
            Other Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-blue-400" size={24} />
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};