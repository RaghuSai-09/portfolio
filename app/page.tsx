'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import VisitorCounter from './components/VisitorCounter';

function CurrentlyWorkingOn() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-background-alt py-5 px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <span className="section-label shrink-0 flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Currently building
        </span>
        <span className="hidden sm:block w-[1px] h-4 bg-border" />
        <p className="text-[0.85rem] text-secondary leading-relaxed">
          Building a RAG pipeline for medical document retrieval — comparing Gemini 2.0 embeddings
          against ada-002, with a React frontend and FastAPI backend for the demo.
        </p>
      </div>
    </motion.div>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-4">
      <span className="ornament">§</span>
    </div>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      <div
        className="relative min-h-screen overflow-x-hidden"
        style={{
          background: 'var(--background)',
          color: 'var(--foreground)',
          visibility: isLoading ? 'hidden' : 'visible',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <Navbar />
        <main className="relative">
          <Hero />
          <CurrentlyWorkingOn />
          <About />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Contact />
        </main>
        <VisitorCounter />
      </div>
    </>
  );
}
