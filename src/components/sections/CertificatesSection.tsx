import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

export const CertificatesSection: React.FC = () => {
  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      description: 'Professional-level certification demonstrating expertise in designing distributed systems on AWS.',
      badge: 'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      description: 'Demonstrates proficiency in building scalable applications using Google Cloud technologies.',
      badge: 'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    },
    {
      title: 'React Advanced Certification',
      issuer: 'Meta (Facebook)',
      date: '2022',
      description: 'Advanced React concepts including hooks, context, performance optimization, and testing.',
      badge: 'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    },
    {
      title: 'Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      description: 'Demonstrates skills required to be a successful Kubernetes Administrator in industry today.',
      badge: 'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2021',
      description: 'Comprehensive understanding of MongoDB database design, development, and deployment.',
      badge: 'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    },
    {
      title: 'Scrum Master Certified',
      issuer: 'Scrum Alliance',
      date: '2021',
      description: 'Certified in Agile methodologies and Scrum framework for effective project management.',
      badge: 'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    }
  ];

  return (
    <section id="certificates" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/30 border border-gray-700/50 rounded-lg overflow-hidden hover:border-gray-600/50 transition-all duration-300"
            >
              {/* Certificate Badge */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Award className="text-white" size={32} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-400 font-medium">{cert.issuer}</span>
                  <div className="flex items-center space-x-1 text-gray-400 text-sm">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                <motion.a
                  href={cert.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <span className="text-sm font-medium">View Certificate</span>
                  <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '12+', label: 'Certifications' },
            { number: '3', label: 'Cloud Platforms' },
            { number: '5+', label: 'Years Experience' },
            { number: '100%', label: 'Valid Certificates' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};