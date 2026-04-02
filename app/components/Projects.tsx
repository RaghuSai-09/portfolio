'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiExternalLink, FiGithub, FiTrendingUp, FiUsers, FiZap, FiClock, FiShield, FiActivity, FiDollarSign, FiGlobe } from 'react-icons/fi';
import { IconType } from 'react-icons';
import {
  SiPython, SiFastapi, SiReact, SiNodedotjs, SiMongodb, SiDocker, SiStreamlit,
  SiScikitlearn, SiTypescript, SiCloudflare
} from 'react-icons/si';

const techIconMap: Record<string, { icon: IconType; color: string }> = {
  'Python': { icon: SiPython, color: '#3776AB' },
  'FastAPI': { icon: SiFastapi, color: '#009688' },
  'BERT': { icon: SiPython, color: '#F59E0B' },
  'spaCy': { icon: SiPython, color: '#09A3D5' },
  'Azure Bot Service': { icon: FiGlobe, color: '#0078D4' },
  'scikit-learn': { icon: SiScikitlearn, color: '#F7931E' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'MLflow': { icon: FiActivity, color: '#0194E2' },
  'Streamlit': { icon: SiStreamlit, color: '#FF4B4B' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'Cloudflare Workers': { icon: SiCloudflare, color: '#F38020' },
  'Workers AI': { icon: FiZap, color: '#F38020' },
  'D1': { icon: FiActivity, color: '#F38020' },
  'Hono': { icon: FiZap, color: '#E36002' },
  'React': { icon: SiReact, color: '#61DAFB' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'OpenAI API': { icon: FiZap, color: '#412991' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
};

const metricIconMap: Record<string, IconType> = {
  'Query resolution': FiTrendingUp,
  'Semantic accuracy': FiTrendingUp,
  'Active users': FiUsers,
  'Uptime': FiShield,
  'Precision': FiTrendingUp,
  'Recall': FiTrendingUp,
  'Daily volume': FiActivity,
  'Review reduction': FiClock,
  'Cold start': FiZap,
  'AI response': FiClock,
  'DB query': FiZap,
  'Edge locations': FiGlobe,
  'Avg time': FiClock,
  'Token efficiency': FiTrendingUp,
  'Cost/query': FiDollarSign,
};

interface ArchNode { id: string; label: string; note: string; }

interface Project {
  title: string;
  context: string;
  bullets: string[];
  architecture: ArchNode[];
  metrics: { label: string; value: string }[];
  tech: string[];
  link: string | null;
  github: string | null;
}

const projects: Project[] = [
  {
    title: 'Medical Chatbot',
    context: 'Phamax.ch · Production · 5,000+ users',
    bullets: [
      'Identified that medical staff spent 40% of time on repetitive FAQ queries with no intent understanding — patients rephrased questions and got inconsistent answers',
      'Built end-to-end NLP chatbot: FastAPI async backend, BERT fine-tuned on medical intents, spaCy NER, Bot Framework SDK for multi-turn conversations',
      'Deployed on Azure Bot Service with HIPAA-compliant pipelines, OAuth 2.0, and auto-scaling across web + Teams',
      'Achieved +40% query resolution speed, +30% semantic accuracy, 99.8% uptime serving 5,000+ active users',
    ],
    architecture: [
      { id: 'fastapi', label: 'FastAPI', note: 'Async Python backend. Rebuilt from sync Flask after first version timed out on 30% of queries under load.' },
      { id: 'nlp', label: 'NLP Pipeline', note: 'spaCy for NER, BERT fine-tuned on medical intent classification. Four iterations to reach production accuracy.' },
      { id: 'bot', label: 'Bot Framework', note: 'Microsoft Bot Framework SDK. Custom dialog trees for multi-turn medical conversations.' },
      { id: 'azure', label: 'Azure Bot Service', note: 'Auto-scaling deployment. HIPAA-compliant data handling with encrypted channels.' },
      { id: 'user', label: 'User', note: 'Web and Teams integration. 92% user satisfaction in post-deployment survey.' },
    ],
    metrics: [
      { label: 'Query resolution', value: '+40%' },
      { label: 'Semantic accuracy', value: '+30%' },
      { label: 'Active users', value: '5,000+' },
      { label: 'Uptime', value: '99.8%' },
    ],
    tech: ['Python', 'FastAPI', 'BERT', 'spaCy', 'Azure Bot Service'],
    link: null,
    github: null,
  },
  {
    title: 'Email Spam Detection',
    context: 'VOIS · Published research · 50k+ emails/day',
    bullets: [
      'Rule-based spam filter missed 15–20% of sophisticated spam; false positives blocked legitimate emails, costing hours of daily manual review',
      'Designed ensemble voting classifier (Naive Bayes + Logistic Regression + Random Forest) with TF-IDF, n-gram, and Word2Vec features',
      'Containerized pipeline with Docker, CI/CD via Jenkins, model versioning with MLflow — cut deployment time by 60%',
      'Achieved 95% precision, 93% recall on 50k+ daily emails; reduced manual review by 40%. Published peer-reviewed research paper',
    ],
    architecture: [
      { id: 'ingest', label: 'Data Ingestion', note: 'Real-time email stream. TF-IDF vectorization with n-gram analysis and Word2Vec embeddings.' },
      { id: 'ensemble', label: 'Ensemble Models', note: 'Voting classifier. 18% accuracy improvement over single-model baseline.' },
      { id: 'pipeline', label: 'ML Pipeline', note: 'Docker containerized, CI/CD with Jenkins, MLflow versioning.' },
      { id: 'monitor', label: 'Monitoring', note: 'Streamlit + React dashboard. Prometheus/Grafana for system health. 99.5% uptime.' },
    ],
    metrics: [
      { label: 'Precision', value: '95%' },
      { label: 'Recall', value: '93%' },
      { label: 'Daily volume', value: '50k+' },
      { label: 'Review reduction', value: '40%' },
    ],
    tech: ['Python', 'scikit-learn', 'Docker', 'MLflow', 'Streamlit'],
    link: null,
    github: null,
  },
  {
    title: 'TaskFlow AI',
    context: 'Cloudflare · Live · Edge computing',
    bullets: [
      'Explored whether AI-powered task analysis could work at the edge with near-zero cold starts vs. heavy server-side inference',
      'Built with Hono framework on Cloudflare Workers, Llama 3.3 70B via Workers AI for priority scoring and subtask generation',
      'Used D1 (SQLite at edge) for sub-10ms queries; Durable Objects for stateful task workflows',
      'Achieved ~5ms cold starts, <3s AI responses, deployed across 300+ edge locations worldwide',
    ],
    architecture: [
      { id: 'workers', label: 'CF Workers', note: '~5ms cold starts. Hono framework. Durable Objects for stateful workflows.' },
      { id: 'ai', label: 'Workers AI', note: 'Llama 3.3 70B for task analysis — priority, category, time estimation, subtask generation.' },
      { id: 'd1', label: 'D1 Database', note: 'SQLite at edge. Sub-10ms queries.' },
      { id: 'ui', label: 'Frontend', note: 'Real-time AI feedback. Auto-suggestions as you type.' },
    ],
    metrics: [
      { label: 'Cold start', value: '~5ms' },
      { label: 'AI response', value: '<3s' },
      { label: 'DB query', value: '<10ms' },
      { label: 'Edge locations', value: '300+' },
    ],
    tech: ['TypeScript', 'Cloudflare Workers', 'Workers AI', 'D1', 'Hono'],
    link: 'https://taskflow-ai.raghusai-kosana.workers.dev/',
    github: 'https://github.com/RaghuSai-09/cf_ai_taskflow-ai',
  },
  {
    title: 'AI Article Summarizer',
    context: 'Personal project · Live',
    bullets: [
      'Reading 20+ articles/day for research — needed a tool to extract core arguments from long-form content quickly',
      'Built URL scraper with fallback parsers, GPT-3.5 Turbo with custom prompts achieving 65% token efficiency vs. naive prompting',
      'React SPA with history, deployed on GitHub Pages — average summary delivered in 2.3 seconds at $0.02/query',
    ],
    architecture: [
      { id: 'scrape', label: 'Scraper', note: 'URL-based content extraction with fallback parsers.' },
      { id: 'api', label: 'OpenAI API', note: 'GPT-3.5 Turbo. 65% token efficiency vs. naive prompting.' },
      { id: 'frontend', label: 'React SPA', note: 'Clean interface with history. Average summary in 2.3s.' },
    ],
    metrics: [
      { label: 'Avg time', value: '2.3s' },
      { label: 'Token efficiency', value: '65%' },
      { label: 'Cost/query', value: '$0.02' },
    ],
    tech: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    link: 'https://raghusai-09.github.io/AI_Summarizer/',
    github: 'https://github.com/raghusai-09',
  },
];

function ArchitectureDiagram({ nodes }: { nodes: ArchNode[] }) {
  const [expandedNode, setExpandedNode] = useState<string | null>(null);
  return (
    <div className="mt-4 mb-2">
      <p className="section-label mb-3">System Architecture</p>
      <div className="flex flex-wrap items-center gap-2">
        {nodes.map((node, index) => (
          <div key={node.id} className="flex items-center gap-2">
            <button
              onClick={() => setExpandedNode(expandedNode === node.id ? null : node.id)}
              className={`arch-node ${expandedNode === node.id ? 'active' : ''}`}
            >
              {node.label}
            </button>
            {index < nodes.length - 1 && <span className="arch-arrow">→</span>}
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {expandedNode && (
          <motion.div
            key={expandedNode}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-[0.85rem] text-secondary leading-relaxed border-l-2 border-accent/30 pl-4">
              {nodes.find((n) => n.id === expandedNode)?.note}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-background-alt/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-3">Work</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">Projects</h2>
          <div className="editorial-rule mt-6 w-24" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="paper-card p-8 md:p-10"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                <h3 className="font-serif text-xl md:text-2xl text-foreground tracking-tight">{project.title}</h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-mono text-subtle hover:text-accent border border-border-light hover:border-accent px-3 py-1.5 transition-all">
                      <FiGithub size={13} /> Source
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-mono text-background bg-foreground hover:bg-accent px-3 py-1.5 transition-all">
                      <FiExternalLink size={13} /> Live
                    </a>
                  )}
                </div>
              </div>
              <p className="font-mono text-[0.65rem] text-muted tracking-wider mb-5">{project.context}</p>

              {/* STAR-style bullet points */}
              <ul className="space-y-2.5 mb-5">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="bullet-item flex gap-3 text-[0.9rem] text-foreground/80 leading-[1.7] py-1 px-2 -mx-2">
                    <span className="text-accent mt-1.5 shrink-0">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <ArchitectureDiagram nodes={project.architecture} />

              {/* Metrics */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {project.metrics.map((metric) => {
                  const MetricIcon = metricIconMap[metric.label] || FiActivity;
                  return (
                    <div key={metric.label} className="bg-background border border-border-light p-3 group hover:border-accent/30 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <MetricIcon size={12} className="text-accent" />
                        <p className="text-[0.6rem] text-muted uppercase tracking-wider">{metric.label}</p>
                      </div>
                      <p className="metric-value text-[1.25rem]">{metric.value}</p>
                    </div>
                  );
                })}
              </div>

              <div className="editorial-rule-center mt-6 mb-4" />

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => {
                  const techInfo = techIconMap[t];
                  const Icon = techInfo?.icon;
                  return (
                    <span key={t} className="flex items-center gap-1.5 font-mono text-[0.7rem] text-secondary border border-border-light px-3 py-1.5 bg-card hover:border-border transition-colors">
                      {Icon && <Icon size={13} style={{ color: techInfo.color }} />}
                      {t}
                    </span>
                  );
                })}
              </div>
            </motion.article>
          ))}

          {/* The one that didn't ship */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border border-dashed border-border p-8 md:p-10 bg-transparent"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="ornament">✕</span>
              <h3 className="font-serif text-lg text-subtle tracking-tight">The one that didn&apos;t ship</h3>
            </div>
            <p className="text-[0.9rem] text-muted leading-[1.8] max-w-2xl">
              Built a sentiment analysis model for customer support tickets at 1Stop.ai.
              LSTM on validation set — 91% accuracy — but fell apart on real tickets with sarcasm.
              Spent two weeks on attention mechanisms before accepting the training data was the problem.
              Learned more from that failure than from most things that worked.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
