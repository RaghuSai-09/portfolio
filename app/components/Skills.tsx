'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { SiPython, SiPytorch, SiFastapi, SiReact, SiScikitlearn, SiDocker, SiPostgresql, SiTypescript, SiRust, SiCloudflare } from 'react-icons/si';
import { FiCloud, FiCpu, FiLayers, FiBox, FiChevronDown } from 'react-icons/fi';

interface Tool { name: string; project: string; icon: IconType; color: string; }
interface Tier { label: string; accent: string; tools: Tool[]; }

const tiers: Tier[] = [
  { label: 'I build with this', accent: 'var(--accent)', tools: [
    { name: 'Python', project: 'Every ML project', icon: SiPython, color: '#3776AB' },
    { name: 'PyTorch / TensorFlow', project: 'Spam detection, chatbot NLP', icon: SiPytorch, color: '#EE4C2C' },
    { name: 'FastAPI', project: 'Phamax chatbot backend', icon: SiFastapi, color: '#009688' },
    { name: 'React / Next.js', project: 'This portfolio, AI Summarizer', icon: SiReact, color: '#61DAFB' },
    { name: 'scikit-learn', project: 'VOIS spam classifier', icon: SiScikitlearn, color: '#F7931E' },
  ]},
  { label: "I'm comfortable here", accent: 'var(--accent-warm)', tools: [
    { name: 'Docker / CI/CD', project: 'VOIS deployment pipeline', icon: SiDocker, color: '#2496ED' },
    { name: 'PostgreSQL / MongoDB', project: 'Multiple projects', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Azure / Cloudflare', project: 'Phamax, TaskFlow AI', icon: FiCloud, color: '#0078D4' },
    { name: 'TypeScript', project: 'TaskFlow AI, this site', icon: SiTypescript, color: '#3178C6' },
    { name: 'LangChain / RAG', project: 'Class projects, experiments', icon: FiLayers, color: '#059669' },
  ]},
  { label: 'Learning next', accent: '#059669', tools: [
    { name: 'Rust', project: 'Side projects', icon: SiRust, color: '#CE422B' },
    { name: 'MLOps at scale', project: 'W&B, DVC', icon: FiBox, color: '#FFBE00' },
    { name: 'Multimodal models', project: 'Coursework', icon: FiCpu, color: '#8b5cf6' },
    { name: 'Edge AI', project: 'CF Workers AI', icon: SiCloudflare, color: '#F38020' },
  ]},
];

const readings = [
  { title: 'Attention Is All You Need', author: 'Vaswani et al., 2017', note: 'Transformers obsoleted the recurrent architectures I\'d spent months learning.' },
  { title: 'The Alignment Problem', author: 'Brian Christian', note: '95% accurate chatbot = wrong for 1 in 20 patients. Changed how I evaluate.' },
  { title: 'Designing Data-Intensive Apps', author: 'Kleppmann', note: 'Most ML problems are distributed systems problems in disguise.' },
  { title: 'The Bitter Lesson', author: 'Sutton, 2019', note: 'General methods + compute beat clever hand-engineering.' },
  { title: 'SE at Google', author: 'Winters et al.', note: 'Code is a liability. Changed how I approach production ML.' },
  { title: 'Karpathy\'s blog', author: 'karpathy.github.io', note: '"Recipe for Training NNs" — most practical ML advice anywhere.' },
];

export default function Skills() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? readings : readings.slice(0, 2);

  return (
    <section id="toolkit" className="py-24 md:py-32 px-6 bg-background-alt/50">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
          <p className="section-label mb-3">Skills</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">Toolkit</h2>
          <div className="editorial-rule mt-6 w-24" />
        </motion.div>

        <div className="mb-24">
          <p className="section-label mb-10">Proficiency Map</p>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, ti) => (
              <motion.div key={tier.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: ti * 0.1 }} viewport={{ once: true }} className="paper-card p-6">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border-light">
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ background: tier.accent }} />
                  <p className="text-sm font-bold text-foreground">{tier.label}</p>
                </div>
                <div className="space-y-4">
                  {tier.tools.map((t) => { const I = t.icon; return (
                    <div key={t.name} className="flex items-start gap-3">
                      <I size={18} className="shrink-0 mt-0.5" style={{ color: t.color }} />
                      <div>
                        <p className="text-[0.88rem] font-medium text-foreground leading-tight">{t.name}</p>
                        <p className="text-[0.7rem] text-muted font-mono mt-0.5">{t.project}</p>
                      </div>
                    </div>
                  ); })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-10">
            <p className="section-label mb-3">Intellectual influences</p>
            <h3 className="font-serif text-2xl text-foreground tracking-tight">Reading List</h3>
            <p className="text-sm text-secondary mt-2 max-w-lg">Papers and books that shaped how I build systems.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {visible.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, delay: i * 0.06 }} layout className="paper-card p-6">
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-3xl text-accent/20 leading-none mt-1 select-none shrink-0">{readings.indexOf(item) + 1}</span>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-0.5">{item.title}</p>
                      <p className="font-mono text-[0.6rem] text-muted tracking-wider mb-2">{item.author}</p>
                      <p className="text-[0.85rem] text-secondary leading-relaxed">{item.note}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {readings.length > 2 && (
            <div className="mt-8 text-center">
              <button onClick={() => setShowAll(!showAll)} className="inline-flex items-center gap-2 text-accent text-[0.8rem] font-mono tracking-wider hover:underline underline-offset-4 cursor-pointer">
                {showAll ? 'Show less' : `Show all ${readings.length}`}
                <FiChevronDown size={14} className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
