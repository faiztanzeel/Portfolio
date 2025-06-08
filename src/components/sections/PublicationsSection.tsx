import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ExternalLink, Users } from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  const publications = [
    {
      title: 'Optimizing React Performance: A Comprehensive Guide to Modern Web Development',
      journal: 'Journal of Web Technologies',
      type: 'Research Paper',
      date: '2024',
      authors: ['John Portfolio', 'Jane Smith', 'Mike Johnson'],
      description: 'An in-depth analysis of React performance optimization techniques, including lazy loading, memoization, and bundle splitting strategies for large-scale applications.',
      link: '#',
      citations: 45
    },
    {
      title: 'Machine Learning Integration in Modern Web Applications',
      journal: 'AI & Web Development Quarterly',
      type: 'Technical Article',
      date: '2023',
      authors: ['John Portfolio', 'Sarah Wilson'],
      description: 'Exploring practical approaches to integrating machine learning models into web applications, focusing on real-time inference and user experience optimization.',
      link: '#',
      citations: 32
    },
    {
      title: 'Microservices Architecture: Best Practices for Scalable Systems',
      journal: 'Software Engineering Today',
      type: 'Case Study',
      date: '2023',
      authors: ['John Portfolio'],
      description: 'A comprehensive case study on implementing microservices architecture in enterprise environments, covering deployment strategies and monitoring approaches.',
      link: '#',
      citations: 28
    },
    {
      title: 'The Future of Serverless Computing in Web Development',
      journal: 'Cloud Computing Review',
      type: 'Review Article',
      date: '2022',
      authors: ['John Portfolio', 'Alex Chen', 'Lisa Rodriguez'],
      description: 'Analysis of serverless computing trends and their impact on modern web development practices, including cost optimization and performance considerations.',
      link: '#',
      citations: 38
    },
    {
      title: 'Progressive Web Apps: Bridging the Gap Between Web and Mobile',
      journal: 'Mobile Web Technologies',
      type: 'Technical Paper',
      date: '2022',
      authors: ['John Portfolio', 'Emma Davis'],
      description: 'Comprehensive guide to building Progressive Web Apps with focus on offline functionality, push notifications, and app-like user experiences.',
      link: '#',
      citations: 52
    }
  ];

  const stats = [
    { number: '15+', label: 'Publications' },
    { number: '200+', label: 'Citations' },
    { number: '5', label: 'Journals' },
    { number: '3', label: 'Awards' }
  ];

  return (
    <section id="publications" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Publications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Research papers, technical articles, and thought leadership content contributing to the developer community.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-4 bg-gray-800/30 border border-gray-700/50 rounded-lg"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <BookOpen className="text-blue-400" size={20} />
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                      {publication.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                    {publication.title}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3 text-gray-400 text-sm">
                    <span className="font-medium text-purple-400">{publication.journal}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{publication.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{publication.citations} citations</span>
                    </div>
                  </div>
                </div>

                <motion.a
                  href={publication.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mt-4 lg:mt-0"
                >
                  <span className="text-sm font-medium">Read Paper</span>
                  <ExternalLink size={16} />
                </motion.a>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                {publication.description}
              </p>

              <div className="flex flex-wrap items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {publication.authors.map((author, authorIndex) => (
                    <span
                      key={authorIndex}
                      className={`px-2 py-1 text-xs rounded-full ${
                        author === 'John Portfolio'
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30'
                          : 'bg-gray-700/50 text-gray-400 border border-gray-600/50'
                      }`}
                    >
                      {author}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-gray-700/50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always looking for opportunities to collaborate on research projects, 
              technical articles, or speaking engagements. Let's create something impactful together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};