import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Code, 
  User, 
  Briefcase, 
  Mail, 
  Zap,
  Home,
  ChevronRight,
  Settings
} from 'lucide-react';
import logo from  '../../assets/images/logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
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
    { name: 'Home', href: '#hero', icon: Home, id: 'hero' },
    { name: 'About', href: '#about', icon: User, id: 'about' },
    { name: 'Skills', href: '#skills', icon: Zap, id: 'skills' },
    { name: 'Projects', href: '#projects', icon: Code, id: 'projects' },
    { name: 'Experience', href: '#experience', icon: Briefcase, id: 'experience' },
    { name: 'Contact', href: '#contact', icon: Mail, id: 'contact' },
  ];

  const scrollToSection = (href, id) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Top Bar with Logo and Menu Toggle */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-effect shadow-lg backdrop-blur-md' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                  <img src={logo} alt="Logo" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-xl blur opacity-30 animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-300">Lakshmi Priyan</h1>
                <p className="text-xs text-gray-500 text-gray-200">Frontend Developer</p>
              </div>
            </motion.div>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-3 rounded-xl glass-effect hover:glow-effect transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun size={20} className="text-yellow-500 group-hover:text-yellow-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon size={20} className="text-purple-600 group-hover:text-purple-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Menu Toggle */}
              <motion.button
                onClick={toggleSidebar}
                className="p-3 rounded-xl glass-effect hover:glow-effect transition-all duration-300 group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle navigation menu"
              >
                <AnimatePresence mode="wait">
                  {isSidebarOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X size={20} className="text-red-500 group-hover:text-red-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu size={20} className="text-gray-700 text-gray-300 group-hover:text-purple-600 group-hover:text-purple-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Active indicator */}
                {isSidebarOpen && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Right Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-45"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 sm:w-96 glass-effect border-l border-white/20 border-gray-700/50 z-50 overflow-hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Sidebar Header */}
              <div className="p-6 border-b border-white/10 border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-300">Navigation</h2>
                    <p className="text-sm text-gray-500 text-gray-200 mt-1">
                      Explore my portfolio
                    </p>
                  </div>
                  <motion.button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="p-6 space-y-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href, item.id)}
                      className={`w-full group relative flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30'
                          : 'hover:bg-gray-100/50 hover:bg-gray-800/50'
                      }`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                            : 'bg-gray-100 bg-gray-800 group-hover:bg-purple-100 group-hover:bg-purple-900/30'
                        }`}>
                          <item.icon size={18} />
                        </div>
                        <div className="text-left">
                          <span className={`font-medium transition-colors ${
                            isActive
                              ? 'text-purple-600 text-purple-400'
                              : 'text-gray-700 text-gray-300'
                          }`}>
                            {item.name}
                          </span>
                        </div>
                      </div>
                      
                      <motion.div
                        className={`transition-all duration-300 ${
                          isActive ? 'text-purple-500' : 'text-gray-200 group-hover:text-purple-500'
                        }`}
                        animate={{ x: isActive ? 0 : -10 }}
                      >
                        <ChevronRight size={16} />
                      </motion.div>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute left-0 top-1/2 w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-r-full"
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

              {/* Sidebar Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 border-gray-700/50">
                <div className="space-y-4">
                  {/* Settings Button */}
                  <motion.button
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100/50 hover:bg-gray-800/50 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Settings size={18} className="text-gray-500 group-hover:text-purple-500 transition-colors" />
                    <span className="text-sm text-gray-200 text-gray-200 group-hover:text-gray-200 group-hover:text-gray-200">
                      Settings
                    </span>
                  </motion.button>

                  {/* Status Indicator */}
                  <div className="flex items-center space-x-2 text-xs text-gray-500 text-gray-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Available for work</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-20 right-4 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-xl"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Quick Navigation Dots (Desktop) */}
      <div className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-30">
        <div className="space-y-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.href, item.id)}
                className={`group relative block w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 scale-125'
                    : 'bg-gray-300 bg-gray-400 hover:bg-purple-400 hover:bg-purple-500'
                }`}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Navigate to ${item.name}`}
              >
                {/* Tooltip */}
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-gray-900 bg-gray-100 text-white text-gray-900 text-xs px-2 py-1 rounded whitespace-nowrap">
                    {item.name}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navigation;