import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Filter } from "lucide-react";
import imgResume from "../../assets/images/project_resume.png";
import imgSql from "../../assets/images/project_sql.png";
import imgInvoice from "../../assets/images/project_invoice.png";
import imgPdfChat from "../../assets/images/project_pdfchat.png";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Resume Matcher",
      description:
        "Intelligent Resume-to-JD Matching System using BERT and Sentence Transformers for semantic alignment.",
      image: imgResume,
      technologies: ["Python", "BERT", "Streamlit", "Transformers"],
      category: "AI/ML",
      liveUrl: "#",
      githubUrl: "https://github.com/tamaraiselva",
    },
    {
      id: 2,
      title: "Text-to-SQL Generator",
      description:
        "NLP-powered tool converting natural language questions into executable SQL queries using Google Gemini AI.",
      image: imgSql,
      technologies: ["FastAPI", "Google Gemini AI", "Python", "SQL"],
      category: "Generative AI",
      liveUrl: "#",
      githubUrl: "https://github.com/tamaraiselva",
    },
    {
      id: 3,
      title: "PDF Invoice Parser",
      description:
        "OCR-based invoice data extraction pipeline leveraging Tesseract and Hugging Face models.",
      image: imgInvoice,
      technologies: ["Tesseract", "Hugging Face", "Python", "OCR"],
      category: "Automation",
      liveUrl: "#",
      githubUrl: "https://github.com/tamaraiselva",
    },
    {
      id: 4,
      title: "Chat with PDF",
      description:
        "Conversational document search interface using NLP embeddings and semantic retrieval for Q&A.",
      image: imgPdfChat,
      technologies: ["NLP", "Embeddings", "Python", "FastAPI"],
      category: "Generative AI",
      liveUrl: "#",
      githubUrl: "https://github.com/tamaraiselva",
    },
  ];

  const categories = ["All", "AI/ML", "Generative AI", "Automation"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
              My Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-300 mb-6"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-200 text-gray-300 max-w-3xl mx-auto"
            >
              A showcase of my latest work, featuring modern web applications
              and websites built with cutting-edge technologies and innovative
              design approaches.
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Filter className="w-5 h-5 text-gray-500 self-center mr-2" />
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "glass-effect hover:glow-effect"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1 }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/tamaraiselva?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 glass-effect rounded-full font-semibold hover:glow-effect transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
