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
    setIsMobileMenuOpen(false);
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
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-transparent backdrop-blur-md  text-white shadow-lg lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Desktop Sidebar - Keep as is */}
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

      {/* Mobile Menu - Glass effect */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Glass Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-72 bg-white/10 backdrop-blur-xl border-l border-white/20 z-40 lg:hidden"
            >
              <div className="h-full flex flex-col pt-20 px-6 pb-6">
                {/* Title */}
                <h2 className="text-white/80 text-sm font-medium mb-6 px-4">MENU</h2>
                
                {/* Navigation Pills */}
                <div className="flex-1 space-y-2">
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                        className={`w-full flex items-center gap-4 px-6 py-4 rounded-full transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-red-500 to-purple-500 text-white shadow-lg'
                            : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                        }`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.label}</span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white/40 text-xs text-center">
                    © 2025 Faiz Tanzeel Portfolio
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};