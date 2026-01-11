'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';


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
        className="relative min-h-screen bg-black text-white overflow-x-hidden"
        style={{ 
          visibility: isLoading ? 'hidden' : 'visible',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out'
        }}
      >
        <Navbar />
        <main className="relative">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  );
}

