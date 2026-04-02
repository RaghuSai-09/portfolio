'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const timelineEvents = [
  {
    year: '2021',
    label: 'First real model',
    note: 'Built a CNN for digit recognition at 1Stop.ai. 98% accuracy on MNIST felt magical — then I tried it on real handwriting and watched it crumble. That gap between benchmark and production became the thing I wanted to close.',
  },
  {
    year: '2022',
    label: 'First production system',
    note: 'Designed a spam detection pipeline at VOIS processing 50k+ emails daily. Built the full stack: ML ensemble in Python, monitoring dashboard in React + Streamlit, PostgreSQL backend. Published a research paper.',
  },
  {
    year: '2024',
    label: 'First system real people relied on',
    note: 'Built the medical chatbot at Phamax.ch end-to-end — FastAPI backend, BERT intent classification, React/Teams frontend, Azure deployment. Over 5,000 users before I left.',
  },
  {
    year: '2024',
    label: 'Grad school + open source',
    note: 'Started my Master\'s at University of Cincinnati. Built TaskFlow AI on Cloudflare\'s edge stack, an AI Summarizer with React + Node.js, and a DALL-E clone with full MERN stack. GPA: 3.93.',
  },
];

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-3">About</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">
            Origin story
          </h2>
          <div className="editorial-rule mt-6 w-24" />
        </motion.div>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-[1.05rem] leading-[1.85] text-body drop-cap">
              I got into machine learning the way most people do — through a tutorial that made it look easy.
              Train a model, get a number, celebrate. It took about three months of actual work before I realized
              the interesting part isn&apos;t the model. It&apos;s everything around it: the data nobody cleaned,
              the edge cases nobody anticipated, the latency budget that makes your beautiful architecture irrelevant.
            </p>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="space-y-6 overflow-hidden"
                >
                  <p className="text-[1.05rem] leading-[1.85] text-body">
                    What surprised me was how much of ML engineering is really <span className="highlight-text">full-stack engineering</span>.
                    The chatbot I built at Phamax wasn&apos;t just an NLP model — it was a FastAPI backend, a React
                    integration, Azure infrastructure, and HIPAA-compliant data pipelines. The spam detector at VOIS
                    wasn&apos;t just algorithms — it was Docker containers, CI/CD pipelines, a Streamlit dashboard,
                    and a PostgreSQL backend that had to stay up at 99.5%.
                  </p>
                  <p className="text-[1.05rem] leading-[1.85] text-body">
                    I find the hardest part of this work is knowing when to stop optimizing. There&apos;s always
                    another percentage point, another architecture to try. The discipline is in shipping — getting
                    the full system into production where it can actually help someone, then iterating from there.
                    That&apos;s why I build across the entire stack, not just the model layer.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setExpanded(!expanded)}
              className="text-accent text-[0.85rem] font-mono tracking-wider hover:underline underline-offset-4 transition-colors cursor-pointer"
            >
              {expanded ? '← Show less' : 'Continue reading →'}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="section-label mb-6">Inflection points</p>
            <div className="relative pl-8">
              <div className="absolute left-[4px] top-2 bottom-2 timeline-line w-[2px]" />

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="relative mb-10 last:mb-0"
                >
                  <div className="absolute -left-8 top-1.5 sketch-dot" />
                  <p className="font-mono text-[0.65rem] text-accent tracking-wider mb-1">{event.year}</p>
                  <p className="text-[0.9rem] font-semibold text-foreground mb-2">{event.label}</p>
                  <p className="text-[0.88rem] leading-[1.7] text-secondary">{event.note}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
