import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  Sun, 
  Moon, 
  MoreVertical,
  X, 
  Code, 
  User, 
  Briefcase, 
  Mail, 
  Zap,
  Home,
  ChevronRight,
  Settings,
  Download,
  ExternalLink,
  Circle,
  Dot
} from 'lucide-react';

const CompactSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home, id: 'hero', color: 'from-blue-500 to-cyan-500' },
    { name: 'About', href: '#about', icon: User, id: 'about', color: 'from-purple-500 to-pink-500' },
    { name: 'Skills', href: '#skills', icon: Zap, id: 'skills', color: 'from-yellow-500 to-orange-500' },
    { name: 'Projects', href: '#projects', icon: Code, id: 'projects', color: 'from-green-500 to-emerald-500' },
    { name: 'Experience', href: '#experience', icon: Briefcase, id: 'experience', color: 'from-indigo-500 to-purple-500' },
    { name: 'Contact', href: '#contact', icon: Mail, id: 'contact', color: 'from-red-500 to-pink-500' },
  ];

  const quickActions = [
    { name: 'Download CV', icon: Download, action: () => console.log('Download CV') },
    { name: 'View GitHub', icon: ExternalLink, action: () => window.open('https://github.com/tamaraiselva', '_blank') },
    { name: 'Settings', icon: Settings, action: () => console.log('Settings') },
  ];

  const scrollToSection = (href, id) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    setIsExpanded(false);
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Compact Sidebar Container */}
      <motion.div
        className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 ${
          isExpanded ? 'w-80' : 'w-16'
        }`}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {/* Main Sidebar */}
        <motion.div
          className={`relative glass-effect rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ${
            isExpanded ? 'h-auto' : 'h-16'
          }`}
          layout
        >
          {/* Three-Dot Menu Button */}
          <motion.button
            onClick={toggleSidebar}
            className={`w-16 h-16 flex items-center justify-center relative group ${
              isExpanded ? 'absolute top-0 right-0 z-10' : 'w-full'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Three Dots with Animation */}
            <div className="relative flex flex-col items-center justify-center space-y-1">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  animate={{
                    scale: isExpanded ? [1, 1.2, 1] : 1,
                    opacity: isExpanded ? [1, 0.7, 1] : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    repeat: isExpanded ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                />
              ))}
            </div>

            {/* Active Section Indicator */}
            {!isExpanded && (
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white border-gray-900"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
              />
            )}
          </motion.button>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="p-6 pt-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="mb-6">
                  <motion.h3
                    className="text-lg font-bold text-gray-300 mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Quick Navigation
                  </motion.h3>
                  <motion.p
                    className="text-xs text-gray-500 text-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Jump to any section
                  </motion.p>
                </div>

                {/* Navigation Items */}
                <div className="space-y-2 mb-6">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.href, item.id)}
                        className={`w-full group relative flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30'
                            : 'hover:bg-gray-100/50 hover:bg-gray-800/50'
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Icon */}
                        <div className={`p-2 rounded-lg transition-all duration-300 ${
                          isActive
                            ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                            : 'bg-gray-100 bg-gray-800 group-hover:bg-purple-100 group-hover:bg-purple-900/30'
                        }`}>
                          <item.icon size={14} />
                        </div>

                        {/* Label */}
                        <span className={`text-sm font-medium transition-colors flex-1 text-left ${
                          isActive
                            ? 'text-purple-600 text-purple-400'
                            : 'text-gray-700 text-gray-300'
                        }`}>
                          {item.name}
                        </span>

                        {/* Arrow */}
                        <motion.div
                          className={`transition-all duration-300 ${
                            isActive ? 'text-purple-500' : 'text-gray-200 group-hover:text-purple-500'
                          }`}
                          animate={{ x: isActive ? 0 : -5 }}
                        >
                          <ChevronRight size={12} />
                        </motion.div>

                        {/* Active Indicator */}
                        {isActive && (
                          <motion.div
                            className="absolute left-0 top-1/2 w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-r-full"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.3 }}
                            style={{ transformOrigin: 'center' }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Quick Actions */}
                <div className="border-t border-white/10 border-gray-700/50 pt-4 space-y-2">
                  <motion.h4
                    className="text-xs font-semibold text-gray-500 text-gray-200 uppercase tracking-wider mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Quick Actions
                  </motion.h4>
                  
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action.name}
                      onClick={action.action}
                      className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100/50 hover:bg-gray-800/50 transition-colors group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <action.icon size={14} className="text-gray-500 group-hover:text-purple-500 transition-colors" />
                      <span className="text-xs text-gray-200 text-gray-200 group-hover:text-gray-200 group-hover:text-gray-200">
                        {action.name}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Theme Toggle */}
                <div className="border-t border-white/10 border-gray-700/50 pt-4 mt-4">
                  <motion.button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100/50 hover:bg-gray-800/50 transition-colors group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        {isDark ? <Sun size={14} /> : <Moon size={14} />}
                      </div>
                      <span className="text-sm font-medium text-gray-700 text-gray-300">
                        {isDark ? 'Light Mode' : 'Dark Mode'}
                      </span>
                    </div>
                    <div className="w-8 h-4 bg-gray-400 bg-gray-700 rounded-full relative transition-colors">
                      <motion.div
                        className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full absolute top-0.5"
                        animate={{ x: isDark ? 18 : 2 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.button>
                </div>

                {/* Status */}
                <motion.div
                  className="mt-4 flex items-center justify-center space-x-2 text-xs text-gray-500 text-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for work</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Floating Progress Indicator */}
        {!isExpanded && (
          <motion.div
            className="absolute -left-12 top-1/2 transform -translate-y-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.div
                    key={item.id}
                    className={`w-1 h-6 rounded-full transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-b ${item.color} shadow-lg`
                        : 'bg-gray-300 bg-gray-400'
                    }`}
                    animate={{ scale: isActive ? 1.2 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                );
              })}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CompactSidebar;