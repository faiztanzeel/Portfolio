import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, User, Sparkles, Heart } from 'lucide-react';

// Color palette matching the transition - aligned with ResumeSection colors
const colors = {
  // Top section transition (assuming it's dark)
  topSectionDark: '#000000',
  topSectionMid: '#050505',
  
  // About section gradient
  aboutTop: '#050505',
  aboutMid: '#0a0a0a',
  aboutBottom: '#0b1929',
  
  // Matching Starry Night transition
  transitionToStarry: '#0d1f2d',
  nightSkyDark: '#0b1929',
  
  // Neumorphism colors - matching ResumeSection
  neumorphBase: '#0f0f0f',
  neumorphLight: '#1a1a1a',
  neumorphDark: '#000000',
  
  // Accent colors - using some Starry Night yellows
  accentPurple: '#8B5CF6',
  accentBlue: '#3B82F6',
  accentCyan: '#06B6D4',
  starYellow: '#f7e98e',
  moonYellow: '#ffe47a',
  
  // Text colors
  textPrimary: '#FFFFFF',
  textSecondary: '#E5E7EB',
  textMuted: '#9CA3AF',
};

export const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern technologies and best practices.',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that enhance user experience.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Ensuring fast, responsive, and efficient applications across all platforms.',
      gradient: 'from-cyan-500 to-purple-500'
    }
  ];

  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'];

  return (
    <section id="about" className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Background with gradient transition */}
      <div className="absolute inset-0">
        {/* Top fade overlay from previous section */}
        <div 
          className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, ${colors.topSectionDark} 0%, transparent 100%)`
          }}
        />
        
        {/* Main gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, 
              ${colors.aboutTop} 0%, 
              ${colors.aboutMid} 40%, 
              ${colors.aboutBottom} 80%, 
              ${colors.nightSkyDark} 100%
            )`
          }}
        />
        
        {/* Subtle starry elements - preview of Starry Night below */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${50 + Math.random() * 50}%`, // Only in bottom half
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                backgroundColor: colors.starYellow,
                opacity: Math.random() * 0.3,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Subtle glow spots to hint at Starry Night swirls */}
        <div 
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, #4b79a1 0%, transparent 70%)`,
            filter: 'blur(100px)',
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, #6b93d6 0%, transparent 70%)`,
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.textPrimary }}>
            About{' '}
            <span className="relative inline-block">
             <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Me
              </span>
              <motion.div
               className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Card - Neumorphism Design matching ResumeSection style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div 
              className="relative p-8 rounded-2xl"
              style={{
                backgroundColor: colors.neumorphBase,
                boxShadow: `20px 20px 40px ${colors.neumorphDark}, -20px -20px 40px ${colors.neumorphLight}`,
              }}
            >
              {/* Profile Image Container */}
              <div className="flex justify-center mb-6">
                <motion.div 
                  className="relative w-48 h-48 rounded-full p-1"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    background: `linear-gradient(135deg, ${colors.starYellow}, ${colors.moonYellow})`,
                    boxShadow: `0 0 30px ${colors.starYellow}40`,
                  }}
                >
                  <div 
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: colors.neumorphBase,
                      boxShadow: `inset 10px 10px 20px ${colors.neumorphDark}, inset -10px -10px 20px ${colors.neumorphLight}`,
                    }}
                  >
                    <User size={60} style={{ color: colors.textMuted }} />
                  </div>
                </motion.div>
              </div>

              {/* Profile Info */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold" style={{ color: colors.textPrimary }}>
                  Faiz Tanzeel
                </h3>
                <p className="text-lg" style={{ color: colors.starYellow }}>
                  Software Developer
                </p>
                
                {/* Status Indicators */}
                <div className="flex justify-center gap-6 pt-4">
                  <motion.div
                    className="flex items-center gap-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm" style={{ color: colors.textMuted }}>Available</span>
                  </motion.div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} style={{ color: colors.starYellow }} />
                    <span className="text-sm" style={{ color: colors.textMuted }}>Open to Work</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 pt-4">
                  {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                    <motion.button
                      key={social}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg text-sm transition-all duration-300"
                      style={{
                        backgroundColor: colors.neumorphBase,
                        color: colors.textMuted,
                        boxShadow: `5px 5px 10px ${colors.neumorphDark}, -5px -5px 10px ${colors.neumorphLight}`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `inset 3px 3px 6px ${colors.neumorphDark}, inset -3px -3px 6px ${colors.neumorphLight}`;
                        e.currentTarget.style.color = colors.starYellow;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `5px 5px 10px ${colors.neumorphDark}, -5px -5px 10px ${colors.neumorphLight}`;
                        e.currentTarget.style.color = colors.textMuted;
                      }}
                    >
                      {social}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div 
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: colors.neumorphBase,
                boxShadow: `15px 15px 30px ${colors.neumorphDark}, -15px -15px 30px ${colors.neumorphLight}`,
              }}
            >
              <p className="text-lg leading-relaxed mb-4" style={{ color: colors.textSecondary }}>
                I'm a passionate full-stack developer who loves turning complex problems into 
                simple, beautiful, and intuitive solutions. When I'm not coding, you'll find me 
                exploring new technologies, contributing to open source, or sharing knowledge with the community.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ color: colors.textSecondary }}>
                My expertise spans across modern web technologies, including React, Node.js, TypeScript, 
                and cloud platforms. I believe in writing clean, maintainable code and creating 
                user experiences that truly matter.
              </p>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-4 pt-4">
                           {skills.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                  style={{
                    backgroundColor: colors.neumorphBase,
                    color: colors.textMuted,
                    boxShadow: `6px 6px 12px ${colors.neumorphDark}, -6px -6px 12px ${colors.neumorphLight}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.starYellow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.textMuted;
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid - Neumorphism matching ResumeSection */}
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
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div
                  className="p-6 rounded-2xl transition-all duration-300"
                  style={{
                    backgroundColor: colors.neumorphBase,
                    boxShadow: `15px 15px 30px ${colors.neumorphDark}, -15px -15px 30px ${colors.neumorphLight}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `inset 8px 8px 16px ${colors.neumorphDark}, inset -8px -8px 16px ${colors.neumorphLight}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `15px 15px 30px ${colors.neumorphDark}, -15px -15px 30px ${colors.neumorphLight}`;
                  }}
                >
                  {/* Icon with yellow gradient matching Starry Night theme */}
                  <motion.div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      background: `linear-gradient(135deg, ${colors.starYellow}, ${colors.moonYellow})`,
                      boxShadow: `0 0 20px ${colors.starYellow}30`,
                    }}
                  >
                    <Icon className="text-black" size={28} />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-3" style={{ color: colors.textPrimary }}>
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: colors.textMuted }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Years Experience', value: '5+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Happy Clients', value: '30+' },
            { label: 'Lines of Code', value: '100K+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl"
              style={{
                backgroundColor: colors.neumorphBase,
                boxShadow: `10px 10px 20px ${colors.neumorphDark}, -10px -10px 20px ${colors.neumorphLight}`,
              }}
            >
              <motion.div
                className="text-3xl font-bold mb-2"
                style={{ color: colors.starYellow }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm" style={{ color: colors.textMuted }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade overlay for smooth transition to Starry Night */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${colors.nightSkyDark} 100%)`
        }}
      />
      
      {/* Subtle swirl preview at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-0 pointer-events-none">
               <svg className="w-full h-full" viewBox="0 0 1920 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4b79a1" stopOpacity="0" />
              <stop offset="100%" stopColor="#4b79a1" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path 
            d="M0,100 Q480,50 960,100 T1920,100 L1920,200 L0,200 Z" 
            fill="url(#fadeGradient)"
          />
          <circle cx="200" cy="150" r="30" fill="none" stroke="#6b93d6" strokeWidth="2" opacity="0.2" />
          <circle cx="1700" cy="120" r="40" fill="none" stroke="#4b79a1" strokeWidth="3" opacity="0.2" />
        </svg>
      </div>
    </section>
  );
};