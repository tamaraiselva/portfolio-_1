import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./contexts/ThemeContext";
import ModernSidebar from "./components/Navigation/ModernSidebar";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/About/AboutSection";
import SkillsSection from "./components/Skills/SkillsSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import ContactSection from "./components/Contact/ContactSection";
import DesignShowcase from "./components/UI/DesignShowcase";
import ParticleBackground from "./components/Background/ParticleBackground";
import ScrollProgress from "./components/UI/ScrollProgress";
import "./styles/design-system.css";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const LoadingScreen = () => {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "Looading Portfolio...";

    useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + fullText.charAt(i));
        i++;
        if (i === fullText.length) clearInterval(interval);
      }, 100);
      return () => clearInterval(interval);
    }, []);

    return (
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Ripple animation */}
        <div className="relative w-24 h-24 mb-6">
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute inset-0 rounded-full border-4 border-cyan-400"
              animate={{ scale: [0, 1.4], opacity: [1, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut",
              }}
            />
          ))}
          <div className="absolute inset-4 bg-cyan-400 rounded-full blur-sm opacity-60" />
        </div>

        {/* Typewriter text */}
        <motion.h2
          className="text-xl font-mono tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {displayedText}
        </motion.h2>
      </motion.div>
    );
  };
  return (
    <ThemeProvider>
      <div
        className="relative min-h-screen"
        style={{ background: "var(--neutral-950)", color: "var(--neutral-50)" }}
      >
        <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

        {!isLoading && (
          <>
            <ParticleBackground />
            <ScrollProgress />
            <HeroSection />
            <main className="lg:ml-80">
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ExperienceSection />
              <ContactSection />
            </main>
            <ModernSidebar />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
