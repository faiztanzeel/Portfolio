import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Code2, Sparkles, Rocket } from 'lucide-react';

// Color palette matching the neumorphism theme
const colors = {
  // Dark universe colors
  universeDark: "#050505",
  universeDeep: "#000000",
  darkGray: "#0a0a0a",

  // Neumorphism colors
  neumorphBase: "#0f0f0f",
  neumorphLight: "#1a1a1a",
  neumorphDark: "#000000",

  // Accent colors
  accentPurple: "#8B5CF6",
  accentBlue: "#3B82F6",
  accentCyan: "#06B6D4",
  accentPink: "#EC4899",
  
  // Project specific colors
  projectGradient1: "#6366F1",
  projectGradient2: "#8B5CF6",
  projectGradient3: "#EC4899",

  // GitHub contribution colors
  githubGreen0: "#0e1117", // Empty
  githubGreen1: "#0e4429", // Level 1
  githubGreen2: "#006d32", // Level 2
  githubGreen3: "#26a641", // Level 3
  githubGreen4: "#39d353", // Level 4

  // Text colors
  textPrimary: "#FFFFFF",
  textSecondary: "#E5E7EB",
  textMuted: "#9CA3AF",
};

// Generate contribution grid pattern
const ContributionGrid: React.FC = () => {
  // Responsive grid size
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const weeks = isMobile ? 26 : 52;
  const days = 7;
  
  // Generate random contribution levels
  const generateContributions = () => {
    const contributions = [];
    for (let week = 0; week < weeks; week++) {
      for (let day = 0; day < days; day++) {
        // Create more realistic pattern with some empty cells
        const random = Math.random();
        let level = 0;
        if (random > 0.3) level = 1;
        if (random > 0.5) level = 2;
        if (random > 0.7) level = 3;
        if (random > 0.85) level = 4;
        
        contributions.push({
          week,
          day,
          level,
          id: `${week}-${day}`
        });
      }
    }
    return contributions;
  };

  const contributions = generateContributions();
  const cellSize = isMobile ? 8 : 12;
  const cellGap = isMobile ? 2 : 3;

  const getColor = (level: number) => {
    switch (level) {
      case 0: return colors.githubGreen0;
      case 1: return colors.githubGreen1;
      case 2: return colors.githubGreen2;
      case 3: return colors.githubGreen3;
      case 4: return colors.githubGreen4;
      default: return colors.githubGreen0;
    }
  };

  return (
    <div 
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{
        maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
      }}
    >
      <div className="relative w-full flex items-center justify-center opacity-20">
        <svg
          width="100%"
          height={days * (cellSize + cellGap)}
          viewBox={`0 0 ${weeks * (cellSize + cellGap)} ${days * (cellSize + cellGap)}`}
          preserveAspectRatio="xMidYMid slice"
          className="w-full "
        >
          {contributions.map((contrib) => (
            <motion.rect
              key={contrib.id}
              x={contrib.week * (cellSize + cellGap)}
              y={contrib.day * (cellSize + cellGap)}
              width={cellSize}
              height={cellSize}
              rx={2}
              fill={getColor(contrib.level)}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: (contrib.week * 0.005) + (contrib.day * 0.002),
                duration: 0.3,
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: '#',
      demo: '#',
      featured: true,
      color: colors.accentBlue,
      stats: { commits: '2.3k', stars: '156', forks: '42' }
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and advanced filtering capabilities.',
      image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Vue.js', 'Firebase', 'TypeScript', 'Tailwind'],
      github: '#',
      demo: '#',
      featured: true,
      color: colors.accentPurple,
      stats: { commits: '1.8k', stars: '89', forks: '23' }
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Data visualization dashboard for weather analytics with interactive charts, forecasting, and historical data analysis.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: '#',
      demo: '#',
      featured: false,
      color: colors.accentCyan
    },
    {
      title: 'Social Media Mobile App',
      description: 'Cross-platform mobile application for social networking with real-time messaging, photo sharing, and user engagement features.',
      image: 'https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      github: '#',
      demo: '#',
      featured: false,
      color: colors.accentPink
    },
    {
      title: 'AI-Powered Content Generator',
      description: 'Machine learning application that generates content using natural language processing and provides content optimization suggestions.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Python', 'TensorFlow', 'React', 'OpenAI API'],
      github: '#',
      demo: '#',
      featured: false,
      color: colors.projectGradient1
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure voting platform built on blockchain technology ensuring transparency, immutability, and voter anonymity.',
      image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      github: '#',
      demo: '#',
      featured: false,
      color: colors.projectGradient2
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="relative min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background with gradient - seamless blend */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, 
              ${colors.universeDeep} 0%, 
              ${colors.neumorphBase} 20%,
              ${colors.darkGray} 50%, 
              ${colors.neumorphBase} 80%,
              ${colors.universeDeep} 100%
            )`,
          }}
        />

        {/* Centered GitHub contribution grid */}
        <ContributionGrid />

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-10"
            style={{
              background: `radial-gradient(circle, ${colors.githubGreen3} 0%, transparent 70%)`,
              top: '20%',
              left: '-5%',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-10"
            style={{
              background: `radial-gradient(circle, ${colors.githubGreen4} 0%, transparent 70%)`,
              bottom: '20%',
              right: '-5%',
            }}
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: colors.textPrimary }}>
            My{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Projects
              </span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 opacity-20 blur-xl"
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto px-4" style={{ color: colors.textMuted }}>
            A collection of projects that showcase my skills in full-stack development, UI/UX design, and problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-12 sm:mb-16">
          <motion.h3 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 flex items-center"
            style={{ color: colors.textPrimary }}
          >
            <motion.div 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg mr-3 sm:mr-4 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${colors.githubGreen3} 0%, ${colors.githubGreen4} 100%)`,
                boxShadow: `0 0 20px ${colors.githubGreen3}40`,
              }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles size={20} className="text-white" />
            </motion.div>
            Featured Projects
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div
                  className="relative rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: colors.neumorphBase,
                    boxShadow: `25px 25px 50px ${colors.neumorphDark}, -25px -25px 50px ${colors.neumorphLight}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `inset 15px 15px 30px ${colors.neumorphDark}, inset -15px -15px 30px ${colors.neumorphLight}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `25px 25px 50px ${colors.neumorphDark}, -25px -25px 50px ${colors.neumorphLight}`;
                  }}
                >
                  {/* Project Image with Overlay */}
                  <div className="relative h-52 sm:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{
                        filter: 'brightness(0.7) contrast(1.1)',
                      }}
                    />
                    
                    {/* Gradient overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to bottom, 
                          transparent 0%, 
                          ${colors.neumorphBase}80 60%,
                          ${colors.neumorphBase} 100%
                        )`,
                      }}
                    />

                    {/* Floating tech stack on hover */}
                    <motion.div
                      className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: -20 }}
                      whileInView={{ y: 0 }}
                    >
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium backdrop-blur-md rounded-full"
                          style={{
                            backgroundColor: `${colors.githubGreen3}20`,
                            border: `1px solid ${colors.githubGreen3}40`,
                            color: colors.textPrimary,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>

                    {/* Project type badge */}
                    <motion.div
                      className="absolute bottom-4 left-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <div 
                        className="px-4 py-2 rounded-full backdrop-blur-md flex items-center space-x-2"
                        style={{
                          backgroundColor: `${colors.githubGreen3}20`,
                          border: `1px solid ${colors.githubGreen3}40`,
                        }}
                      >
                        <Rocket size={16} style={{ color: colors.githubGreen4 }} />
                        <span className="text-xs font-medium" style={{ color: colors.textPrimary }}>
                          Featured
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h4 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: colors.textPrimary }}>
                      {project.title}
                    </h4>
                    <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: colors.textSecondary }}>
                      {project.description}
                    </p>

                    {/* Project stats */}
                    {project.stats && (
                      <div className="flex items-center space-x-4 sm:space-x-6 mb-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.githubGreen3 }} />
                          <span className="text-xs" style={{ color: colors.textMuted }}>
                            {project.stats.commits} commits
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.githubGreen4 }} />
                          <span className="text-xs" style={{ color: colors.textMuted }}>
                            {project.stats.stars} stars
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.githubGreen2 }} />
                          <span className="text-xs" style={{ color: colors.textMuted }}>
                            {project.stats.forks} forks
                                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300"
                          style={{
                            backgroundColor: colors.neumorphBase,
                            boxShadow: `5px 5px 10px ${colors.neumorphDark}, -5px -5px 10px ${colors.neumorphLight}`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `inset 3px 3px 6px ${colors.neumorphDark}, inset -3px -3px 6px ${colors.neumorphLight}`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = `5px 5px 10px ${colors.neumorphDark}, -5px -5px 10px ${colors.neumorphLight}`;
                          }}
                        >
                          <Github size={16} style={{ color: colors.textMuted }} />
                          <span className="text-sm" style={{ color: colors.textMuted }}>Code</span>
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${colors.githubGreen3} 0%, ${colors.githubGreen4} 100%)`,
                            boxShadow: `0 0 20px ${colors.githubGreen3}40`,
                          }}
                        >
                          <ExternalLink size={16} className="text-white" />
                          <span className="text-sm text-white">Live Demo</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 flex items-center"
            style={{ color: colors.textPrimary }}
          >
            <motion.div 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg mr-3 sm:mr-4 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${colors.githubGreen2} 0%, ${colors.githubGreen3} 100%)`,
                boxShadow: `0 0 20px ${colors.githubGreen2}40`,
              }}
              whileHover={{ rotate: -180 }}
              transition={{ duration: 0.6 }}
            >
              <Code2 size={20} className="text-white" />
            </motion.div>
            Other Projects
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div
                  className="relative rounded-xl overflow-hidden transition-all duration-300 h-full"
                  style={{
                    backgroundColor: colors.neumorphBase,
                    boxShadow: `20px 20px 40px ${colors.neumorphDark}, -20px -20px 40px ${colors.neumorphLight}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `inset 10px 10px 20px ${colors.neumorphDark}, inset -10px -10px 20px ${colors.neumorphLight}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `20px 20px 40px ${colors.neumorphDark}, -20px -20px 40px ${colors.neumorphLight}`;
                  }}
                >
                  {/* Compact image header */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{
                        filter: 'brightness(0.6) contrast(1.1)',
                      }}
                    />
                    
                    {/* Gradient overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to bottom, 
                          ${colors.githubGreen1}10 0%, 
                          ${colors.neumorphBase}EE 80%,
                          ${colors.neumorphBase} 100%
                        )`,
                      }}
                    />

                    {/* Folder icon */}
                    <motion.div
                      className="absolute top-4 left-4"
                      whileHover={{ rotate: 10 }}
                    >
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm"
                        style={{
                          backgroundColor: `${colors.githubGreen3}20`,
                          border: `1px solid ${colors.githubGreen3}40`,
                        }}
                      >
                        <Folder size={20} style={{ color: colors.githubGreen4 }} />
                      </div>
                    </motion.div>

                    {/* Links */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm transition-colors duration-300"
                        style={{
                          backgroundColor: `${colors.neumorphBase}80`,
                          border: `1px solid ${colors.neumorphLight}40`,
                        }}
                      >
                        <Github size={14} style={{ color: colors.textMuted }} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm transition-colors duration-300"
                        style={{
                          backgroundColor: `${colors.githubGreen3}20`,
                          border: `1px solid ${colors.githubGreen3}40`,
                        }}
                      >
                        <ExternalLink size={14} style={{ color: colors.githubGreen4 }} />
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-lg font-semibold mb-2 line-clamp-1" style={{ color: colors.textPrimary }}>
                      {project.title}
                    </h4>
                    <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: colors.textSecondary }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded text-xs"
                          style={{
                            backgroundColor: colors.neumorphLight,
                            color: colors.textMuted,
                            boxShadow: `2px 2px 4px ${colors.neumorphDark}, -2px -2px 4px ${colors.neumorphLight}`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs" style={{ color: colors.textMuted }}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-12 sm:mt-16 text-center"
>
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="relative group px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-medium transition-all duration-500 text-sm sm:text-base inline-flex items-center gap-3"
    style={{
      backgroundColor: colors.neumorphBase,
      boxShadow: `
        12px 12px 24px ${colors.neumorphDark}CC,
        -12px -12px 24px ${colors.neumorphLight}26,
        inset 1px 1px 0px ${colors.neumorphLight}0D,
        inset -1px -1px 0px ${colors.neumorphDark}CC
      `,
      border: `1px solid ${colors.neumorphLight}10`,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = `
        inset 6px 6px 12px ${colors.neumorphDark}E6,
        inset -6px -6px 12px ${colors.neumorphLight}1A,
        0px 0px 0px ${colors.neumorphDark}CC,
        0px 0px 0px ${colors.neumorphLight}26
      `;
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.border = `1px solid ${colors.githubGreen4}30`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = `
        12px 12px 24px ${colors.neumorphDark}CC,
        -12px -12px 24px ${colors.neumorphLight}26,
        inset 1px 1px 0px ${colors.neumorphLight}0D,
        inset -1px -1px 0px ${colors.neumorphDark}CC
      `;
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.border = `1px solid ${colors.neumorphLight}10`;
    }}
  >
    {/* Multiple gradient layers for depth */}
    <motion.div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background: `
          radial-gradient(circle at 30% 50%, ${colors.githubGreen3}15 0%, transparent 50%),
          radial-gradient(circle at 70% 50%, ${colors.githubGreen4}15 0%, transparent 50%)
        `,
      }}
    />
    
    {/* GitHub Icon with enhanced shadow */}
    <motion.div
      className="relative z-10"
      animate={{ rotate: [0, 0, 0] }}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
    >
      <Github 
        size={20} 
        style={{ 
          color: colors.githubGreen4,
          filter: `
            drop-shadow(0 0 6px ${colors.githubGreen4}60)
            drop-shadow(0 0 12px ${colors.githubGreen4}30)
          `,
        }} 
      />
    </motion.div>
    
    {/* Text with better contrast */}
    <span 
      className="relative z-10 bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent group-hover:from-green-400 group-hover:via-emerald-400 group-hover:to-teal-400 transition-all duration-500 font-semibold"
      style={{
        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))',
      }}
    >
      View All Projects on GitHub
    </span>
    
    {/* Arrow indicator */}
    <motion.span
      className="relative z-10 text-gray-500 group-hover:text-green-400 transition-colors duration-500"
      animate={{ x: [0, 0, 0] }}
      whileHover={{ x: [0, 5, 0] }}
      transition={{ duration: 0.6, repeat: Infinity }}
    >
      →
    </motion.span>
    
    {/* Enhanced glow effect on hover */}
    <motion.div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
      style={{
        boxShadow: `
          0 0 20px ${colors.githubGreen3}20,
          0 0 40px ${colors.githubGreen4}15,
          0 0 60px ${colors.githubGreen3}10
        `,
      }}
    />
    
    {/* Subtle inner glow */}
    <motion.div
      className="absolute inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        boxShadow: `inset 0 0 20px ${colors.githubGreen4}10`,
      }}
    />
  </motion.button>
</motion.div>

        {/* GitHub Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { number: "50+", label: "Repositories", color: colors.githubGreen4 },
            { number: "1.2k+", label: "Total Commits", color: colors.githubGreen3 },
            { number: "300+", label: "Pull Requests", color: colors.githubGreen2 },
            { number: "150+", label: "Contributions", color: colors.githubGreen4 },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div
                className="text-center p-4 sm:p-6 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: colors.neumorphBase,
                  boxShadow: `10px 10px 20px ${colors.neumorphDark}, -10px -10px 20px ${colors.neumorphLight}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `inset 5px 5px 10px ${colors.neumorphDark}, inset -5px -5px 10px ${colors.neumorphLight}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `10px 10px 20px ${colors.neumorphDark}, -10px -10px 20px ${colors.neumorphLight}`;
                }}
              >
                <motion.div
                  className="text-2xl sm:text-3xl font-bold mb-1"
                  style={{ color: stat.color }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div
                  className="text-xs sm:text-sm font-medium"
                  style={{ color: colors.textMuted }}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};