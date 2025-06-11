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
      className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-[10px] sm:text-xs text-green-400 font-mono whitespace-nowrap z-50 max-w-[200px] sm:max-w-[250px] md:max-w-none text-center"
      style={{
        textShadow: '0 0 10px rgba(34, 197, 94, 0.5)',
      }}
    >
      {displayText}
    </motion.div>
  );
};

// Optimized Space Background Component
const SpaceBackground: React.FC = () => {
  // Pre-calculate static elements
  const staticElements = useMemo(() => {
    // Stars with optimized rendering
    const stars = [...Array(150)].map((_, i) => {
      const colors = ['white', '#FFE4B5', '#ADD8E6', '#FFB6C1', '#E6E6FA'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 2.5 + 0.5;
      
      return {
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size,
        color,
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 2,
      };
    });

    // Star clusters
    const clusters = [...Array(3)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      stars: [...Array(8)].map((_, j) => ({
        id: j,
        offsetX: Math.random() * 30 - 15,
        offsetY: Math.random() * 30 - 15,
        size: Math.random() * 1.5 + 0.5,
      })),
    }));

    return { stars, clusters };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base deep space color */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Static gradient layers for galaxies */}
      <div className="absolute inset-0">
        {/* Milky Way band - optimized with CSS */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 800px 300px at 30% 40%, rgba(138, 43, 226, 0.25), transparent 50%),
              radial-gradient(ellipse 600px 400px at 70% 60%, rgba(30, 64, 175, 0.25), transparent 50%),
              radial-gradient(ellipse 1000px 200px at 50% 50%, rgba(99, 102, 241, 0.15), transparent 40%)
            `,
            transform: 'rotate(-20deg) scale(1.5)',
            willChange: 'auto',
          }}
        />
        
        {/* Nebula clouds - static with CSS blur */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            background: `
              radial-gradient(circle 400px at 20% 30%, rgba(236, 72, 153, 0.3), transparent 60%),
              radial-gradient(circle 600px at 80% 70%, rgba(6, 182, 212, 0.25), transparent 60%),
              radial-gradient(circle 500px at 60% 20%, rgba(251, 146, 60, 0.25), transparent 60%)
            `,
            filter: 'blur(60px)',
            willChange: 'auto',
          }}
        />
        
        {/* Distant galaxies - static elements */}
        <div className="absolute top-10 left-20 w-32 h-32 opacity-30">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent transform rotate-45 blur-sm" />
            <div className="absolute inset-4 bg-white/30 rounded-full blur-md" />
          </div>
        </div>
        
        <div className="absolute bottom-20 right-32 w-24 h-24 opacity-25">
          <div className="relative w-full h-full transform rotate-75">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent blur-sm" />
            <div className="absolute inset-3 bg-cyan-200/30 rounded-full blur-md" />
          </div>
        </div>
        
        {/* Slow moving asteroids - reduced count */}
        {[...Array(4)].map((_, i) => (
         <div 
  key={`asteroid-${i}`} 
  className="absolute bg-gray-600 rounded-full" 
  style={{
    width: Math.random() * 3 + 2, 
    height: Math.random() * 3 + 2, 
    left: `${Math.random() * 100}%`, 
    top: `${Math.random() * 100}%`, 
    boxShadow: '-1px -1px 2px rgba(0,0,0,0.5)', // Removed 'inset'
    animation: `float-${i} ${30 + i * 10}s linear infinite`, 
    willChange: 'transform',
  }} 
/>
        ))}
        
        {/* Single spaceship with optimized animation */}
        <div
          className="absolute opacity-50"
          style={{
            left: '10%',
            top: '60%',
            animation: 'spaceship-travel 60s linear infinite',
            willChange: 'transform',
          }}
        >
          <div className="relative">
            <div className="w-3 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-t-full" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-gradient-to-b from-blue-400/80 to-transparent blur-sm" />
          </div>
        </div>
        
        {/* Stars with optimized rendering */}
        {staticElements.stars.map((star) => (
          <div
            key={`star-${star.id}`}
            className="absolute rounded-full"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.left}%`,
              top: `${star.top}%`,
              backgroundColor: star.color,
              boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              willChange: 'opacity',
            }}
          />
        ))}
        
        {/* Star clusters */}
        {staticElements.clusters.map((cluster) => (
          <div
            key={`cluster-${cluster.id}`}
            className="absolute"
            style={{
              left: `${cluster.left}%`,
              top: `${cluster.top}%`,
            }}
          >
            {cluster.stars.map((star) => (
              <div
                key={`cluster-star-${star.id}`}
                className="absolute bg-white rounded-full"
                style={{
                  width: star.size,
                  height: star.size,
                  left: star.offsetX,
                  top: star.offsetY,
                  boxShadow: '0 0 3px white',
                }}
              />
            ))}
          </div>
        ))}
        
        {/* Single comet with optimized path */}
   <div
  className="absolute opacity-70"
  style={{
    left: '-5%',
    top: '20%',
    animation: 'comet-pass 45s linear infinite',
    animationDelay: '10s',
    willChange: 'transform',
  }}
>
  <div className="relative">
    <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
    <div className="absolute right-1 top-1 w-20 h-0.5 bg-gradient-to-l from-white/80 to-transparent transform rotate-45 origin-right blur-sm" />
  </div>
</div>
      </div>
      
      {/* Optimized CSS animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes float-0 {
          from { transform: translate(0, 0); }
          to { transform: translate(50px, 30px); }
        }
        
        @keyframes float-1 {
          from { transform: translate(0, 0); }
          to { transform: translate(-40px, 50px); }
        }
        
        @keyframes float-2 {
          from { transform: translate(0, 0); }
          to { transform: translate(60px, -40px); }
        }
        
        @keyframes float-3 {
          from { transform: translate(0, 0); }
          to { transform: translate(-30px, -60px); }
        }
        
        @keyframes spaceship-travel {
          from { transform: translate(0, 0); }
          to { transform: translate(1200px, -200px); }
        }
        
        @keyframes comet-pass {
          from { transform: translate(0, 0); }
          to { transform: translate(1400px, 400px); }
        }
      `}</style>
    </div>
  );
};

// Skills data with descriptions
const planetSystems = [
  { 
    id: 0, 
    name: 'Full Stack', 
    icon: 'FaCode',
    size: { mobile: 60, tablet: 80, desktop: 100 }, 
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
    size: { mobile: 25, tablet: 32, desktop: 40 }, 
    orbitRadius: { mobile: 90, tablet: 115, desktop: 150 },
    orbitDuration: 5, 
    color: '#F97316',
    initialAngle: 0,
    description: 'Semantic markup and modern HTML5 features'
  },
  { 
    id: 2, 
    name: 'CSS', 
    icon: 'SiCss3',
    size: { mobile: 25, tablet: 32, desktop: 40 }, 
    orbitRadius: { mobile: 90, tablet: 115, desktop: 150 },
    orbitDuration: 5, 
    color: '#3B82F6',
    initialAngle: 72,
    description: 'Advanced styling with animations and responsive design'
  },
  { 
    id: 3, 
    name: 'JavaScript', 
    icon: 'SiJavascript',
    size: { mobile: 28, tablet: 35, desktop: 45 }, 
    orbitRadius: { mobile: 90, tablet: 115, desktop: 150 },
    orbitDuration: 5, 
    color: '#EAB308',
    initialAngle: 144,
    description: 'ES6+, async programming, and functional concepts'
  },
  { 
    id: 4, 
    name: 'TypeScript', 
    icon: 'SiTypescript',
    size: { mobile: 26, tablet: 34, desktop: 42 }, 
    orbitRadius: { mobile: 90, tablet: 115, desktop: 150 },
    orbitDuration: 5, 
    color: '#3178C6',
    initialAngle: 216,
    description: 'Type-safe development with advanced TypeScript features'
  },
  { 
    id: 22, 
    name: 'React Native', 
    icon: 'SiReact',
    size: { mobile: 26, tablet: 34, desktop: 42 }, 
    orbitRadius: { mobile: 90, tablet: 115, desktop: 150 },
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
    size: { mobile: 30, tablet: 40, desktop: 50 }, 
    orbitRadius: { mobile: 140, tablet: 175, desktop: 225 },
    orbitDuration: 8, 
    color: '#06B6D4',
    initialAngle: 0,
    description: 'Component-based UI with hooks and modern patterns'
  },
  { 
    id: 6, 
    name: 'Angular', 
    icon: 'SiAngular',
    size: { mobile: 29, tablet: 38, desktop: 48 }, 
    orbitRadius: { mobile: 140, tablet: 175, desktop: 225 },
    orbitDuration: 8, 
    color: '#DD0031',
    initialAngle: 120,
    description: 'Enterprise-scale applications with RxJS and TypeScript'
  },
  { 
    id: 7, 
    name: 'Node.js', 
    icon: 'SiNodedotjs',
    size: { mobile: 31, tablet: 41, desktop: 52 }, 
    orbitRadius: { mobile: 140, tablet: 175, desktop: 225 },
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
    size: { mobile: 25, tablet: 32, desktop: 40 }, 
    orbitRadius: { mobile: 190, tablet: 240, desktop: 300 },
    orbitDuration: 12, 
    color: '#06B6D4',
    initialAngle: 0,
    description: 'Utility-first CSS framework for rapid UI development'
  },
  { 
    id: 9, 
    name: 'Bootstrap', 
    icon: 'SiBootstrap',
    size: { mobile: 25, tablet: 32, desktop: 40 }, 
    orbitRadius: { mobile: 190, tablet: 240, desktop: 300 },
    orbitDuration: 12, 
    color: '#7952B3',
    initialAngle: 60,
    description: 'Responsive grid system and pre-built components'
  },
  { 
    id: 10, 
    name: 'SCSS', 
    icon: 'SiSass',
    size: { mobile: 24, tablet: 30, desktop: 38 }, 
    orbitRadius: { mobile: 190, tablet: 240, desktop: 300 },
    orbitDuration: 12, 
    color: '#CC6699',
    initialAngle: 120,
    description: 'Advanced CSS with variables, mixins, and nesting'
  },
  { 
    id: 11, 
    name: 'Redux', 
    icon: 'SiRedux',
    size: { mobile: 25, tablet: 32, desktop: 40 }, 
    orbitRadius: { mobile: 190, tablet: 240, desktop: 300 },
    orbitDuration: 12, 
    color: '#764ABC',
    initialAngle: 180,
    description: 'Predictable state management for complex applications'
  },
  { 
    id: 12, 
    name: 'MUI', 
    icon: 'SiMui',
    size: { mobile: 24, tablet: 30, desktop: 38 }, 
    orbitRadius: { mobile: 190, tablet: 240, desktop: 300 },
    orbitDuration: 12, 
    color: '#007FFF',
    initialAngle: 240,
    description: 'Material Design components for React applications'
  },
  { 
    id: 13, 
    name: 'Framer', 
    icon: 'SiFramer',
    size: { mobile: 23, tablet: 28, desktop: 35 }, 
    orbitRadius: { mobile: 190, tablet: 240, desktop: 300 },
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
    size: { mobile: 26, tablet: 34, desktop: 42 }, 
    orbitRadius: { mobile: 240, tablet: 300, desktop: 375 },
    orbitDuration: 16, 
    color: '#F05032',
    initialAngle: 0,
    description: 'Version control with branching and collaboration'
  },
  { 
    id: 15, 
    name: 'GitHub', 
    icon: 'SiGithub',
    size: { mobile: 26, tablet: 34, desktop: 42 }, 
    orbitRadius: { mobile: 240, tablet: 300, desktop: 375 },
    orbitDuration: 16, 
    color: '#181717',
    initialAngle: 45,
    description: 'Code hosting, CI/CD, and open source contributions'
  },
  { 
    id: 16, 
    name: 'Postman', 
    icon: 'SiPostman',
    size: { mobile: 24, tablet: 30, desktop: 38 }, 
    orbitRadius: { mobile: 240, tablet: 300, desktop: 375 },
    orbitDuration: 16, 
    color: '#FF6C37',
    initialAngle: 90,
    description: 'API testing and documentation workflows'
  },
  { 
    id: 17, 
    name: 'NPM', 
    icon: 'SiNpm',
    size: { mobile: 23, tablet: 28, desktop: 35 }, 
    orbitRadius: { mobile: 240, tablet: 300, desktop: 375 },
    orbitDuration: 16, 
    color: '#CB3837',
    initialAngle: 135,
    description: 'Package management and dependency optimization'
  },
  { 
    id: 18, 
    name: 'Vercel', 
    icon: 'SiVercel',
    size: { mobile: 24, tablet: 30, desktop: 38 }, 
    orbitRadius: { mobile: 240, tablet: 300, desktop: 375 },
    orbitDuration: 16, 
    color: '#000000',
    initialAngle: 180,
    description: 'Serverless deployment with edge functions'
  },
  { 
    id: 19, 
    name: 'Figma', 
    icon: 'SiFigma',
    size: { mobile: 25, tablet: 32, desktop: 40 }, 
    orbitRadius: { mobile: 240, tablet: 300, desktop: 375 },
    orbitDuration: 16, 
    color: '#F24E1E',
    initialAngle: 225,
    description: 'UI/UX design and prototyping collaboration'
  },
  {     id: 20, 
    name: 'Jira', 
    icon: 'SiJira',
    size: { mobile: 24, tablet: 30, desktop: 38 }, 
    orbitRadius: { mobile: 240, tablet: 300, desktop: 375 },
    orbitDuration: 16, 
    color: '#0052CC',
    initialAngle: 270,
    description: 'Agile project management and issue tracking'
  },
  { 
    id: 21, 
    name: 'Notion', 
    icon: 'SiNotion',
    size: { mobile: 24, tablet: 30, desktop: 38 }, 
    orbitRadius: { mobile: 240, tablet: 300, desktop: 375 },
    orbitDuration: 16, 
    color: '#000000',
    initialAngle: 315,
    description: 'Knowledge management and team collaboration'
  },
];

// Hook to get responsive values
const useResponsiveValue = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveValue = (value: { mobile: number; tablet: number; desktop: number }) => {
    if (windowSize.width < 640) return value.mobile;
    if (windowSize.width < 1024) return value.tablet;
    return value.desktop;
  };

  return { getResponsiveValue, windowSize };
};

// Optimized Planet Component with smoother animations
const Planet = React.memo(({ 
  planet, 
  angle, 
  isHovered, 
  isSelected,
  onHover,
  onClick,
  getResponsiveValue
}: {
  planet: typeof planetSystems[0];
  angle: number;
  isHovered: boolean;
  isSelected: boolean;
  onHover: (id: number | null) => void;
  onClick: (id: number) => void;
  getResponsiveValue: (value: { mobile: number; tablet: number; desktop: number }) => number;
}) => {
  const IconComponent = iconMap[planet.icon as keyof typeof iconMap];
  
  const orbitRadius = planet.orbitRadius === 0 ? 0 : getResponsiveValue(planet.orbitRadius as any);
  const baseSize = getResponsiveValue(planet.size);
  
  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius * 0.4;
  
  const handleMouseEnter = useCallback(() => onHover(planet.id), [planet.id, onHover]);
  const handleMouseLeave = useCallback(() => onHover(null), [onHover]);
  const handleClick = useCallback(() => onClick(planet.id), [planet.id, onClick]);

  const hoverSize = planet.isSun ? baseSize * 1.2 : baseSize * 2.2;

  return (
    <>
      {/* Orbital Path - only show on hover */}
      {orbitRadius > 0 && isHovered && (
        <motion.div
          className="absolute rounded-full border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            width: orbitRadius * 2,
            height: orbitRadius * 2 * 0.4,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}

      {/* Planet Container with optimized positioning */}
      <div
        className="absolute cursor-pointer"
        style={{
          left: '50%',
          top: '50%',
          transform: `translate(${x - baseSize / 2}px, ${y - baseSize / 2}px)`,
          zIndex: isHovered || isSelected ? 50 : y > 0 ? 20 : 10,
          willChange: 'transform',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <motion.div
          animate={{
            width: isHovered ? hoverSize : baseSize,
            height: isHovered ? hoverSize : baseSize,
          }}
          transition={{
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            mass: 0.5
          }}
          className="relative"
        >
          {/* Glow effect */}
          <AnimatePresence>
            {(isHovered || isSelected) && (
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.3, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
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
            <div className="flex flex-col items-center justify-center p-1 sm:p-2">
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
                    transition={{ duration: 0.2 }}
                    className="text-white font-semibold text-center mt-0.5 sm:mt-1 px-1"
                    style={{ 
                      fontSize: Math.min(Math.max(8, hoverSize * 0.12), 14),
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
      </div>
    </>
  );
});

Planet.displayName = 'Planet';

export const SkillsSection: React.FC = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState<number | null>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<number | null>(null);
  const [time, setTime] = useState(0);
  const { getResponsiveValue, windowSize } = useResponsiveValue();

  // Optimized animation using RAF
  useAnimationFrame((_, delta) => {
    setTime(prev => prev + delta * 0.001); // Slower, smoother animation
  });

  // Calculate angles for all planets
  const planetAngles = useMemo(() => {
    return planetSystems.map(planet => {
      const orbitRadius = planet.orbitRadius === 0 ? 0 : getResponsiveValue(planet.orbitRadius as any);
      if (orbitRadius === 0) return 0;
      
      const speed = 0.1 * (50 / planet.orbitDuration);
      return (planet.initialAngle || 0) * Math.PI / 180 + time * speed;
    });
  }, [time, getResponsiveValue]);

  const handlePlanetHover = useCallback((id: number | null) => {
    setHoveredPlanet(id);
  }, []);

  const handlePlanetClick = useCallback((id: number) => {
    setSelectedPlanet(prev => prev === id ? null : id);
  }, []);

  // Responsive container height - increased sizes
  const containerHeight = windowSize.width < 640 ? '450px' : windowSize.width < 1024 ? '550px' : '650px';

  return (
    <section id="skills" className="relative min-h-screen py-10 sm:py-16 md:py-20 px-4 sm:px-6 bg-black overflow-hidden">
      {/* Optimized space background */}
      <SpaceBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                        Tech <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Universe</span>          
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            Explore my universe of skills and technologies
          </p>
        </motion.div>

        {/* Solar System Container - Increased size */}
        <div 
          className="relative mx-auto"
          style={{ 
            height: containerHeight,
            maxWidth: '1100px',
          }}
        >
          {/* Central sun glow - enhanced */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Multiple glow layers for depth */}
            <div className="absolute w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full bg-yellow-300/5 blur-3xl" />
            <div className="absolute w-[150px] sm:w-[225px] md:w-[300px] h-[150px] sm:h-[225px] md:h-[300px] rounded-full bg-yellow-400/10 blur-2xl" />
            <div className="absolute w-[100px] sm:w-[150px] md:w-[200px] h-[100px] sm:h-[150px] md:h-[200px] rounded-full bg-yellow-500/20 blur-xl" />
          </div>

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
              getResponsiveValue={getResponsiveValue}
            />
          ))}
        </div>

        {/* Legend with cosmic styling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-[10px] sm:text-xs text-gray-400 px-4"
        >
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-yellow-500 shadow-[0_0_4px_rgba(250,204,21,0.8)]" />
            <span>Core</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-orange-500 shadow-[0_0_4px_rgba(249,115,22,0.8)]" />
            <span>Languages</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-500 shadow-[0_0_4px_rgba(59,130,246,0.8)]" />
            <span>Frameworks</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-purple-500 shadow-[0_0_4px_rgba(168,85,247,0.8)]" />
            <span>Styling</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-red-500 shadow-[0_0_4px_rgba(239,68,68,0.8)]" />
            <span>Tools</span>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-3 sm:mt-4 text-center text-gray-500 text-[11px] sm:text-sm px-4"
        >
          <span className="hidden sm:inline">Hover to explore • Click to reveal skill details</span>
          <span className="sm:hidden">Tap to explore • Tap again for details</span>
        </motion.p>
      </div>

      {/* Gradient overlays for extra depth */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      
      {/* Side vignette for depth */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </section>
  );
}