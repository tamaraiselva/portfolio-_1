import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SkillCard from './SkillCard';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "FastAPI", level: 90, icon: "⚡" },
        { name: "Streamlit", level: 85, icon: "📈" },
        { name: "C++", level: 80, icon: "💻" },
        { name: "Next.js", level: 75, icon: "⚛️" },
      ]
    },
    {
      title: "AI/ML Platforms",
      skills: [
        { name: "Generative AI", level: 92, icon: "🤖" },
        { name: "Deep Learning", level: 88, icon: "🧠" },
        { name: "NLP (BERT)", level: 90, icon: "📝" },
        { name: "Vapi / Retell", level: 85, icon: "🎙️" },
        { name: "n8n / Make", level: 80, icon: "⚙️" },
      ]
    },
    {
      title: "Data & Databases",
      skills: [
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "MySQL", level: 80, icon: "🛢️" },
        { name: "REST API", level: 90, icon: "🌐" },
        { name: "Tesseract OCR", level: 85, icon: "🔍" },
        { name: "Git", level: 90, icon: "📚" },
      ]
    }
  ];

  return (
    <section id="skills" className="pt-10 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium mb-4"
            >
              My Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-300 mb-6"
            >
              Technical Skills
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-200 text-gray-300 max-w-3xl mx-auto"
            >
              A comprehensive toolkit of modern technologies and frameworks that enable me to build 
              exceptional digital experiences from concept to deployment.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.5 + categoryIndex * 0.2, duration: 0.8 }}
                className="glass-effect rounded-3xl p-8 hover:glow-effect transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-6 text-center text-gray-300">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      delay={0.7 + categoryIndex * 0.2 + skillIndex * 0.1}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-center"
          >
            <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-300">Always Learning</h3>
              <p className="text-gray-200 text-gray-300 leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of web development. My passion 
                for learning ensures that I can tackle any challenge with the most effective and 
                modern solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;