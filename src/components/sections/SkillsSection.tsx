import React from 'react';
import { motion } from 'framer-motion';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 80 }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'AWS/Cloud', level: 85 },
        { name: 'Docker', level: 82 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'CI/CD', level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded mr-3"></div>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                      duration: 0.6 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700/30 rounded-full h-2">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, 
                          duration: 1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'GraphQL', 'Redux', 'Prisma', 'Supabase', 'Firebase', 'Vercel', 
              'Jest', 'Cypress', 'Figma', 'Adobe XD', 'Webpack', 'Vite'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300 hover:border-gray-600/50 transition-colors duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};