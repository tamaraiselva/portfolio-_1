import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Palette, Zap, Heart, Coffee, Rocket } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats = [
    { number: "20+", label: "Technologies", icon: Code2 },
    { number: "15+", label: "Projects", icon: Rocket },
    { number: "2+", label: "Years Experience", icon: Zap },
    { number: "∞", label: "Coffee Cups", icon: Coffee },
  ];

  const skills = [
    "AI/ML Engineering",
    "Generative AI",
    "Voice AI Solutions",
    "Python Backend",
    "FastAPI",
    "NLP (BERT)",
  ];

  return (
    <section id="about" className="pt-20 pb-10 relative overflow-hidden bg-[#0e0e1a]">
      {/* Background glow blobs */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-white/10 text-white backdrop-blur-md"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-6 tracking-tight"
            >
              Engineering Intelligent Systems
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-10 md:gap-4 lg:gap-4 mt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="rounded-2xl p-6 text-center border border-white/10 backdrop-blur-md bg-white/5 shadow-inner shadow-black/30 transition-all hover:scale-[1.03] hover:shadow-purple-500/30 duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <stat.icon className="w-14 h-14 mx-auto mb-2 text-purple-500" />
                    <div className="text-2xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.6 }}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  I'm an AI/ML Engineer and Python Backend Developer with over 2 years 
                  of experience designing and deploying intelligent systems. My expertise 
                  lies in building generative AI applications, voice AI solutions, and 
                  NLP-based automation tools.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.7 }}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  I specialize in building production-ready AI agents, automating complex 
                  workflows, and integrating third-party AI platforms. I have a proven 
                  record of reducing manual effort and improving operational efficiency 
                  through intelligent system design.
                </motion.p>
              </div>

              {/* Skills Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.8 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold flex items-center text-white">
                  <Heart className="w-5 h-5 mr-2 text-red-500" />
                  What I Love Doing
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-black/20 hover:shadow-purple-500/40 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1 }}
                className="pt-6"
              >
                <motion.button
                  className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg shadow-purple-800/30 hover:scale-105 hover:shadow-purple-600/40 transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span>Let's Work Together</span>
                  <Palette className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
