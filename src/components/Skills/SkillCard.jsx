import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, delay, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay, duration: 0.6 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-medium text-gray-200 text-gray-200">
            {skill.name}
          </span>
        </div>
        <span className="text-sm font-bold text-purple-600 text-purple-400">
          {skill.level}%
        </span>
      </div>
      
      <div className="relative h-2 bg-gray-400 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: delay + 0.3, duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="absolute top-0 left-0 h-full bg-white opacity-30 rounded-full"
          initial={{ x: '-100%' }}
          animate={isInView ? { x: '200%' } : { x: '-100%' }}
          transition={{ 
            delay: delay + 0.5, 
            duration: 1.5, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 3
          }}
          style={{ width: '30%' }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;