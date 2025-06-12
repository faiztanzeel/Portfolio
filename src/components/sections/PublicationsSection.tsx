import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ExternalLink, Users, FileText, Quote, PenTool, Award } from 'lucide-react';

// Color palette matching Certificates section
const colors = {
  // Dark universe colors (The Absolute Void)
  universeDark: "#07050A", // Extremely deep, almost absolute black with a subtle purple tint
  universeDeep: "#000000", // Pure black – the ultimate darkness
  darkGray: "#100A15",    // Barely perceptible very dark indigo-gray

  // Neumorphism colors (Barely There Form)
  neumorphBase: "#1A1525",    // The deepest base for subtle neumorphism
  neumorphLight: "#2B223D",   // A barely lighter shade for the faintest highlight
  neumorphDark: "#05000A",    // Even deeper shadow, pushing towards pure black

  // Accent colors (Distant Starlight & Nova Bursts)
  starYellow: "#FFECB3",  // The softest, almost white-yellow glow
  moonYellow: "#FFC107",  // A muted, warm gold
  starGlow: "#FAFAFA",    // The brightest point of light, pure off-white

  // Additional accent colors (Whispers from the Edge)
  accentPurple: "#7522B0", // Deep, dark violet, still vibrant
  accentBlue: "#2A64C2",   // A subdued, strong blue
  accentCyan: "#008F9B",   // A dark, almost murky teal
  accentPink: "#B04280",   // A deep, muted rose

  // Text colors (Piercing the Darkness)
  textPrimary: "#F8F8F8", // Near-white for maximum contrast
  textSecondary: "#DDDDDD", // A subtle step down from primary
  textMuted: "#A0A0A0",    // A medium gray for less emphasized text
};

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
      citations: 45,
      color: colors.accentBlue,
      icon: FileText
    },
    
    {
      title: 'The Future of Web3: Decentralized Applications Architecture',
      journal: 'Blockchain Technology Review',
            type: 'Whitepaper',
      date: '2023',
      authors: ['John Portfolio', 'Alex Kumar', 'Maria Garcia'],
      description: 'A comprehensive analysis of Web3 architecture patterns, smart contract integration, and the future of decentralized web applications.',
      link: '#',
      citations: 123,
      color: colors.starYellow,
      icon: Award
    }
  ];

  const stats = [
    { number: '15+', label: 'Publications', icon: BookOpen },
    { number: '200+', label: 'Citations', icon: Quote },
    { number: '5', label: 'Journals', icon: FileText },
    { number: '3', label: 'Awards', icon: Award }
  ];

  return (
    <section id="publications" className="relative min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background with gradient and textured center */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, 
              ${colors.universeDeep} 0%, 
              ${colors.universeDeep} 10%,
              ${colors.neumorphBase} 30%, 
              ${colors.darkGray} 70%,
              ${colors.neumorphBase} 90%,
              ${colors.universeDeep} 100%
            )`,
          }}
        />

        {/* Paper texture overlay with fade effect */}
        <div className="absolute inset-0">
          {/* SVG pattern definition */}
          <svg className="absolute" width="0" height="0">
            <defs>
              <pattern id="paper-texture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                {/* Fine grid lines */}
                <line x1="0" y1="0" x2="0" y2="100" stroke="#ffffff" strokeWidth="0.5" opacity="0.03"/>
                <line x1="20" y1="0" x2="20" y2="100" stroke="#ffffff" strokeWidth="0.3" opacity="0.02"/>
                <line x1="40" y1="0" x2="40" y2="100" stroke="#ffffff" strokeWidth="0.3" opacity="0.02"/>
                <line x1="60" y1="0" x2="60" y2="100" stroke="#ffffff" strokeWidth="0.3" opacity="0.02"/>
                <line x1="80" y1="0" x2="80" y2="100" stroke="#ffffff" strokeWidth="0.3" opacity="0.02"/>
                <line x1="100" y1="0" x2="100" y2="100" stroke="#ffffff" strokeWidth="0.5" opacity="0.03"/>
                
                <line x1="0" y1="0" x2="100" y2="0" stroke="#ffffff" strokeWidth="0.5" opacity="0.03"/>
                <line x1="0" y1="20" x2="100" y2="20" stroke="#ffffff" strokeWidth="0.3" opacity="0.02"/>
                <line x1="0" y1="40" x2="100" y2="40" stroke="#ffffff" strokeWidth="0.3" opacity="0.02"/>
                <line x1="0" y1="60" x2="100" y2="60" stroke="#ffffff" strokeWidth="0.3" opacity="0.02"/>
                <line x1="0" y1="80" x2="100" y2="80" stroke="#ffffff" strokeWidth="0.3" opacity="0.02"/>
                <line x1="0" y1="100" x2="100" y2="100" stroke="#ffffff" strokeWidth="0.5" opacity="0.03"/>
                
                {/* Subtle dots for paper texture */}
                <circle cx="10" cy="10" r="0.5" fill="#ffffff" opacity="0.02"/>
                <circle cx="30" cy="30" r="0.5" fill="#ffffff" opacity="0.02"/>
                <circle cx="50" cy="50" r="0.5" fill="#ffffff" opacity="0.02"/>
                <circle cx="70" cy="70" r="0.5" fill="#ffffff" opacity="0.02"/>
                <circle cx="90" cy="90" r="0.5" fill="#ffffff" opacity="0.02"/>
              </pattern>

              {/* Additional blueprint-style pattern */}
              <pattern id="blueprint-dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="#3B82F6" opacity="0.05"/>
              </pattern>
            </defs>
          </svg>

          {/* Textured layer with fade mask */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'url(#paper-texture)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 15%, black 30%, black 70%, transparent 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 15%, black 30%, black 70%, transparent 85%, transparent 100%)',
            }}
          />

          {/* Blueprint grid pattern */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 19px,
                  rgba(59, 130, 246, 0.03) 19px,
                  rgba(59, 130, 246, 0.03) 20px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 19px,
                  rgba(59, 130, 246, 0.03) 19px,
                  rgba(59, 130, 246, 0.03) 20px
                )
              `,
              backgroundSize: '20px 20px',
              maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 10%, black 25%, black 75%, transparent 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 10%, black 25%, black 75%, transparent 90%, transparent 100%)',
            }}
          />

          {/* Additional noise texture for paper feel */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              mixBlendMode: 'overlay',
              maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 20%, black 35%, black 65%, transparent 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 20%, black 35%, black 65%, transparent 80%, transparent 100%)',
            }}
          />
        </div>

        {/* Animated gradient orbs for depth */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-96 h-96 rounded-full"
            style={{
              left: '10%',
              top: '20%',
              background: `radial-gradient(circle, ${colors.accentBlue}08 0%, transparent 70%)`,
              filter: 'blur(40px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full"
            style={{
              right: '10%',
              bottom: '20%',
              background: `radial-gradient(circle, ${colors.accentPurple}08 0%, transparent 70%)`,
              filter: 'blur(40px)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Starry particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: colors.starYellow,
                opacity: 0.1,
                willChange: 'transform',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
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
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            style={{ color: colors.textPrimary }}
          >
            My{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Publications
              </span>
              <motion.div
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto px-4"
            style={{ color: colors.textMuted }}
          >
            Research papers, technical articles, and thought leadership content contributing to the developer community.
          </p>
        </motion.div>

        {/* Stats - Neumorphism Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => (
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
                  boxShadow: `15px 15px 30px ${colors.neumorphDark}, -15px -15px 30px ${colors.neumorphLight}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `inset 5px 5px 10px ${colors.neumorphDark}, inset -5px -5px 10px ${colors.neumorphLight}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `15px 15px 30px ${colors.neumorphDark}, -15px -15px 30px ${colors.neumorphLight}`;
                }}
              >
                <motion.div
                  className="flex justify-center mb-2 sm:mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon size={20} className="sm:w-6 sm:h-6" style={{ color: colors.starYellow }} />
                </motion.div>
                <motion.div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"
                  style={{ color: colors.starYellow }}
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

                {/* Publications List with Unique Design */}
        <div className="space-y-6 sm:space-y-8">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div
                className="relative rounded-2xl overflow-hidden transition-all duration-300"
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
                <div className="flex flex-col lg:flex-row">
                  {/* Left side - Icon and visual element */}
                  <div 
                    className="relative lg:w-48 h-32 lg:h-auto flex items-center justify-center p-6"
                    style={{
                      background: `linear-gradient(135deg, ${publication.color}15 0%, ${colors.neumorphBase} 100%)`,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${publication.color}20 0%, transparent 70%)`,
                      }}
                    />
                    
                    <motion.div
                      className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        backgroundColor: `${publication.color}20`,
                        border: `2px solid ${publication.color}40`,
                        boxShadow: `0 0 30px ${publication.color}30`,
                      }}
                    >
                      <publication.icon size={32} style={{ color: publication.color }} />
                    </motion.div>

                    {/* Citation count badge */}
                    <motion.div
                      className="absolute top-4 right-4 lg:top-auto lg:bottom-4 lg:right-auto lg:left-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <div
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          backgroundColor: `${colors.starYellow}20`,
                          color: colors.starYellow,
                          border: `1px solid ${colors.starYellow}40`,
                        }}
                      >
                        {publication.citations} Citations
                      </div>
                    </motion.div>
                  </div>

                  {/* Right side - Content */}
                  <div className="flex-1 p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className="px-3 py-1 text-xs rounded-full font-medium"
                        style={{
                          backgroundColor: `${publication.color}20`,
                          color: publication.color,
                          border: `1px solid ${publication.color}30`,
                        }}
                      >
                        {publication.type}
                      </span>
                      <div className="flex items-center space-x-1 text-sm" style={{ color: colors.textMuted }}>
                        <Calendar size={14} />
                        <span>{publication.date}</span>
                      </div>
                    </div>

                    <h3
                      className="text-xl sm:text-2xl font-semibold mb-3 leading-tight"
                      style={{ color: colors.textPrimary }}
                    >
                      {publication.title}
                    </h3>

                    <p
                      className="font-medium mb-3"
                      style={{ color: publication.color }}
                    >
                      {publication.journal}
                    </p>

                    <p
                      className="text-sm sm:text-base leading-relaxed mb-4"
                      style={{ color: colors.textSecondary }}
                    >
                      {publication.description}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <Users size={16} style={{ color: colors.textMuted }} />
                        {publication.authors.map((author, authorIndex) => (
                          <span
                            key={authorIndex}
                            className={`px-2 py-1 text-xs rounded-full ${
                              author === 'John Portfolio'
                                ? 'font-semibold'
                                : 'font-normal'
                            }`}
                            style={{
                              backgroundColor: author === 'John Portfolio' 
                                ? `${colors.starYellow}20` 
                                : `${colors.neumorphLight}80`,
                              color: author === 'John Portfolio' 
                                ? colors.starYellow 
                                : colors.textMuted,
                              border: author === 'John Portfolio'
                                ? `1px solid ${colors.starYellow}40`
                                : `1px solid ${colors.neumorphLight}`,
                            }}
                          >
                            {author}
                          </span>
                        ))}
                      </div>

                      <motion.a
                        href={publication.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 text-sm font-medium transition-colors duration-300"
                        style={{ color: publication.color }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = colors.starYellow;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = publication.color;
                        }}
                      >
                        <span>Read Full Paper</span>
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </div>
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
          className="text-center mt-12 sm:mt-16"
        >
          <div
            className="relative rounded-2xl overflow-hidden p-8 sm:p-10"
            style={{
              backgroundColor: colors.neumorphBase,
              boxShadow: `inset 10px 10px 20px ${colors.neumorphDark}, inset -10px -10px 20px ${colors.neumorphLight}`,
            }}
          >
            <h3
              className="text-2xl sm:text-3xl font-semibold mb-4"
              style={{ color: colors.textPrimary }}
            >
              Interested in Collaboration?
            </h3>
            <p
              className="text-base max-w-2xl mx-auto mb-8"
              style={{ color: colors.textSecondary }}
            >
              I'm always looking for opportunities to collaborate on research projects, 
              technical articles, or speaking engagements. Let's create something impactful together.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                style={{
                  backgroundColor: colors.starYellow,
                  color: colors.neumorphBase,
                  boxShadow: `0 10px 30px ${colors.starYellow}40`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 15px 40px ${colors.starYellow}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 30px ${colors.starYellow}40`;
                }}
              >
                <PenTool size={18} className="mr-2" />
                Get in Touch
              </motion.button>

              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full text-sm"
                style={{
                  backgroundColor: `${colors.neumorphBase}`,
                  color: colors.textMuted,
                  border: `1px solid ${colors.neumorphLight}`,
                }}
              >
                <Quote size={16} className="mr-2" />
                <span>Open for Research Collaborations</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom decoration line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 h-px max-w-md mx-auto"
          style={{
            background: `linear-gradient(to right, transparent, ${colors.starYellow}40, transparent)`,
          }}
        />
      </div>
    </section>
  );
};