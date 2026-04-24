import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const experiences = [
    {
      id: 1,
      company: "DigiCovAI Private Limited",
      position: "Junior AI Developer (AI Automation Engineer)",
      period: "Mar 2026 - Present",
      description:
        "Design and develop AI-powered voice agents integrated with business workflows using Vapi and Retell. Engineer advanced webhook integrations for automated capture and analysis of call transcripts. Build end-to-call automation workflows with sophisticated payload mapping across Make.com and Airtable platforms. Reduced manual data entry by 70% through automation workflows.",
      technologies: ["Vapi", "Retell", "Python", "Airtable", "Make.com"],
      isLatest: true,
    },
    {
      id: 2,
      company: "DigiCovAI Private Limited",
      position: "Automation Engineer Intern",
      period: "Oct 2025 - Feb 2026",
      description:
        "Implemented innovative voice AI solutions blending NLP and automation. Developed and tested AI automation workflows using Vapi, n8n, and Make.com. Gained hands-on experience with BERT language models and AI automation tools.",
      technologies: ["n8n", "BERT", "Vapi", "Make.com"],
      isLatest: false,
    },
    {
      id: 3,
      company: "Swayaan Digital Solutions Pvt Limited",
      position: "Associate Software Engineer",
      period: "May 2024 - Oct 2025",
      description:
        "Developed an end-to-end HR Recruiter AI solution leveraging generative AI and NLP for automated resume screening. Architected scalable FastAPI backend services integrated with MongoDB and MySQL. Reduced resume screening time by 60% and improved matching accuracy by 35%.",
      technologies: ["FastAPI", "Generative AI", "MongoDB", "MySQL", "NLP"],
      isLatest: false,
    },
    {
      id: 4,
      company: "Xplore IT Corp",
      position: "Data Scientist Intern",
      period: "Sep 2023 - Nov 2023",
      description:
        "Applied ML concepts including supervised and unsupervised learning on real-world datasets. Built and evaluated machine learning models for classification and regression tasks.",
      technologies: ["Python", "Machine Learning", "Git", "Data Science"],
      isLatest: false,
    },
  ];

  return (
    <div className="py-20 relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section id="experience">
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
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium mb-4"
              >
                Career Journey
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-gray-300 mb-6"
              >
                Work Experience
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-200 text-gray-300 max-w-3xl mx-auto"
              >
                My professional journey designing and deploying intelligent systems,
                reducing manual effort through automation, and building scalable
                AI-driven solutions.
              </motion.p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>

              {/* Experience Cards */}
              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <ExperienceCard
                    key={experience.id}
                    experience={experience}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="education" className="min-h-screen pt-20">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-300 mb-12">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                degree: "B.E. Computer Science Engineering",
                field: "",
                school: "Government College of Engineering, Bargur",
                year: "2023 Graduated",
                grade: "8.5 CGPA",
              },
              {
                degree: "Diploma in Electronics & Communication",
                field: "",
                school: "Kongu Polytechnic College, Erode",
                year: "2017 Graduated",
                grade: "92%",
              },
            ].map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 1.2 + index * 0.1 }}
                className="glass-effect rounded-2xl p-6 hover:glow-effect transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">
                      {edu.grade}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{edu.degree}</h4>
                  <p className="text-gray-200 text-gray-300 text-sm mb-2">
                    {edu.school}
                  </p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ExperienceSection;
