import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
  CheckCircle,
  Shield,
  Star,
} from "lucide-react";

// Color palette matching About section
const colors = {
  // Dark universe colors
  universeDark: "#050505",
  universeDeep: "#000000",
  darkGray: "#0a0a0a",

  // Neumorphism colors
  neumorphBase: "#0f0f0f",
  neumorphLight: "#1a1a1a",
  neumorphDark: "#000000",

  // Accent colors (matching Starry Night theme)
  starYellow: "#f7e98e",
  moonYellow: "#ffe47a",
  starGlow: "#fff6d5",

  // Additional accent colors
  accentPurple: "#8B5CF6",
  accentBlue: "#3B82F6",
  accentCyan: "#06B6D4",

  // Text colors
  textPrimary: "#FFFFFF",
  textSecondary: "#E5E7EB",
  textMuted: "#9CA3AF",
};

export const CertificatesSection: React.FC = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description:
        "Professional-level certification demonstrating expertise in designing distributed systems on AWS.",
      badge:
        "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#",
      color: colors.accentPurple,
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      description:
        "Demonstrates proficiency in building scalable applications using Google Cloud technologies.",
      badge:
        "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#",
      color: colors.accentBlue,
    },
    {
      title: "React Advanced Certification",
      issuer: "Meta (Facebook)",
      date: "2022",
      description:
        "Advanced React concepts including hooks, context, performance optimization, and testing.",
      badge:
        "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#",
      color: colors.accentCyan,
    },
    {
      title: "Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      description:
        "Demonstrates skills required to be a successful Kubernetes Administrator in industry today.",
      badge:
        "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#",
      color: colors.starYellow,
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2021",
      description:
        "Comprehensive understanding of MongoDB database design, development, and deployment.",
      badge:
        "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#",
      color: colors.accentPurple,
    },
    {
      title: "Scrum Master Certified",
      issuer: "Scrum Alliance",
      date: "2021",
      description:
        "Certified in Agile methodologies and Scrum framework for effective project management.",
      badge:
        "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#",
      color: colors.accentBlue,
    },
  ];

  return (
    <section
      id="certificates"
      className="relative min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Background with gradient and random certificate names */}
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

        {/* Random certificate names in the background */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute select-none pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${35 + Math.random() * 30}%`, // Keeps text in middle section
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: 0.03, // Very subtle appearance
                color: colors.textMuted,
                fontSize: `${Math.random() * 1 + 0.8}rem`,
                fontWeight: Math.random() > 0.5 ? 300 : 400,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.02],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {[
                "AWS Solutions Architect",
                "Google Cloud Professional",
                "Azure Developer Associate",
                "Kubernetes CKA",
                "Docker Certified Associate",
                "Terraform Associate",
                "CISSP",
                "CompTIA Security+",
                "CCNA",
                "MongoDB Developer",
                "Neo4j Certified",
                "Redis Certified Developer",
                "React Developer",
                "Vue.js Expert",
                "Angular Certified",
                "TypeScript Professional",
                "GraphQL Specialist",
                "Rust Developer",
                "Go Developer",
                "Python Expert",
              ][i]}
            </motion.div>
          ))}
        </div>

        {/* Subtle animated particles - optimized for performance */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
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
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Certificates
              </span>
              <motion.div
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto px-4"
            style={{ color: colors.textMuted }}
          >
            Professional certifications that validate my expertise and
            commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
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
                {/* Certificate Badge Area with Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  {/* Background gradient */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${colors.neumorphBase} 0%, ${colors.neumorphLight} 100%)`,
                    }}
                  />

                  {/* Certificate image with optimized loading */}
                  <div className="relative w-full h-full">
                    <img
                      src={cert.badge}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      style={{
                        filter: 'brightness(0.7) contrast(1.2)',
                        objectPosition: 'center',
                      }}
                    />
                    
                    {/* Gradient overlay for better contrast */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to bottom, 
                          ${cert.color}10 0%, 
                          ${colors.neumorphBase}CC 60%,
                          ${colors.neumorphBase} 100%
                        )`,
                      }}
                    />
                  </div>
                                    {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${cert.color}20 0%, transparent 70%)`,
                    }}
                  />

                  {/* Floating certificate icon */}
                  <motion.div
                    className="absolute bottom-4 left-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundColor: `${cert.color}20`,
                      border: `2px solid ${cert.color}40`,
                      boxShadow: `0 0 20px ${cert.color}40`,
                    }}
                  >
                    <Award className="text-white" size={24} />
                  </motion.div>

                  {/* Verified badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-green-500 rounded-full p-1.5 sm:p-2 backdrop-blur-sm"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    style={{
                      boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
                    }}
                  >
                    <CheckCircle size={16} className="text-white" />
                  </motion.div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3
                    className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2"
                    style={{ color: colors.textPrimary }}
                  >
                    {cert.title}
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
                    <span className="font-medium text-sm sm:text-base" style={{ color: cert.color }}>
                      {cert.issuer}
                    </span>
                    <div
                      className="flex items-center space-x-1 text-xs sm:text-sm"
                      style={{ color: colors.textMuted }}
                    >
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <p
                    className="text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3"
                    style={{ color: colors.textSecondary }}
                  >
                    {cert.description}
                  </p>

                  <motion.a
                    href={cert.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 text-xs sm:text-sm font-medium transition-colors duration-300"
                    style={{ color: cert.color }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.starYellow;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = cert.color;
                    }}
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats - Neumorphism - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {[
            { number: "12+", label: "Certifications", icon: Award },
            { number: "3", label: "Cloud Platforms", icon: Shield },
            { number: "5+", label: "Years Experience", icon: Star },
            { number: "100%", label: "Valid Certificates", icon: CheckCircle },
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

        {/* Additional info section - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base"
            style={{
              backgroundColor: colors.neumorphBase,
              boxShadow: `10px 10px 20px ${colors.neumorphDark}, -10px -10px 20px ${colors.neumorphLight}`,
            }}
          >
            <Shield
              size={16}
              className="sm:w-[18px] sm:h-[18px] mr-2"
              style={{ color: colors.starYellow }}
            />
            <span style={{ color: colors.textMuted }}>
              All certificates are verified and up-to-date
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};