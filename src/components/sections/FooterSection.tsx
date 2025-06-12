import React from 'react';
import { motion } from 'framer-motion';

const FooterSection: React.FC = () => {
  return (
    <footer className="relative bg-black py-12 px-6 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />
      
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-purple-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto text-center space-y-3 relative">
        {/* Made with love */}
        <motion.p 
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Made with <span className="text-red-500 text-xl">♥</span>
        </motion.p>
        
        {/* Copyright with hover effect */}
        <motion.p 
          className="text-xs text-gray-500 tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          © 2025{' '}
          <span className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
            Faiz Tanzeel Ansari
          </span>
          . All rights reserved.
        </motion.p>
        
        {/* Optional: Add a subtle code snippet */}
        <motion.div 
          className="text-[10px] text-gray-700 font-mono mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {'</> with passion'}
        </motion.div>
      </div>
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </footer>
  );
};

export default FooterSection;