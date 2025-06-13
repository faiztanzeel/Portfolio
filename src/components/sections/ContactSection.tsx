import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Terminal,
  Code2,
} from "lucide-react";
import LetterGlitch from "../LetterGlitch";
import emailjs from '@emailjs/browser';
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export const ContactSection: React.FC = () => {
  // ALL STATE VARIABLES MUST BE INSIDE THE COMPONENT
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = "// Let's create something extraordinary together";
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("jyJ4USuluk2htbLBa"); 
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (isTyping && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (typedText.length === fullText.length) {
      setTimeout(() => {
        setIsTyping(false);
      }, 1000);
    }
  }, [typedText, isTyping, fullText]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'tanzeelfaiz@gmail.com',
      };

      await emailjs.send(
        'service_qr1z0yp',
        'template_3a4eqdr',
        templateParams
      );

      setStatusMessage('Message sent successfully! 🚀');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tanzeelfaiz@gmail.com",
      href: "mailto:tanzeelfaiz@gmail.com",
      code: "const email = ",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8876260524",
      href: "tel:+918876260524",
      code: "const phone = ",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gurugram, India",
      href: "https://www.google.com/maps/place/Gurugram,+Haryana,+India/@28.4231877,76.8478681,11z",
      code: "const location = ",
      color: "from-orange-500 to-red-500",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/faiztanzeel", label: "GitHub", color: "#6e5494" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/faiztanzeelansari/", label: "LinkedIn", color: "#0077b5" },
    { icon: SiLeetcode, href: "https://www.linkedin.com/in/faiztanzeelansari/", label: "LeetCode", color: "#1da1f2" },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-6 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Glitch Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <LetterGlitch
            glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
            glitchSpeed={50}
            centerVignette={false}
            outerVignette={false}
            smooth={true}
          />
        </div>
      </div>

      {/* Top fade to black gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none" 
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.3) 25%, transparent 40%)'
        }}
      />

      {/* Bottom subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Let's </span>
            <motion.span
              className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 100%" }}
            >
              Create
            </motion.span>
            <span className="text-white"> Together</span>
          </h2>

          {/* Typing animation */}
          <div className="font-mono text-gray-400 text-lg h-8">
            {typedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="ml-1"
            >
              |
            </motion.span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Form - Enhanced with code editor style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div
              className="relative p-8 md:p-10 rounded-3xl overflow-hidden backdrop-blur-sm"
              style={{
                background: "linear-gradient(145deg, rgba(26,26,26,0.9), rgba(15,15,15,0.9))",
                boxShadow: "20px 20px 60px #0a0a0a, -20px -20px 60px #1f1f1f",
              }}
            >
              {/* Code editor header */}
              <div className="flex items-center gap-2 mb-8 pb-4 border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-500 text-sm font-mono">
                    message.tsx
                  </span>
                </div>
                <Terminal className="w-4 h-4 text-gray-500" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-mono text-purple-400 mb-3"
                    >
                      <span className="text-gray-500">const</span> name =
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 rounded-2xl text-white placeholder-gray-600 focus:outline-none transition-all duration-300 font-mono backdrop-blur-sm"
                        style={{
                          background: "rgba(26,26,26,0.8)",
                          boxShadow:
                            "inset 6px 6px 12px #0f0f0f, inset -6px -6px 12px #252525",
                        }}
                        placeholder='"Your Name"'
                      />
                      <Code2 className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-purple-400 transition-colors" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-mono text-cyan-400 mb-3"
                    >
                      <span className="text-gray-500">const</span> email =
                    </label>
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 rounded-2xl text-white placeholder-gray-600 focus:outline-none transition-all duration-300 font-mono backdrop-blur-sm"
                        style={{
                          background: "rgba(26,26,26,0.8)",
                          boxShadow:
                            "inset 6px 6px 12px #0f0f0f, inset -6px -6px 12px #252525",
                        }}
                        placeholder='"user@email.com"'
                      />
                                           <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-cyan-400 transition-colors" />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="subject"
                    className="block text-sm font-mono text-pink-400 mb-3"
                  >
                    <span className="text-gray-500">const</span> subject =
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl text-white placeholder-gray-600 focus:outline-none transition-all duration-300 font-mono backdrop-blur-sm"
                    style={{
                      background: "rgba(26,26,26,0.8)",
                      boxShadow:
                        "inset 6px 6px 12px #0f0f0f, inset -6px -6px 12px #252525",
                    }}
                    placeholder='"Amazing Project Idea"'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-mono text-green-400 mb-3"
                  >
                    <span className="text-gray-500">const</span> message =
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 rounded-2xl text-white placeholder-gray-600 focus:outline-none transition-all duration-300 resize-none font-mono backdrop-blur-sm"
                      style={{
                        background: "rgba(26,26,26,0.8)",
                        boxShadow:
                          "inset 6px 6px 12px #0f0f0f, inset -6px -6px 12px #252525",
                      }}
                      placeholder={`"I have this incredible idea..."`}
                    />
                    <div className="absolute bottom-4 right-4 text-xs text-gray-600 font-mono">
                      {formData.message.length}/500
                    </div>
                  </div>
                </motion.div>

               <motion.button
  type="submit"
  disabled={isLoading} // Add this
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="relative w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-white overflow-hidden group backdrop-blur-sm"
  style={{
    background: "linear-gradient(145deg, rgba(26,26,26,0.9), rgba(15,15,15,0.9))",
    boxShadow: "8px 8px 16px #0a0a0a, -8px -8px 16px #2a2a2a",
  }}
>
  {/* Animated gradient background */}
  <motion.div
    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    style={{
      background:
        "linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899, #6366f1)",
      backgroundSize: "300% 300%",
    }}
    animate={{
      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  <span className="relative z-10 font-mono">
    {isLoading ? 'sending...' : 'sendMessage()'}
  </span>
  <Send className={`relative z-10 w-5 h-5 ${
    isLoading ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'
  } transition-transform`} />
</motion.button>
              </form>

              {/* Decorative code snippet */}
             {/* Decorative code snippet */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.7, duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-6 p-4 rounded-lg bg-black/30 font-mono text-xs backdrop-blur-sm"
>
  <span className="text-gray-500">// Response</span>
  <br />
  <span className="text-green-400">console</span>
  <span className="text-white">.</span>
  <span className="text-yellow-400">log</span>
  <span className="text-white">(</span>
  <span className={statusMessage.includes('successfully') ? 'text-green-400' : 'text-cyan-400'}>
    "{statusMessage || 'Waiting for message...'}"
  </span>
  <span className="text-white">);</span>
</motion.div>
            </div>
          </motion.div>

          {/* Contact Information - Creative Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Creative contact cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    onMouseEnter={() => setHoveredCard(info.label)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative block p-6 rounded-2xl transition-all duration-300 group overflow-hidden backdrop-blur-sm"
                    style={{
                      background:
                        hoveredCard === info.label
                          ? "linear-gradient(145deg, rgba(42,42,42,0.9), rgba(26,26,26,0.9))"
                          : "linear-gradient(145deg, rgba(26,26,26,0.9), rgba(15,15,15,0.9))",
                      boxShadow:
                        "10px 10px 20px #0a0a0a, -10px -10px 20px #1f1f1f",
                    }}
                  >
                    {/* Animated background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    <div className="relative flex items-center gap-4">
                      <div
                        className={`relative w-14 h-14 rounded-xl flex items-center justify-center`}
                      >
                        {/* Rotating border */}
                        <motion.div
                          className={`absolute inset-0 rounded-xl bg-gradient-to-r ${info.color}`}
                          animate={
                            hoveredCard === info.label ? { rotate: 360 } : {}
                          }
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        <div className="absolute inset-[2px] rounded-xl bg-[#1a1a1a]" />
                        <Icon className="relative z-10 text-white" size={24} />
                      </div>

                      <div className="flex-1">
                        <p className="text-xs font-mono text-gray-500 mb-1">
                          {info.code}
                          <span className="text-purple-400">"</span>
                        </p>
                        <p className="text-white font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                          {info.value}
                          <span className="text-purple-400">"</span>
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links - Floating orbs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-8 md:gap-12 py-8"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="relative group"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Crystal container */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24">
                      {/* Outer glow ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `radial-gradient(circle, ${social.color}20 0%, transparent 70%)`,
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />

                      {/* Crystal facets - top layer */}
                      <div
                        className="absolute inset-0 rounded-full overflow-hidden backdrop-blur-sm"
                        style={{
                          background: `linear-gradient(135deg, ${social.color}15 0%, transparent 50%, ${social.color}10 100%)`,
                          boxShadow: `
                inset 0 -2px 6px rgba(0,0,0,0.3),
                inset 0 2px 6px rgba(255,255,255,0.1),
                0 0 20px ${social.color}20
              `,
                        }}
                      >
                        {/* Inner crystal shine */}
                        <motion.div
                          className="absolute inset-2 rounded-full"
                          style={{
                            background: `linear-gradient(45deg, transparent 30%, ${social.color}30 50%, transparent 70%)`,
                          }}
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </div>

                      {/* Main crystal body */}
                      <motion.div
                        className="absolute inset-0 rounded-full flex items-center justify-center backdrop-blur-sm"
                        style={{
                          background:
                            "linear-gradient(145deg, rgba(26,26,26,0.9), rgba(15,15,15,0.9))",
                          boxShadow: `
                8px 8px 16px #0a0a0a,
                -8px -8px 16px #1f1f1f,
                inset 2px 2px 4px #252525,
                inset -2px -2px 4px #0a0a0a
              `,
                        }}
                        whileHover={{
                          boxShadow: `
                8px 8px 20px #0a0a0a,
                -8px -8px 20px #1f1f1f,
                inset 2px 2px 4px #252525,
                inset -2px -2px 4px #0a0a0a,
                0 0 30px ${social.color}40
              `,
                        }}
                      >
                        {/* Icon */}
                        <Icon
                          className="relative z-10 text-gray-400 group-hover:text-white transition-all duration-300"
                          size={28}
                        />

                        {/* Crystal refraction effect */}
                        <motion.div
                          className="absolute top-2 right-2 w-3 h-3 rounded-full bg-white/10"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        />
                      </motion.div>

                      {/* Orbiting particle */}
                      <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.5,
                        }}
                      >
                        <div
                          className="absolute w-2 h-2 rounded-full -top-1 left-1/2 -translate-x-1/2"
                          style={{
                            backgroundColor: social.color,
                            boxShadow: `0 0 10px ${social.color}`,
                          }}
                        />
                                          </motion.div>

                      {/* Hover label */}
                      <motion.span
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-400 whitespace-nowrap"
                        initial={{ opacity: 0, y: -10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                      >
                        {social.label}
                      </motion.span>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Status Card - Interactive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl overflow-hidden group cursor-pointer backdrop-blur-sm"
              style={{
                background: "linear-gradient(145deg, rgba(26,26,26,0.9), rgba(15,15,15,0.9))",
                boxShadow: "10px 10px 20px #0a0a0a, -10px -10px 20px #1f1f1f",
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Matrix rain effect background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-green-500/20 font-mono text-xs"
                    style={{ left: `${i * 10}%` }}
                    initial={{ y: -20 }}
                    animate={{ y: "100%" }}
                    transition={{
                      duration: Math.random() * 2 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "linear",
                    }}
                  >
                    {Math.random() > 0.5 ? "1" : "0"}
                  </motion.div>
                ))}
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Open for Opportunities
                  </h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed font-mono">
                  <span className="text-green-400">status</span>
                  <span className="text-white">:</span>
                  <span className="text-cyan-400">
                    {" "}
                    "Creating & Innovating"
                  </span>
                </p>
                <p className="text-gray-500 text-xs mt-2 font-mono">
                  // Available for freelance & full-time
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        input:focus,
        textarea:focus {
          box-shadow: inset 4px 4px 8px #0f0f0f, inset -4px -4px 8px #252525,
            0 0 0 2px rgba(139, 92, 246, 0.3);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, rgb(63, 52, 34), #8b5cf6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #8b5cf6, #ec4899);
        }

        /* Neon glow effect */
        .neon-glow {
          text-shadow: 0 0 10px currentColor, 0 0 20px currentColor,
            0 0 30px currentColor, 0 0 40px currentColor;
        }

        /* Matrix rain for background */
        @keyframes matrix-fall {
          to {
            transform: translateY(100vh);
          }
        }

        /* Breathing animation for buttons */
        @keyframes breathe {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
};