import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Star } from 'lucide-react';

const ExperienceCard = ({ experience, index, isInView }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-white border-gray-900 z-10">
        {experience.isLatest && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
        <motion.div
          className="glass-effect rounded-3xl p-8 hover:glow-effect transition-all duration-300"
          whileHover={{ y: -5, scale: 1.02 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1 text-gray-300">{experience.position}</h3>
              <h4 className="text-lg font-semibold text-gray-200 mb-2">
                {experience.company}
              </h4>
            </div>
            {experience.isLatest && (
              <motion.div
                className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-3 h-3" />
                <span>Current</span>
              </motion.div>
            )}
          </div>

          {/* Period */}
          <div className="flex items-center  text-gray-200 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{experience.period}</span>
          </div>

          {/* Description */}
          <p className=" text-gray-400 mb-6 leading-relaxed">
            {experience.description}
          </p>

          {/* Technologies */}
          <div className="space-y-2">
            <h5 className="text-sm font-semibold text-gray-200">Technologies Used:</h5>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.7 + index * 0.2 + techIndex * 0.05 }}
                  className="px-3 py-1 text-xs bg-purple-100 bg-purple-900/30 text-purple-600 text-purple-400 rounded-full font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;