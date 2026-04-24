import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
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
  GraduationCap,
  FolderOpen,
  Download,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  Award,
} from "lucide-react";
import profileImage from "../../assets/images/TAMARAI_SELVAN.jpg";
import logo from '../../assets/images/logo-removebg-preview.png';

const ModernSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "education",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero", icon: Home, id: "hero" },
    { name: "About", href: "#about", icon: User, id: "about" },
    { name: "Skills", href: "#skills", icon: Zap, id: "skills" },
    { name: "Projects", href: "#projects", icon: FolderOpen, id: "projects" },
    {
      name: "Experience",
      href: "#experience",
      icon: Briefcase,
      id: "experience",
    },
    {
      name: "Education",
      href: "#education",
      icon: GraduationCap,
      id: "education",
    },
    { name: "Contact", href: "#contact", icon: Mail, id: "contact" },
  ];

  const scrollToSection = (href, id) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Header */}
      <motion.header
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div >
              <img src={logo} alt="Logo" width={40} height={40} className="" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Tamarai Selvan Ravi</h1>
              <p className="text-xs text-gray-200">AI/ML Engineer & Python Developer</p>
            </div>
          </motion.div>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-2">
            <motion.button
              onClick={toggleSidebar}
              className="p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:bg-gray-700/50 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isSidebarOpen ? (
                <X size={18} className="text-red-400" />
              ) : (
                <Menu size={18} className="text-cyan-400" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Desktop Sidebar */}
      <motion.aside
        className={`hidden lg:flex fixed left-0 top-0 h-screen w-80 bg-gray-900/95 backdrop-blur-xl border-r border-gray-800 z-40 flex-col`}
        initial={{ x: -320 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Profile Section */}
        <div className="p-8 border-b border-gray-800">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Profile Image */}
            <div className="relative mx-auto mb-6 w-40 h-40">
              <motion.div
                className="absolute inset-0 rounded-full "
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img
                    src={profileImage}
                    alt="Tamarai Selvan Ravi"
                    className="w-full h-full object-cover object-[center_15%]" // Adjusts focus for better headroom
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute inset-0 rounded-full "
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.4, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            {/* Name and Title */}
            <motion.h1
              className="text-2xl font-bold text-white mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Tamarai Selvan Ravi
            </motion.h1>
            <motion.p
              className="text-cyan-400 font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              AI/ML Engineer & Python Developer
            </motion.p>
            {/* Status */}
            <motion.div
              className="flex items-center justify-center space-x-2 text-sm text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for work</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto scrollbar-hide">
          <div className="space-y-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.href, item.id)}
                  className={`w-full group relative flex items-center space-x-4 p-3 rounded-xl transition-all duration-300 ${isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400"
                    : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                    }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-r-full"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: "center" }}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className={`p-2 rounded-lg transition-all duration-300 ${isActive
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                      : "bg-gray-800 group-hover:bg-gray-700"
                      }`}
                  >
                    <item.icon size={18} />
                  </div>

                  {/* Label */}
                  <span className="font-medium">{item.name}</span>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>
              );
            })}
          </div>
        </nav>
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>


            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
            />


            {/* Mobile Sidebar */}
            <motion.div
              className="lg:hidden fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-r border-gray-800 z-50 overflow-y-auto"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Mobile Profile Section */}
              <div className="p-6 pt-20 border-b border-gray-800">
                <div className="text-center">
                  {/* Profile Image */}
                  <div className="relative mx-auto mb-6 w-40 h-40">
                    <motion.div
                      className="absolute inset-0 rounded-full  p-1"
                      transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                        <img
                          src={profileImage}
                          alt="Tamarai Selvan Ravi"
                          className="w-full h-full object-cover object-[center_15%]" // Adjusts focus for better headroom
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 rounded-full "
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.4, 0.5],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>

                  <h1 className="text-xl font-bold text-white mb-1">
                    Tamarai Selvan Ravi
                  </h1>
                  <p className="text-cyan-400 font-medium mb-3">
                    AI/ML Engineer & Python Developer
                  </p>

                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Available for work</span>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="p-4">
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;

                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.href, item.id)}
                        className={`w-full group relative flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${isActive
                          ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400"
                          : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                          }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div
                          className={`p-2 rounded-lg transition-all duration-300 ${isActive
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                            : "bg-gray-800 group-hover:bg-gray-700"
                            }`}
                        >
                          <item.icon size={16} />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </nav>

              {/* Mobile Footer */}
              <div className="p-4 border-t border-gray-800 space-y-3">
                {/* <button className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium">
                  <Download size={16} />
                  <span>Download CV</span>
                </button> */}

                <div className="flex space-x-3">
                  <a
                    href="https://github.com/tamaraiselva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-lg bg-gray-800/50 flex items-center justify-center"
                  >
                    <Github size={18} className="text-gray-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tamarai-selvan-ravi-6b5311213/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-lg bg-gray-800/50 flex items-center justify-center"
                  >
                    <Linkedin size={18} className="text-gray-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Wrapper */}
      <div className="lg:ml-80 min-h-[75%]">{/* Content goes here */}</div>
    </>
  );
};

export default ModernSidebar;
