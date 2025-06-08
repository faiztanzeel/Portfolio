import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, FileText, Wrench, Award, Briefcase, BookOpen, Mail } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'publications', label: 'Publications', icon: BookOpen },
  { id: 'contact', label: 'Contact', icon: Mail }
];

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionClick }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close sidebar on navigation
  const handleClick = (section: string) => {
    onSectionClick(section);
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  // Lock body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Hamburger Button (Mobile Only) */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-xl bg-transparent text-white shadow-md lg:hidden"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed left-6 top-1/2 transform -translate-y-1/2 z-50 flex-col space-y-3">
        {navigationItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isHovered = hoveredItem === item.id;

          return (
            <motion.div
              key={item.id}
              className="relative flex items-center"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <motion.button
                onClick={() => handleClick(item.id)}
                className={`relative flex items-center justify-center rounded-full backdrop-blur-xl border shadow-lg overflow-hidden transition-colors duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-red-500/90 to-purple-500/90 text-white border-red-400/50 shadow-black'
                    : 'bg-gray-900/80 text-gray-400 hover:text-white border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/90'
                }`}
                layout
                transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
                style={{
                  minWidth: isHovered ? 140 : 56,
                  height: 56,
                  paddingLeft: isHovered ? 20 : 0,
                  paddingRight: isHovered ? 20 : 0,
                }}
              >
                <motion.div layout className="flex items-center">
                  <Icon size={22} />
                  <AnimatePresence>
                    {isHovered && (
                      <motion.span
                        key="label"
                        initial={{ opacity: 0, marginLeft: 0, width: 0 }}
                        animate={{ opacity: 1, marginLeft: 12, width: 'auto' }}
                        exit={{ opacity: 0, marginLeft: 0, width: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden whitespace-nowrap text-sm font-medium"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -250, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-64 bg-gray-900/95 p-6 z-40 border-r border-gray-700 flex flex-col space-y-5 backdrop-blur-xl lg:hidden"
          >
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300 text-left ${
                    isActive
                      ? 'bg-gradient-to-r from-red-500/90 to-purple-500/90 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Icon size={22} />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
