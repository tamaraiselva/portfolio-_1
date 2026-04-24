import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Type, Zap, Eye, Sparkles, Code } from 'lucide-react';

const DesignShowcase = () => {
  const colorPalette = [
    { name: 'Electric Blue', colors: ['#3b82f6', '#2563eb', '#1d4ed8'], usage: 'Primary brand color, CTAs, links' },
    { name: 'Cyber Cyan', colors: ['#22d3ee', '#06b6d4', '#0891b2'], usage: 'Secondary accent, highlights, icons' },
    { name: 'Neon Purple', colors: ['#c084fc', '#a855f7', '#9333ea'], usage: 'Tertiary accent, gradients, special elements' },
    { name: 'Neutral Grays', colors: ['#171717', '#262626', '#404040'], usage: 'Backgrounds, text, borders' }
  ];

  const typographyExamples = [
    { class: 'heading-1', text: 'Heading 1 - Hero Title', font: 'Geist', weight: '800' },
    { class: 'heading-2', text: 'Heading 2 - Section Title', font: 'Geist', weight: '700' },
    { class: 'heading-3', text: 'Heading 3 - Subsection', font: 'Geist', weight: '600' },
    { class: 'body-large', text: 'Large body text for important content and descriptions', font: 'Satoshi', weight: '400' },
    { class: 'body-base', text: 'Base body text for regular content and paragraphs', font: 'Satoshi', weight: '400' },
    { class: 'caption', text: 'Caption text for labels and metadata', font: 'Satoshi', weight: '500' }
  ];

  const gradientExamples = [
    { name: 'Primary Gradient', class: 'text-gray-300-primary', text: 'Cyber Cyan → Electric Blue → Neon Purple' },
    { name: 'Secondary Gradient', class: 'text-gray-300-secondary', text: 'Electric Blue → Cyber Cyan' },
    { name: 'Accent Gradient', class: 'text-gray-300-accent', text: 'Neon Purple → Electric Blue' }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Palette className="w-8 h-8 text-cyan-400" />
            <h1 className="heading-1 text-gray-300-primary">Modern Design System</h1>
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          <p className="body-large text-neutral-400 max-w-3xl mx-auto">
            A comprehensive design system featuring contemporary color palettes, modern typography, 
            and cutting-edge visual effects for 2025 web applications.
          </p>
        </motion.div>

        {/* Color Palette Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <Eye className="w-6 h-6 text-cyan-400" />
            <h2 className="heading-3 text-gray-300-secondary">Color Palette</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {colorPalette.map((palette, index) => (
              <motion.div
                key={palette.name}
                className="glass-morphism-dark rounded-2xl p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="heading-5 mb-4">{palette.name}</h3>
                <div className="flex space-x-2 mb-4">
                  {palette.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-16 h-16 rounded-xl shadow-lg border border-white/10"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <p className="body-small text-neutral-400">{palette.usage}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Typography Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <Type className="w-6 h-6 text-purple-400" />
            <h2 className="heading-3 text-gray-300-accent">Typography System</h2>
          </div>
          
          <div className="glass-morphism-dark rounded-2xl p-8">
            <div className="space-y-8">
              {typographyExamples.map((example, index) => (
                <motion.div
                  key={example.class}
                  className="border-b border-white/10 pb-6 last:border-b-0"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className={example.class + ' mb-2'}>{example.text}</div>
                  <div className="flex items-center space-x-4 text-neutral-400 body-small">
                    <span>Font: {example.font}</span>
                    <span>Weight: {example.weight}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Gradient Text Examples */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <Zap className="w-6 h-6 text-yellow-400" />
            <h2 className="heading-3 text-gray-300-primary">Gradient Text Effects</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {gradientExamples.map((gradient, index) => (
              <motion.div
                key={gradient.name}
                className="glass-morphism-dark rounded-2xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="heading-5 mb-4">{gradient.name}</h3>
                <div className={`heading-4 ${gradient.class} mb-4`}>
                  Sample Text
                </div>
                <p className="body-small text-neutral-400">{gradient.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Interactive Elements */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <Code className="w-6 h-6 text-green-400" />
            <h2 className="heading-3 text-gray-300-secondary">Interactive Components</h2>
          </div>
          
          <div className="glass-morphism-dark rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Buttons */}
              <div>
                <h3 className="heading-5 mb-6">Button Styles</h3>
                <div className="space-y-4">
                  <motion.button
                    className="btn-primary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Primary Button
                  </motion.button>
                  <motion.button
                    className="btn-secondary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Secondary Button
                  </motion.button>
                </div>
              </div>

              {/* Cards */}
              <div>
                <h3 className="heading-5 mb-6">Card Components</h3>
                <motion.div
                  className="card-modern"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="heading-6 text-gray-300-primary mb-2">Modern Card</h4>
                  <p className="body-small text-neutral-400">
                    Glass morphism effect with hover animations and gradient borders.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Implementation Guide */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="heading-3 text-gray-300-accent mb-8 text-center">Implementation Guidelines</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-morphism-dark rounded-2xl p-6">
              <h3 className="heading-5 text-cyan-400 mb-4">Color Usage</h3>
              <ul className="body-small text-neutral-300 space-y-2">
                <li>• Use Electric Blue for primary actions</li>
                <li>• Apply Cyber Cyan for highlights</li>
                <li>• Reserve Neon Purple for special elements</li>
                <li>• Maintain 4.5:1 contrast ratio minimum</li>
              </ul>
            </div>
            
            <div className="glass-morphism-dark rounded-2xl p-6">
              <h3 className="heading-5 text-purple-400 mb-4">Typography</h3>
              <ul className="body-small text-neutral-300 space-y-2">
                <li>• Geist for headings and UI elements</li>
                <li>• Satoshi for body text and descriptions</li>
                <li>• JetBrains Mono for code snippets</li>
                <li>• Use fluid typography for responsiveness</li>
              </ul>
            </div>
            
            <div className="glass-morphism-dark rounded-2xl p-6">
              <h3 className="heading-5 text-green-400 mb-4">Best Practices</h3>
              <ul className="body-small text-neutral-300 space-y-2">
                <li>• Test in both light and dark modes</li>
                <li>• Ensure accessibility compliance</li>
                <li>• Use CSS custom properties</li>
                <li>• Optimize for performance</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DesignShowcase;