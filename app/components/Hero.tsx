'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiCode, FiCpu, FiZap } from 'react-icons/fi';

const keywords = ['NLP', 'Computer Vision', 'Web Apps', 'AI Solutions', 'Machine Learning'];

export default function Hero() {
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [particles, setParticles] = useState<Array<{left: number; top: number; duration: number; delay: number}>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Generate particles on client side only to avoid hydration mismatch
    setParticles(
      Array.from({ length: 30 }).map((_, i) => ({
        left: Math.sin(i) * 100 % 100,
        top: Math.cos(i) * 100 % 100,
        duration: 3 + (i % 2) * 0.5 + 1,
        delay: (i % 3) * 0.67,
      }))
    );
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-900 to-black" />
      
      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-linear-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-linear-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-linear-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating icons */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 text-cyan-400/20"
              animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <FiCode size={40} />
            </motion.div>
            <motion.div
              className="absolute top-40 right-20 text-purple-400/20"
              animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <FiCpu size={50} />
            </motion.div>
            <motion.div
              className="absolute bottom-32 left-20 text-pink-400/20"
              animate={{ y: [-15, 15, -15], rotate: [0, 15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <FiZap size={35} />
            </motion.div>
          </div>

          {/* Main content */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: '"Inter", "SF Pro Display", system-ui, -apple-system, sans-serif' }}
          >
            <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-linear">
              Raghu Sai Kosana
            </span>
          </motion.h1>
          
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              className="h-px w-12 bg-linear-to-r from-transparent to-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-200">
              ML Engineer & Full-Stack Developer
            </h2>
            <motion.div
              className="h-px w-12 bg-linear-to-r from-cyan-500 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          <motion.div
            className="text-xl md:text-2xl mb-8 h-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-gray-400">Specializing in </span>
            <motion.span
              key={currentKeyword}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="ml-2 font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
              {keywords[currentKeyword]}
            </motion.span>
          </motion.div>

          <motion.p
            className="text-gray-400 max-w-3xl mx-auto mb-12 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <span className="text-cyan-400 font-semibold">3+ years</span> building intelligent systems{' '}
            . Master&apos;s student at{' '}
            <span className="text-white font-semibold">University of Cincinnati</span>, passionate about NLP, 
            predictive modeling, and creating impactful AI solutions.
          </motion.p>

          {/* Stats */}
          
           

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="relative px-8 py-3 bg-linear-to-r from-cyan-500 to-purple-500 font-semibold overflow-hidden group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.a
              href="mailto:kosanaraghusai@gmail.com"
              className="px-8 py-3 font-semibold bg-white/5 border border-gray-700 hover:border-cyan-500 hover:bg-white/10 backdrop-blur-sm transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            {[
              { icon: FiGithub, href: 'https://github.com/raghusai-09', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/raghusai09/', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:kosanaraghusai@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label === 'Email' ? undefined : '_blank'}
                rel={social.label === 'Email' ? undefined : 'noopener noreferrer'}
                className="p-3 rounded-full bg-white/5 border border-gray-700 hover:border-cyan-500/50 text-gray-400 hover:text-cyan-400 transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="p-2 rounded-full bg-white/5 border border-gray-700"
            whileHover={{ borderColor: 'rgba(34, 211, 238, 0.5)' }}
          >
            <FiArrowDown className="text-gray-400" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
