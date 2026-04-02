'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Image from 'next/image';
import NeuralNetwork3D from './NeuralNetwork3D';

const LENS_RADIUS = 75;

interface RevealSegment {
  original: string;
  revealed: string;
}

const segments: RevealSegment[] = [
  { original: 'I spend my time', revealed: 'Three years of' },
  { original: 'teaching machines', revealed: 'fine-tuning BERT,' },
  { original: 'to understand language', revealed: 'building NLP pipelines' },
  { original: '—', revealed: '—' },
  { original: 'then shipping', revealed: 'React, FastAPI,' },
  { original: 'the full-stack systems', revealed: 'Docker, Azure —' },
  { original: 'that real people', revealed: 'that 5,000+ users' },
  { original: 'depend on.', revealed: 'rely on daily.' },
];

// eslint-disable-next-line @typescript-eslint/no-require-imports
const Sentiment = require('sentiment');
const analyzer = new Sentiment();

interface SentimentResult {
  score: number;
  comparative: number;
  positive: string[];
  negative: string[];
  label: string;
  emoji: string;
  color: string;
}

function analyzeSentiment(text: string): SentimentResult | null {
  if (!text.trim()) return null;
  const result = analyzer.analyze(text);
  const comp = result.comparative;
  let label: string, emoji: string, color: string;
  if (comp >= 0.5) { label = 'Very Positive'; emoji = '😊'; color = '#22c55e'; }
  else if (comp > 0.1) { label = 'Positive'; emoji = '🙂'; color = '#4ade80'; }
  else if (comp > -0.1) { label = 'Neutral'; emoji = '😐'; color = '#a8a29e'; }
  else if (comp > -0.5) { label = 'Negative'; emoji = '😕'; color = '#f97316'; }
  else { label = 'Very Negative'; emoji = '😠'; color = '#ef4444'; }
  return { score: result.score, comparative: comp, positive: result.positive, negative: result.negative, label, emoji, color };
}

const examples = [
  'I absolutely love this product! The quality is amazing and the service was fantastic.',
  'The movie was terrible. Poor acting, boring plot, and a complete waste of time.',
  'The weather is cloudy today. I went to the store and bought some groceries.',
];

function SentimentDemo() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<SentimentResult | null>(null);
  const [analyzed, setAnalyzed] = useState(false);

  const handleAnalyze = () => {
    const r = analyzeSentiment(text);
    setResult(r);
    setAnalyzed(true);
  };

  const loadExample = (ex: string) => {
    setText(ex);
    const r = analyzeSentiment(ex);
    setResult(r);
    setAnalyzed(true);
  };

  const confidence = result ? Math.min(Math.abs(result.comparative) * 100, 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="paper-card max-w-xl overflow-hidden"
    >
      <div className="flex items-center justify-between px-5 py-3 border-b border-border-light">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[0.65rem] text-foreground font-semibold tracking-wider uppercase">Live Sentiment Analysis</span>
        </div>
        <span className="font-mono text-[0.55rem] text-muted">AFINN-165 · Client-side</span>
      </div>

      <div className="p-5 space-y-4">
        <textarea
          value={text}
          onChange={(e) => { setText(e.target.value); setAnalyzed(false); }}
          placeholder="Paste any text to analyze its sentiment..."
          rows={3}
          className="w-full bg-background border border-border-light rounded-sm px-4 py-3 text-[0.85rem] text-foreground placeholder:text-muted outline-none focus:border-accent transition-colors resize-none font-sans"
        />

        <div className="flex items-center gap-3">
          <button
            onClick={handleAnalyze}
            disabled={!text.trim()}
            className="bg-foreground text-background px-4 py-2 text-[0.75rem] font-mono hover:bg-accent transition-colors disabled:opacity-30 cursor-pointer rounded-sm"
          >
            Analyze →
          </button>
          <div className="flex gap-1.5">
            {['😊', '😠', '😐'].map((em, i) => (
              <button
                key={i}
                onClick={() => loadExample(examples[i])}
                className="w-7 h-7 flex items-center justify-center border border-border-light hover:border-accent text-sm rounded-sm transition-colors cursor-pointer"
                title={['Try positive', 'Try negative', 'Try neutral'][i]}
              >
                {em}
              </button>
            ))}
          </div>
          <span className="font-mono text-[0.55rem] text-muted">← try examples</span>
        </div>

        {analyzed && result && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border-light pt-4 space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{result.emoji}</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{result.label}</p>
                  <p className="font-mono text-[0.6rem] text-muted">score: {result.score} · comparative: {result.comparative.toFixed(3)}</p>
                </div>
              </div>
              <span className="font-mono text-[0.7rem] font-bold" style={{ color: result.color }}>{confidence.toFixed(0)}%</span>
            </div>

            <div className="h-2 bg-border-light rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${confidence}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ background: result.color }}
              />
            </div>

            {(result.positive.length > 0 || result.negative.length > 0) && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {result.positive.map((w, i) => (
                  <span key={`p-${i}`} className="font-mono text-[0.65rem] px-2 py-0.5 rounded-sm bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">+{w}</span>
                ))}
                {result.negative.map((w, i) => (
                  <span key={`n-${i}`} className="font-mono text-[0.65rem] px-2 py-0.5 rounded-sm bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">−{w}</span>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}


export default function Hero() {
  const [active, setActive] = useState(false);
  const headlineRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });

  const updateVisuals = useCallback(() => {
    const { x, y } = posRef.current;
    if (revealRef.current) {
      revealRef.current.style.clipPath = `circle(${LENS_RADIUS}px at ${x}px ${y}px)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${x - LENS_RADIUS}px, ${y - LENS_RADIUS}px)`;
    }
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
    }
  }, []);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      posRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (!active) setActive(true);
      requestAnimationFrame(updateVisuals);
    };
    const handleLeave = () => {
      setActive(false);
      if (revealRef.current) revealRef.current.style.clipPath = `circle(0px at ${posRef.current.x}px ${posRef.current.y}px)`;
    };
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [active, updateVisuals]);

  return (
    <section className="min-h-[92vh] flex items-center px-6 pt-24 md:pt-20 pb-16 relative overflow-hidden">
      {/* 3D Network Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <NeuralNetwork3D />
      </div>

      <motion.div
        className="hidden md:block absolute bottom-24 left-8 text-border-light font-serif text-9xl select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        &ldquo;
      </motion.div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Mobile photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:hidden mb-10 flex justify-center"
        >
          <div className="relative w-48">
            <div className="absolute -inset-3 bg-accent/5 -rotate-2 rounded-sm" />
            <div className="relative overflow-hidden rounded-sm group">
              <Image
                src="/raghu.jpg"
                alt="Raghu Sai Kosana"
                width={192}
                height={240}
                className="object-cover w-full aspect-[4/5] grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-accent/10 to-transparent mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700" />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h3
              className="text-sm md:text-base font-semibold tracking-widest uppercase text-foreground/90 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ML Engineer <span className="text-accent">·</span> Full-Stack Developer
            </motion.h3>

            {/* Headline with reveal lens */}
            <div ref={headlineRef} className="relative mb-4 select-none" style={{ cursor: 'none' }}>
              <h1 className="font-serif text-[1.85rem] sm:text-[2.3rem] md:text-[2.7rem] lg:text-[3.3rem] leading-[1.18] text-foreground tracking-tight max-w-2xl">
                {segments.map((seg, i) => (
                  <span key={`o-${i}`}>
                    {seg.original === '—' ? (
                      <span className="text-accent"> — </span>
                    ) : (
                      <>{seg.original} </>
                    )}
                  </span>
                ))}
              </h1>

              <div
                ref={revealRef}
                className="absolute inset-0 pointer-events-none z-10 will-change-[clip-path]"
                style={{ clipPath: 'circle(0px at 0px 0px)', transition: 'clip-path 0.15s cubic-bezier(0.22,1,0.36,1)' }}
              >
                <div className="absolute inset-0 bg-foreground" />
                <p className="relative font-serif text-[1.85rem] sm:text-[2.3rem] md:text-[2.7rem] lg:text-[3.3rem] leading-[1.18] tracking-tight max-w-2xl text-background font-medium">
                  {segments.map((seg, i) => (
                    <span key={`r-${i}`}>
                      {seg.revealed === '—' ? (
                        <span className="text-accent"> — </span>
                      ) : (
                        <>{seg.revealed} </>
                      )}
                    </span>
                  ))}
                </p>
              </div>

              <div
                ref={ringRef}
                className="absolute top-0 left-0 pointer-events-none z-20 rounded-full will-change-transform"
                style={{
                  width: LENS_RADIUS * 2,
                  height: LENS_RADIUS * 2,
                  border: '2px solid var(--accent)',
                  opacity: active ? 0.5 : 0,
                  boxShadow: '0 0 20px color-mix(in srgb, var(--accent) 15%, transparent), inset 0 0 20px color-mix(in srgb, var(--accent) 5%, transparent)',
                  transition: 'opacity 0.2s ease',
                }}
              />

              <div
                ref={dotRef}
                className="absolute top-0 left-0 pointer-events-none z-30 w-1.5 h-1.5 rounded-full bg-accent will-change-transform"
                style={{ opacity: active ? 1 : 0, transition: 'opacity 0.2s ease' }}
              />
            </div>

            <motion.p
              className="font-mono text-[0.6rem] text-muted tracking-wider mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              ↑ Hover to see the architecture behind the impact
            </motion.p>

            <motion.p
              className="text-foreground/80 text-[1.1rem] md:text-lg max-w-xl mb-6 leading-[1.75] font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Master&apos;s student at University of Cincinnati. I build end-to-end — from
              training NLP models to deploying React frontends and FastAPI backends that
              serve <span className="highlight-text font-bold">thousands of users</span> in production.
            </motion.p>

            {/* Full-stack proof strip */}
            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-2 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[
                { label: 'ML/NLP', detail: 'PyTorch, BERT, scikit-learn' },
                { label: 'Backend', detail: 'FastAPI, Node.js, PostgreSQL' },
                { label: 'Frontend', detail: 'React, Next.js, Tailwind' },
                { label: 'Infra', detail: 'Docker, Azure, Cloudflare' },
              ].map((item) => (
                <div key={item.label} className="flex items-baseline gap-2">
                  <span className="text-[0.7rem] font-semibold text-accent uppercase tracking-wider">{item.label}</span>
                  <span className="text-[0.75rem] text-secondary">{item.detail}</span>
                </div>
              ))}
            </motion.div>

            {/* Social links — LARGER */}
            <motion.div
              className="flex items-center gap-6 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <a href="https://github.com/raghusai-09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-foreground hover:text-accent transition-colors duration-200 group" aria-label="GitHub">
                <FiGithub size={22} />
                <span className="text-[0.85rem] font-medium group-hover:underline underline-offset-4">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/raghusai09/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-foreground hover:text-accent transition-colors duration-200 group" aria-label="LinkedIn">
                <FiLinkedin size={22} />
                <span className="text-[0.85rem] font-medium group-hover:underline underline-offset-4">LinkedIn</span>
              </a>
              <span className="w-8 h-px bg-border" />
              <a href="mailto:kosanaraghusai@gmail.com" className="text-[0.85rem] text-secondary hover:text-foreground transition-colors font-medium">
                kosanaraghusai@gmail.com
              </a>
            </motion.div>

            {/* Sentiment Analysis Demo */}
            <SentimentDemo />
          </motion.div>

          {/* Desktop photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block relative z-10"
          >
            <div className="relative w-64 lg:w-72 mt-4 ml-8">
              <div className="absolute -inset-4 bg-accent/5 -rotate-3 rounded-sm" />
              <div className="absolute -inset-2 border border-border -rotate-2 rounded-sm" />
              <div className="relative overflow-hidden rounded-sm group shadow-[3px_4px_16px_rgba(0,0,0,0.12)]">
                <Image
                  src="/raghu.jpg"
                  alt="Raghu Sai Kosana — ML Engineer and Full-Stack Developer"
                  width={320}
                  height={400}
                  className="object-cover w-full aspect-[4/5] grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-100"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700" />
              </div>
              <p className="font-mono text-[0.55rem] text-muted tracking-wider mt-4 text-center">
                Cincinnati, OH
              </p>

              {/* Floating Impact Widget */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-10 -left-16 paper-card py-3 px-5 rounded-sm z-20 w-max shadow-2xl glass-panel"
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                   
                  </div>
                  <div className="flex gap-4 items-center">
                    
                   
                    <div>
                      <div className="text-[1.35rem] leading-none font-playfair font-bold text-accent mb-0.5">ML + Web</div>
                      <div className="text-[0.55rem] font-mono text-muted uppercase">Full-Stack Scope</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
