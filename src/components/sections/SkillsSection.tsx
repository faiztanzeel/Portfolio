import React, { useState, useMemo, useCallback } from 'react';
import { motion, useAnimationFrame, AnimatePresence } from 'framer-motion';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as TbIcons from 'react-icons/tb';
import * as BiIcons from 'react-icons/bi';

// Combine icon libraries
const iconMap = {
  ...SiIcons,
  ...FaIcons,
  ...TbIcons,
  ...BiIcons
};

// Decrypted Text Component
const DecryptedText: React.FC<{ text: string; isVisible: boolean }> = ({ text, isVisible }) => {
  const [displayText, setDisplayText] = useState('');
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  React.useEffect(() => {
    if (!isVisible) {
      setDisplayText('');
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1;
    }, 30);

    return () => clearInterval(interval);
  }, [text, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-green-400 font-mono whitespace-nowrap z-50"
      style={{
        textShadow: '0 0 10px rgba(34, 197, 94, 0.5)',
      }}
    >
      {displayText}
    </motion.div>
  );
};

// Skills data with descriptions
const planetSystems = [
  { 
    id: 0, 
    name: 'Full Stack', 
    icon: 'FaCode',
    size: 80, 
    orbitRadius: 0,
    orbitDuration: 0, 
    color: '#FCD34D',
    glowColor: 'rgba(252, 211, 77, 0.6)', 
    isSun: true,
    description: 'Building complete web applications from frontend to backend'
  },
  
  // Inner orbit - Core Frontend
  { 
    id: 1, 
    name: 'HTML', 
    icon: 'SiHtml5',
    size: 32, 
    orbitRadius: 120,
    orbitDuration: 5, 
    color: '#F97316',
    initialAngle: 0,
    description: 'Semantic markup and modern HTML5 features'
  },
  { 
    id: 2, 
    name: 'CSS', 
    icon: 'SiCss3',
    size: 32, 
    orbitRadius: 120,
    orbitDuration: 5, 
    color: '#3B82F6',
    initialAngle: 72,
    description: 'Advanced styling with animations and responsive design'
  },
  { 
    id: 3, 
    name: 'JavaScript', 
    icon: 'SiJavascript',
    size: 36, 
    orbitRadius: 120,
    orbitDuration: 5, 
    color: '#EAB308',
    initialAngle: 144,
    description: 'ES6+, async programming, and functional concepts'
  },
  { 
    id: 4, 
    name: 'TypeScript', 
    icon: 'SiTypescript',
    size: 34, 
    orbitRadius: 120,
    orbitDuration: 5, 
    color: '#3178C6',
    initialAngle: 216,
    description: 'Type-safe development with advanced TypeScript features'
  },
  { 
    id: 22, 
    name: 'React Native', 
    icon: 'SiReact',
    size: 34, 
    orbitRadius: 120,
    orbitDuration: 5, 
    color: '#61DAFB',
    initialAngle: 288,
    description: 'Cross-platform mobile development with React'
  },
  
  // Second orbit - Frameworks
  { 
    id: 5, 
    name: 'React', 
    icon: 'SiReact',
    size: 40, 
    orbitRadius: 180,
    orbitDuration: 8, 
    color: '#06B6D4',
    initialAngle: 0,
    description: 'Component-based UI with hooks and modern patterns'
  },
  { 
    id: 6, 
    name: 'Angular', 
    icon: 'SiAngular',
    size: 38, 
    orbitRadius: 180,
    orbitDuration: 8, 
    color: '#DD0031',
    initialAngle: 120,
    description: 'Enterprise-scale applications with RxJS and TypeScript'
  },
  { 
    id: 7, 
    name: 'Node.js', 
    icon: 'SiNodedotjs',
    size: 42, 
    orbitRadius: 180,
    orbitDuration: 8, 
    color: '#339933',
    initialAngle: 240,
    description: 'Server-side JavaScript with Express and RESTful APIs'
  },
  
  // Third orbit - Styling & State
  { 
    id: 8, 
    name: 'Tailwind', 
    icon: 'SiTailwindcss',
    size: 32, 
    orbitRadius: 240,
    orbitDuration: 12, 
    color: '#06B6D4',
    initialAngle: 0,
    description: 'Utility-first CSS framework for rapid UI development'
  },
  { 
    id: 9, 
    name: 'Bootstrap', 
    icon: 'SiBootstrap',
    size: 32, 
    orbitRadius: 240,
    orbitDuration: 12, 
    color: '#7952B3',
    initialAngle: 60,
    description: 'Responsive grid system and pre-built components'
  },
  { 
    id: 10, 
    name: 'SCSS', 
    icon: 'SiSass',
    size: 30, 
    orbitRadius: 240,
    orbitDuration: 12, 
    color: '#CC6699',
    initialAngle: 120,
    description: 'Advanced CSS with variables, mixins, and nesting'
  },
  { 
    id: 11, 
    name: 'Redux', 
    icon: 'SiRedux',
    size: 32, 
    orbitRadius: 240,
    orbitDuration: 12, 
    color: '#764ABC',
    initialAngle: 180,
    description: 'Predictable state management for complex applications'
  },
  { 
    id: 12, 
    name: 'MUI', 
    icon: 'SiMui',
    size: 30, 
    orbitRadius: 240,
    orbitDuration: 12, 
    color: '#007FFF',
    initialAngle: 240,
    description: 'Material Design components for React applications'
  },
  { 
    id: 13, 
    name: 'Framer', 
    icon: 'SiFramer',
    size: 28, 
    orbitRadius: 240,
    orbitDuration: 12, 
    color: '#000000',
    initialAngle: 300,
    description: 'Production-ready animations and interactions'
  },
  
  // Fourth orbit - Tools
  { 
    id: 14, 
    name: 'Git', 
    icon: 'SiGit',
    size: 34, 
    orbitRadius: 300,
    orbitDuration: 16, 
    color: '#F05032',
    initialAngle: 0,
    description: 'Version control with branching and collaboration'
  },
  { 
    id: 15, 
    name: 'GitHub', 
    icon: 'SiGithub',
    size: 34, 
    orbitRadius: 300,
    orbitDuration: 16, 
    color: '#181717',
    initialAngle: 45,
    description: 'Code hosting, CI/CD, and open source contributions'
  },
  { 
    id: 16, 
    name: 'Postman', 
    icon: 'SiPostman',
    size: 30, 
    orbitRadius: 300,
    orbitDuration: 16, 
    color: '#FF6C37',
    initialAngle: 90,
    description: 'API testing and documentation workflows'
  },
  { 
    id: 17, 
    name: 'NPM', 
    icon: 'SiNpm',
    size: 28, 
    orbitRadius: 300,
    orbitDuration: 16, 
    color: '#CB3837',
    initialAngle: 135,
    description: 'Package management and dependency optimization'
  },
  { 
    id: 18, 
    name: 'Vercel', 
    icon: 'SiVercel',
    size: 30, 
    orbitRadius: 300,
    orbitDuration: 16, 
    color: '#000000',
    initialAngle: 180,
    description: 'Serverless deployment with edge functions'
  },
  { 
    id: 19, 
    name: 'Figma', 
    icon: 'SiFigma',
    size: 32, 
    orbitRadius: 300,
    orbitDuration: 16, 
    color: '#F24E1E',
    initialAngle: 225,
    description: 'UI/UX design and prototyping collaboration'
  },
  { 
    id: 20, 
    name: 'Jira', 
    icon: 'SiJira',
    size: 30, 
    orbitRadius: 300,
    orbitDuration: 16, 
    color: '#0052CC',
    initialAngle: 270,
    description: 'Agile project management and issue tracking'
  },
  { 
    id: 21, 
    name: 'Notion', 
    icon: 'SiNotion',
    size: 30, 
    orbitRadius: 300,
    orbitDuration: 16, 
    color: '#000000',
    initialAngle: 315,
    description: 'Knowledge management and team collaboration'
  },
];

// Optimized Planet Component
const Planet = React.memo(({ 
  planet, 
  angle, 
  isHovered, 
  isSelected,
  onHover,
  onClick
}: {
  planet: typeof planetSystems[0];
  angle: number;
  isHovered: boolean;
  isSelected: boolean;
  onHover: (id: number | null) => void;
  onClick: (id: number) => void;
}) => {
  const IconComponent = iconMap[planet.icon as keyof typeof iconMap];
  
  const x = Math.cos(angle) * planet.orbitRadius;
    const y = Math.sin(angle) * planet.orbitRadius * 0.4;
  
  const handleMouseEnter = useCallback(() => onHover(planet.id), [planet.id, onHover]);
  const handleMouseLeave = useCallback(() => onHover(null), [onHover]);
  const handleClick = useCallback(() => onClick(planet.id), [planet.id, onClick]);

  // Fixed hover size calculation
  const baseSize = planet.size;
  const hoverSize = planet.isSun ? baseSize * 1.2 : baseSize * 2.2;

  return (
    <>
      {/* Orbital Path - only show on hover */}
      {planet.orbitRadius > 0 && isHovered && (
        <motion.div
          className="absolute rounded-full border border-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            width: planet.orbitRadius * 2,
            height: planet.orbitRadius * 2 * 0.4,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}

      {/* Planet Container */}
      <motion.div
        className="absolute cursor-pointer"
        style={{
          left: '50%',
          top: '50%',
          zIndex: isHovered || isSelected ? 50 : y > 0 ? 20 : 10,
        }}
        animate={{
          x: x - (isHovered ? hoverSize / 2 : baseSize / 2),
          y: y - (isHovered ? hoverSize / 2 : baseSize / 2),
          width: isHovered ? hoverSize : baseSize,
          height: isHovered ? hoverSize : baseSize,
        }}
        transition={{
          type: "spring", 
          stiffness: 400, 
          damping: 30,
          mass: 0.8
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Glow effect */}
        <AnimatePresence>
          {(isHovered || isSelected) && (
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.3, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                background: `radial-gradient(circle, ${planet.glowColor || planet.color + '40'} 0%, transparent 70%)`,
                filter: 'blur(20px)',
              }}
            />
          )}
        </AnimatePresence>

        {/* Planet body */}
        <div 
          className="absolute inset-0 rounded-full flex items-center justify-center overflow-hidden"
          style={{
            backgroundColor: planet.color,
            boxShadow: planet.isSun 
              ? `0 0 40px ${planet.glowColor}, inset -3px -3px 10px rgba(0,0,0,0.3)` 
              : `inset -${baseSize * 0.15}px -${baseSize * 0.1}px ${baseSize * 0.15}px rgba(0,0,0,0.4)`,
          }}
        >
          {/* Content container */}
          <div className="flex flex-col items-center justify-center p-2">
            {IconComponent && (
              <IconComponent 
                className="text-white transition-all duration-300"
                style={{
                  fontSize: isHovered 
                    ? Math.min(hoverSize * 0.35, 40)
                    : baseSize * 0.5,
                  filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))',
                }}
              />
            )}
            
            {/* Name - show on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.span 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="text-white font-semibold text-center mt-1 px-1"
                  style={{ 
                    fontSize: Math.min(Math.max(10, hoverSize * 0.12), 14),
                    textShadow: '0 1px 3px rgba(0,0,0,0.9)',
                    lineHeight: 1.2,
                  }}
                >
                  {planet.name}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Shine effect */}
          <div 
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: planet.isSun 
                ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 40%)'
                : 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 40%)',
            }}
          />
        </div>

        {/* Decrypted Description */}
        <DecryptedText 
          text={planet.description} 
          isVisible={isSelected} 
        />
      </motion.div>
    </>
  );
});

Planet.displayName = 'Planet';

export const SkillsSection: React.FC = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState<number | null>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<number | null>(null);
  const [time, setTime] = useState(0);

  // Smooth animation using RAF
  useAnimationFrame((t, delta) => {
    setTime(prev => prev + delta);
  });

  // Calculate angles for all planets
  const planetAngles = useMemo(() => {
    return planetSystems.map(planet => {
      if (planet.orbitRadius === 0) return 0;
      
      const speed = 0.0001 * (50 / planet.orbitDuration);
      return (planet.initialAngle || 0) * Math.PI / 180 + time * speed;
    });
  }, [time]);

  // Memoize stars
  const stars = useMemo(() => 
    [...Array(80)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
    })), []
  );

  const handlePlanetHover = useCallback((id: number | null) => {
    setHoveredPlanet(id);
  }, []);

  const handlePlanetClick = useCallback((id: number) => {
    setSelectedPlanet(prev => prev === id ? null : id);
  }, []);

  return (
    <section id="skills" className="relative min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Simple starfield */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tech <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Universe</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My technical skills in orbital motion
          </p>
        </motion.div>

        {/* Solar System Container */}
        <div 
          className="relative mx-auto"
          style={{ 
            height: '450px',
            maxWidth: '900px',
          }}
        >
          {/* Central sun glow */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-yellow-500/20 blur-3xl" />

          {/* Render planets */}
          {planetSystems.map((planet, index) => (
            <Planet
              key={planet.id}
              planet={planet}
              angle={planetAngles[index]}
              isHovered={hoveredPlanet === planet.id}
              isSelected={selectedPlanet === planet.id}
              onHover={handlePlanetHover}
              onClick={handlePlanetClick}
            />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-gray-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <span>Core</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span>Languages</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Frameworks</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span>Styling</span>
          </div>
          <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-red-500" />
            <span>Tools</span>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-4 text-center text-gray-500 text-sm"
        >
          Hover to explore • Click to reveal skill details
        </motion.p>
      </div>
    </section>
  );
};