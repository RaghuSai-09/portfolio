'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from 'react-icons/fi';
import Image from 'next/image';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Toolkit', href: '#toolkit' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

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
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-50"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-sm border-b border-border-light shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
            : ''
        }`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={scrollToTop}
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              <Image
                src="/logo.png"
                alt="RSK"
                width={60}
                height={24}
                className="object-contain invert dark:invert-0"
                style={{ height: 'auto' }}
                priority
              />
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[0.8rem] text-secondary hover:text-foreground transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </button>
              ))}

              <a
                href="/resume.pdf"
                download="Raghu_Sai_Kosana_Resume.pdf"
                className="text-[0.8rem] text-secondary hover:text-accent transition-colors duration-200 flex items-center gap-1.5"
              >
                <FiDownload size={13} />
                Resume
              </a>

              <button
                onClick={toggleDarkMode}
                className="text-secondary hover:text-foreground transition-colors duration-200 p-1.5 cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
              </button>

              <a
                href="mailto:kosanaraghusai@gmail.com"
                className="text-[0.8rem] text-foreground border border-foreground px-5 py-1.5 hover:bg-foreground hover:text-background transition-all duration-200"
              >
                Say hello
              </a>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleDarkMode}
                className="text-secondary hover:text-foreground transition-colors p-1.5 cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground p-1 cursor-pointer"
              >
                {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-b border-border-light"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-secondary hover:text-foreground transition-colors py-2.5 text-sm border-b border-border-light last:border-0"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download="Raghu_Sai_Kosana_Resume.pdf"
                className="flex items-center gap-2 text-secondary hover:text-accent transition-colors py-2.5 text-sm border-b border-border-light"
              >
                <FiDownload size={13} />
                Download Resume
              </a>
              <a
                href="mailto:kosanaraghusai@gmail.com"
                className="block text-center text-sm text-foreground border border-foreground px-4 py-2.5 mt-3 hover:bg-foreground hover:text-background transition-all"
              >
                Say hello
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
