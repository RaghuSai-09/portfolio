'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass backdrop-blur-lg shadow-lg' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold gradient-text cursor-pointer"
            >
              <Image 
                src='/logo.png' 
                alt='logo' 
                width={100} 
                height={100} 
                priority
                style={{ height: 'auto' }}
              />
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
              <motion.a
                href="mailto:kosanaraghusai@gmail.com"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 bg-linear-to-r from-cyan-500 to-purple-500 font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Let&apos;s Talk
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden glass backdrop-blur-lg"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5"
              >
                {item.name}
              </button>
            ))}
            <a
              href="mailto:kosanaraghusai@gmail.com"
              className="block text-center px-6 py-3 bg-linear-to-r from-cyan-500 to-purple-500 font-semibold"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
