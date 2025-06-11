import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Download,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
} from "lucide-react";

// Color Variables - Starry Night Theme
const colors = {
  // Van Gogh's Starry Night palette
  nightSky: "#1e3c72",
  nightSkyDark: "#0b1929",
  nightSkyLight: "#2a5298",

  // Swirl colors
  swirlBlue: "#4b79a1",
  swirlLightBlue: "#6b93d6",
  swirlDarkBlue: "#283e51",

  // Star/Moon colors
  starYellow: "#f7e98e",
  moonYellow: "#ffe47a",
  starGlow: "#fff6d5",

  // Village/Ground colors
  villageBlue: "#1e3a5f",
  cypressGreen: "#0d1f2d",

  // Text colors
  textPrimary: "#FFFFFF",
  textSecondary: "#E5E7EB",
  textMuted: "#9CA3AF",

  // Neumorphism colors
  neumorphBase: "#1a365d",
  neumorphLight: "#2d5a9b",
  neumorphDark: "#0f2847",

  // Transition to dark universe theme
  universeDark: "#050505",
  universeDeep: "#000000",
};

// Static data
const experiences = [
  {
    title: "Frontend Developer",
    company: "Paytring",
    location: "Gururgram, Haryana, IN",
    period: "April 2025 - Present",
    description:
      "Leading development of scalable web applications using React, Javascript, Framer, Tailwind.",
  },
  {
    title: "Systems Engineer",
    company: "Infosys",
    location: "Pune, Maharashtra, IN",
    period: "March 2022 - October 2024",
    description:
      "Developed and maintained multiple client projects using modern web technologies.",
  },
  {
    title: "Web Developer",
    company: "Dragcon",
    location: "Punjab, IN",
    period: "Feb 2018 - January 2022",
    description:
      "Created responsive user interfaces and implemented interactive features for web applications.",
  },
];

const education = [
  {
    degree: "Bachelor of Technology (IT)",
    school: "Lovely Professional University",
    location: "Punjab, IN",
    period: "2017 - 2021",
    description:
      "Specialized in Software Engineering and Human-Computer Interaction",
  },
  {
    degree: "Higher Secondary (Science)",
    school: "Sri Sri Aniruddhadeva Junior College",
    location: "Dibrugarh, Assam, IN",
    period: "2014 - 2016",
    description: "Physics, Chemistry, Mathematics, and Biology",
  },
  {
    degree: "Matriculation",
    school: "Montfort High School",
    location: "Chabua, Assam, IN",
    period: "2002 - 2014",
    description:
      "Completed secondary education with a focus on Science and Mathematics",
  },
];

export const ResumeSection: React.FC = () => {
  // Generate stars
  const stars = useMemo(
    () =>
      [...Array(80)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 60, // Keep stars in upper portion
        size: Math.random() * 3 + 1,
        brightness: Math.random() * 0.5 + 0.5,
      })),
    []
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="resume"
      className="relative min-h-screen py-20 px-6 overflow-hidden"
      style={{ backgroundColor: colors.nightSkyDark }}
    >
      {/* Starry Night Background */}
      <div className="absolute inset-0">
        {/* Top fade overlay from About section */}
        <div
          className="absolute top-0 left-0 right-0 h-48 pointer-events-none z-10"
          style={{
            background: `linear-gradient(to bottom, ${colors.nightSkyDark} 0%, transparent 100%)`,
          }}
        />

        {/* Base gradient for night sky - modified to fade to dark */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, 
              ${colors.nightSkyDark} 0%, 
              ${colors.nightSky} 20%, 
              ${colors.nightSkyLight} 40%, 
              ${colors.villageBlue} 60%,
              ${colors.cypressGreen} 80%,
              ${colors.universeDark} 95%,
              ${colors.universeDeep} 100%
            )`,
          }}
        />

        {/* Swirling patterns - Van Gogh style - fade out towards bottom */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 60%, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 60%, transparent 90%)",
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="swirls"
                x="0"
                y="0"
                width="300"
                height="300"
                patternUnits="userSpaceOnUse"
              >
                {/* Large swirls */}
                <circle
                  cx="150"
                  cy="150"
                  r="80"
                  fill="none"
                  stroke={colors.swirlBlue}
                  strokeWidth="8"
                  opacity="0.3"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="60"
                  fill="none"
                  stroke={colors.swirlLightBlue}
                  strokeWidth="6"
                  opacity="0.3"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="40"
                  fill="none"
                  stroke={colors.swirlDarkBlue}
                  strokeWidth="4"
                  opacity="0.3"
                />

                {/* Spiral paths */}
                <path
                  d="M75,150 Q75,75 150,75 T225,150 Q225,225 150,225 T75,150"
                  fill="none"
                  stroke={colors.swirlBlue}
                  strokeWidth="3"
                  opacity="0.2"
                />
                <path
                  d="M100,150 Q100,100 150,100 T200,150 Q200,200 150,200 T100,150"
                  fill="none"
                  stroke={colors.swirlLightBlue}
                  strokeWidth="2"
                  opacity="0.2"
                />
              </pattern>

              <filter id="turbulence">
                <feTurbulence
                  type="turbulence"
                  baseFrequency="0.01"
                  numOctaves="2"
                  result="turbulence"
                />
                <feDisplacementMap
                  in2="turbulence"
                  in="SourceGraphic"
                  scale="10"
                />
              </filter>
            </defs>

            <rect
              width="100%"
              height="100%"
              fill="url(#swirls)"
              filter="url(#turbulence)"
            />

            {/* Additional swirl elements */}
            <g opacity="0.4">
              <circle
                cx="300"
                cy="200"
                r="120"
                fill="none"
                stroke={colors.swirlLightBlue}
                strokeWidth="15"
                strokeDasharray="20 10"
              />
              <circle
                cx="1600"
                cy="300"
                r="150"
                fill="none"
                stroke={colors.swirlBlue}
                strokeWidth="20"
                strokeDasharray="30 15"
              />
              <circle
                cx="960"
                cy="150"
                r="100"
                fill="none"
                stroke={colors.swirlDarkBlue}
                strokeWidth="12"
                strokeDasharray="25 12"
              />
            </g>
          </svg>
        </div>

        {/* Stars - fade out towards bottom */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 50%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 50%, transparent 80%)",
          }}
        >
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full animate-pulse"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size * 2}px`,
                height: `${star.size * 2}px`,
                backgroundColor: colors.starYellow,
                opacity: star.brightness,
                boxShadow: `0 0 ${star.size * 4}px ${colors.starGlow}, 0 0 ${
                  star.size * 8
                }px ${colors.starYellow}`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
            />
          ))}
        </div>

        {/* Moon */}
        <div className="absolute top-16 right-32">
          <div
            className="w-24 h-24 rounded-full"
            style={{
              backgroundColor: colors.moonYellow,
              boxShadow: `0 0 60px ${colors.starGlow}, 0 0 120px ${colors.moonYellow}, inset -10px -10px 20px rgba(0,0,0,0.2)`,
            }}
          />
          {/* Crescent shadow */}
          <div
            className="absolute top-0 right-2 w-20 h-24 rounded-full"
            style={{
              backgroundColor: colors.nightSky,
              opacity: 0.8,
            }}
          />
        </div>

        {/* Cypress tree silhouette - fading out */}
        <div
          className="absolute bottom-0 left-20 w-32 h-96"
          style={{
            background: `linear-gradient(to top, ${colors.universeDark} 0%, ${colors.cypressGreen} 30%, transparent 100%)`,
            clipPath:
              "polygon(50% 0%, 60% 20%, 55% 40%, 65% 60%, 60% 80%, 55% 100%, 45% 100%, 40% 80%, 35% 60%, 45% 40%, 40% 20%)",
            opacity: 0.7,
          }}
        />

        {/* Village/horizon silhouette - transitioning to dark */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: `linear-gradient(to top, ${colors.universeDeep} 0%, ${colors.universeDark} 30%, transparent 100%)`,
            opacity: 0.9,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: colors.textPrimary }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            Explore a vibrant tapestry of professional growth, showing how much
            can be cultivated beyond the quiet of starry nights.
          </p>

          {/* Simple Flat Download Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 font-bold rounded-full transition-all duration-300"
            style={{
              backgroundColor: colors.starYellow,
              color: colors.nightSkyDark,
              boxShadow: `
      4px 4px 8px ${colors.nightSkyDark}40,
      -4px -4px 8px ${colors.starGlow}60,
      inset 1px 1px 2px ${colors.starGlow}40
    `,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.moonYellow;
              e.currentTarget.style.boxShadow = `
      2px 2px 4px ${colors.nightSkyDark}40,
      -2px -2px 4px ${colors.starGlow}60,
      inset 2px 2px 4px ${colors.starYellow}40
    `;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.starYellow;
              e.currentTarget.style.boxShadow = `
      4px 4px 8px ${colors.nightSkyDark}40,
      -4px -4px 8px ${colors.starGlow}60,
      inset 1px 1px 2px ${colors.starGlow}40
    `;
            }}
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-12">
              <div
                className="p-3 rounded-xl"
                style={{
                  backgroundColor: colors.neumorphBase,
                  boxShadow: `8px 8px 16px ${colors.neumorphDark}, -8px -8px 16px ${colors.neumorphLight}`,
                }}
              >
                <Briefcase size={24} style={{ color: colors.starYellow }} />
              </div>
              <h3
                className="text-3xl font-bold ml-4"
                style={{ color: colors.textPrimary }}
              >
                Experience
              </h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1, ...fadeInUp.transition }}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  {index < experiences.length - 1 && (
                    <div
                      className="absolute left-6 top-full h-8 w-0.5"
                      style={{ backgroundColor: `${colors.starYellow}30` }}
                    />
                  )}

                  <div
                    className="relative rounded-xl p-6 transition-all duration-300"
                    style={{
                      backgroundColor: colors.neumorphBase,
                      boxShadow: `12px 12px 24px ${colors.neumorphDark}, -12px -12px 24px ${colors.neumorphLight}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `inset 6px 6px 12px ${colors.neumorphDark}, inset -6px -6px 12px ${colors.neumorphLight}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `12px 12px 24px ${colors.neumorphDark}, -12px -12px 24px ${colors.neumorphLight}`;
                    }}
                  >
                    <div
                      className="absolute -left-2 top-6 w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: colors.starYellow,
                        boxShadow: `0 0 10px ${colors.starGlow}, 2px 2px 4px ${colors.neumorphDark}, -2px -2px 4px ${colors.neumorphLight}`,
                      }}
                    />

                    <h4
                      className="text-xl font-bold mb-3"
                      style={{ color: colors.textPrimary }}
                    >
                      {exp.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                      <span
                        className="font-semibold"
                        style={{ color: colors.starYellow }}
                      >
                        {exp.company}
                      </span>
                      <div
                        className="flex items-center gap-2"
                        style={{ color: colors.textMuted }}
                      >
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div
                        className="flex items-center gap-2"
                        style={{ color: colors.textMuted }}
                      >
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p
                      className="leading-relaxed"
                      style={{ color: colors.textSecondary }}
                    >
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-12">
              <div
                className="p-3 rounded-xl"
                style={{
                  backgroundColor: colors.neumorphBase,
                  boxShadow: `8px 8px 16px ${colors.neumorphDark}, -8px -8px 16px ${colors.neumorphLight}`,
                }}
              >
                <GraduationCap size={24} style={{ color: colors.moonYellow }} />
              </div>
              <h3
                className="text-3xl font-bold ml-4"
                style={{ color: colors.textPrimary }}
              >
                Education
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1, ...fadeInUp.transition }}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  {index < education.length - 1 && (
                    <div
                      className="absolute left-6 top-full h-8 w-0.5"
                      style={{ backgroundColor: `${colors.moonYellow}30` }}
                    />
                  )}

                  <div
                    className="relative rounded-xl p-6 transition-all duration-300"
                    style={{
                      backgroundColor: colors.neumorphBase,
                      boxShadow: `12px 12px 24px ${colors.neumorphDark}, -12px -12px 24px ${colors.neumorphLight}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `inset 6px 6px 12px ${colors.neumorphDark}, inset -6px -6px 12px ${colors.neumorphLight}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `12px 12px 24px ${colors.neumorphDark}, -12px -12px 24px ${colors.neumorphLight}`;
                    }}
                  >
                    <div
                      className="absolute -left-2 top-6 w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: colors.moonYellow,
                        boxShadow: `0 0 10px ${colors.starGlow}, 2px 2px 4px ${colors.neumorphDark}, -2px -2px 4px ${colors.neumorphLight}`,
                      }}
                    />

                    <h4
                      className="text-xl font-bold mb-3"
                      style={{ color: colors.textPrimary }}
                    >
                      {edu.degree}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                      <span
                        className="font-semibold"
                        style={{ color: colors.moonYellow }}
                      >
                        {edu.school}
                      </span>
                      <div
                        className="flex items-center gap-2"
                        style={{ color: colors.textMuted }}
                      >
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                      <div
                        className="flex items-center gap-2"
                        style={{ color: colors.textMuted }}
                      >
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p
                      className="leading-relaxed"
                      style={{ color: colors.textSecondary }}
                    >
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade overlay for smooth transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${colors.universeDeep} 100%)`,
        }}
      />

      {/* Additional CSS for animations */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }
        `}
      </style>
    </section>
  );
};
