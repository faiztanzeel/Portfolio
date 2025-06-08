import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import ProfileCard from "../ProfileCard";
import Balatro from "../BalatroBackground";

export const HomeSection: React.FC = () => {
  const socialLinks = [
    "https://github.com/your-github",
    "https://linkedin.com/in/your-linkedin",
    "mailto:your.email@example.com",
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black text-white px-6"
    >
      {/* Background glitch effect */}
      <div className="absolute inset-0 z-0">
        <Balatro isRotate={false} mouseInteraction={true} pixelFilter={1390} />
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-6xl w-full gap-8 lg:gap-20">
        
        {/* Mobile First: Show ProfileCard on top for small screens only */}
        <div className="block lg:hidden w-full flex justify-center">
          <ProfileCard
            name="Faiz Tanzeel"
            title="Full Stack Developer"
            handle="tanzeelfaiz"
            status="Available"
            contactText="Contact Me"
            avatarUrl="/images/profile-img-removebg-preview.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => alert("Contact clicked!")}
          />
        </div>

        {/* Left content: text + buttons */}
        <div className="flex-1 text-center relative">
          {/* Shadow cloak behind text */}
          <div className="absolute inset-0 z-[-1] pointer-events-none">
            <div className="w-full h-full bg-black/60 rounded-8xl blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                Faiz Tanzeel
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-3xl text-gray-200 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Frontend Developer passionate about creating beautiful, functional
              digital experiences that make a difference.
            </motion.p>

            <motion.div
              className="flex flex-col justify-center sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => {
                  console.log("View My Work clicked");
                }}
              >
                View My Work
              </motion.button>

              <motion.a
                href="/Faiz_Tanzeel_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800/50 transition-colors duration-300 text-center"
                download
              >
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              className="flex space-x-4 sm:space-x-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {socialLinks.map((url) => (
                <motion.div
                  key={url}
                  whileHover={{ scale: 1.4, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-transform duration-300"
                >
                  <SocialIcon
                    url={url}
                    fgColor="#ffffff"
                    bgColor="transparent"
                    style={{ height: 60, width: 60 }}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop only ProfileCard */}
        <div className="hidden lg:block flex-shrink-0">
          <ProfileCard
            name="Faiz Tanzeel"
            title="Frontend Developer"
            handle="tanzeelfaiz"
            status="Available"
            contactText="Contact Me"
            avatarUrl="/images/profile-img-removebg-preview.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => alert("Contact clicked!")}
          />
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 right-90"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-gray-400" size={28} />
      </motion.div>
    </section>
  );
};
