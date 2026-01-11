'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiTrendingUp, FiCode, FiDatabase, FiCpu, FiZap, FiActivity } from 'react-icons/fi';
import { SiPython, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiExpress, SiScikitlearn, SiStreamlit, SiOpenai, SiTensorflow, SiPytorch, SiFastapi } from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';
import { useState } from 'react';

// Tech icon mapping
const techIcons: { [key: string]: any } = {
  'Python': SiPython,
  'Bot Framework': FaMicrosoft,
  'NLP': SiPython,
  'REST APIs': SiNodedotjs,
  'React': SiReact,
  'Node.js': SiNodedotjs,
  'OpenAI': SiOpenai,
  'MongoDB': SiMongodb,
  'Scikit-learn': SiScikitlearn,
  'Streamlit': SiStreamlit,
  'ML Algorithms': SiPython,
  'Express': SiExpress,
  'Tailwind CSS': SiTailwindcss,
  'TensorFlow': SiTensorflow,
  'PyTorch': SiPytorch,
  'FastAPI': SiFastapi,
};

type TabType = 'overview' | 'architecture' | 'metrics';

const projects = [
  {
    title: 'Medical Chatbot',
    company: 'Phamax.ch',
    status: 'PRODUCTION',
    description: 'Designed and deployed an intelligent medical chatbot using Microsoft Bot Framework and Python, serving 500+ users with 40% faster query resolution.',
    architecture: {
      pipeline: ['Data Ingestion', 'NLP Processing', 'Intent Classification', 'Response Generation', 'API Integration'],
      models: ['BERT for Intent', 'spaCy NER', 'Custom Dialog Manager'],
      infrastructure: ['Azure Bot Service', 'FastAPI Backend', 'SQL Server', 'Redis Cache']
    },
    metrics: [
      { label: 'Query Resolution', value: '40%', icon: FiZap, color: 'text-green-400' },
      { label: 'Accuracy Increase', value: '30%', icon: FiTrendingUp, color: 'text-cyan-400' },
      { label: 'Active Users', value: '5000+', icon: FiActivity, color: 'text-purple-400' },
      { label: 'Uptime', value: '99.8%', icon: FiCpu, color: 'text-blue-400' }
    ],
    tech: ['Python', 'Bot Framework', 'NLP', 'FastAPI', 'TensorFlow'],
    gradient: 'from-cyan-500 to-blue-500',
    link: null,
    github: null,
  },
  {
    title: 'AI Article Summarizer',
    company: 'Personal Project',
    status: 'LIVE',
    description: 'Built an AI-powered web app that extracts and condenses articles using OpenAI API. Deployed on GitHub Pages with seamless UX.',
    architecture: {
      pipeline: ['Article Scraping', 'Text Preprocessing', 'API Call', 'Summary Generation', 'UI Rendering'],
      models: ['GPT-3.5 Turbo', 'Custom Prompts'],
      infrastructure: ['React SPA', 'Node.js Middleware', 'MongoDB', 'GitHub Pages']
    },
    metrics: [
      { label: 'Avg Summary Time', value: '2.3s', icon: FiZap, color: 'text-green-400' },
      { label: 'Token Efficiency', value: '65%', icon: FiCpu, color: 'text-cyan-400' },
      { label: 'User Retention', value: '78%', icon: FiActivity, color: 'text-purple-400' },
      { label: 'Cost per Query', value: '$0.02', icon: FiDatabase, color: 'text-blue-400' }
    ],
    tech: ['React', 'Node.js', 'OpenAI', 'MongoDB', 'Tailwind CSS'],
    gradient: 'from-purple-500 to-pink-500',
    link: 'https://raghusai-09.github.io/AI_Summarizer/',
    github: 'https://github.com/raghusai-09',
  },
  {
    title: 'Email Spam Detection',
    company: 'VOIS',
    status: 'PUBLISHED',
    description: 'Developed a scalable ML system processing 50k+ emails with 95% precision using Naive Bayes and Logistic Regression. Published research paper.',
    architecture: {
      pipeline: ['Data Collection', 'Feature Engineering', 'Model Training', 'Ensemble', 'Deployment'],
      models: ['Naive Bayes', 'Logistic Regression', 'Random Forest', 'Voting Classifier'],
      infrastructure: ['Docker', 'CI/CD Pipeline', 'MLflow', 'Streamlit Dashboard']
    },
    metrics: [
      { label: 'Precision', value: '95%', icon: FiTrendingUp, color: 'text-green-400' },
      { label: 'Recall', value: '93%', icon: FiZap, color: 'text-cyan-400' },
      { label: 'Emails/day', value: '50K+', icon: FiDatabase, color: 'text-purple-400' },
      { label: 'Time Saved', value: '40%', icon: FiActivity, color: 'text-blue-400' }
    ],
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'TensorFlow'],
    gradient: 'from-green-500 to-teal-500',
    link: null,
    github: null,
  },
  {
    title: 'DALL-E Clone',
    company: 'Personal Project',
    status: 'LIVE',
    description: 'Image generation platform using OpenAI DALL-E API with community sharing. Built with React, styled with Tailwind CSS.',
    architecture: {
      pipeline: ['Prompt Input', 'API Call', 'Image Generation', 'Storage', 'Community Feed'],
      models: ['DALL-E 2', 'Image Moderation API'],
      infrastructure: ['React Frontend', 'Express Backend', 'MongoDB', 'Cloudinary CDN']
    },
    metrics: [
      { label: 'Generations', value: '10K+', icon: FiZap, color: 'text-green-400' },
      { label: 'Avg Gen Time', value: '8.5s', icon: FiCpu, color: 'text-cyan-400' },
      { label: 'Community Posts', value: '2.5K', icon: FiActivity, color: 'text-purple-400' },
      { label: 'User Satisfaction', value: '4.7/5', icon: FiTrendingUp, color: 'text-blue-400' }
    ],
    tech: ['React', 'Express', 'OpenAI', 'MongoDB', 'Tailwind CSS'],
    gradient: 'from-orange-500 to-red-500',
    link: 'https://dalley.netlify.app/',
    github: 'https://github.com/raghusai-09',
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<{ [key: number]: TabType }>({});

  const getActiveTab = (index: number): TabType => activeTab[index] || 'overview';

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Projects & Architecture</h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production-grade systems with measurable impact • Interactive architecture views
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const currentTab = getActiveTab(index);
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <motion.div 
                    className={`px-3 py-1 rounded-full text-xs font-mono border ${
                      project.status === 'PRODUCTION' ? 'bg-green-500/20 border-green-500/50 text-green-400' :
                      project.status === 'LIVE' ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' :
                      'bg-purple-500/20 border-purple-500/50 text-purple-400'
                    }`}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ● {project.status}
                  </motion.div>
                </div>

                {/* Header */}
                <div className="mb-4 mt-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <FiCode className="text-cyan-400" />
                    {project.title}
                  </h3>
                  <p className="text-sm text-purple-400 font-mono">{project.company}</p>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-4 border-b border-white/10">
                  {(['overview', 'architecture', 'metrics'] as TabType[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab({ ...activeTab, [index]: tab })}
                      className={`px-4 py-2 text-sm font-mono transition-all relative ${
                        currentTab === tab 
                          ? 'text-cyan-400' 
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      ./{tab}
                      {currentTab === tab && (
                        <motion.div
                          layoutId={`tab-${index}`}
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-500 to-purple-500"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${index}-${currentTab}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mb-6 min-h-50"
                  >
                    {currentTab === 'overview' && (
                      <div className="space-y-4">
                        {/* Description */}
                        <div>
                          <div className="text-cyan-400 text-sm font-mono mb-2 flex items-center gap-2">
                            <FiCode size={14} /> Project Description
                          </div>
                          <p className="text-gray-300 leading-relaxed text-sm">
                            {project.description}
                          </p>
                        </div>

                        {/* Key Highlights */}
                        <div>
                          <div className="text-purple-400 text-sm font-mono mb-2 flex items-center gap-2">
                            <FiZap size={14} /> Key Highlights
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {project.metrics.slice(0, 4).map((metric, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                                <span className="text-gray-400">
                                  <span className={metric.color}>{metric.value}</span> {metric.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 pt-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg transition-all text-sm"
                            >
                              <FiGithub /> Source
                            </a>
                          )}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-500/30 rounded-lg transition-all text-sm text-cyan-400"
                            >
                              <FiExternalLink /> Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {currentTab === 'architecture' && (
                      <div className="space-y-4 font-mono text-sm">
                        <div>
                          <div className="text-cyan-400 mb-2 flex items-center gap-2">
                            <FiDatabase size={16} /> ML Pipeline
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.architecture.pipeline.map((step, i) => (
                              <motion.div
                                key={step}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-gray-300"
                              >
                                {i + 1}. {step}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-purple-400 mb-2 flex items-center gap-2">
                            <FiCpu size={16} /> Models
                          </div>
                          <div className="space-y-1">
                            {project.architecture.models.map((model) => (
                              <div key={model} className="text-gray-400 text-xs">▹ {model}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-green-400 mb-2 flex items-center gap-2">
                            <FiCode size={16} /> Infrastructure
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.architecture.infrastructure.map((infra) => (
                              <span key={infra} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">
                                {infra}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {currentTab === 'metrics' && (
                      <div className="grid grid-cols-2 gap-3">
                        {project.metrics.map((metric, i) => (
                          <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-linear-to-br from-white/5 to-white/0 border border-white/10 rounded-xl p-4"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <metric.icon className={metric.color} size={20} />
                              <span className="text-xs text-gray-400">{metric.label}</span>
                            </div>
                            <div className={`text-2xl font-bold ${metric.color}`}>
                              {metric.value}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                  {project.tech.map((tech) => {
                    const Icon = techIcons[tech] || SiPython;
                    return (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                        className="group/tech relative"
                      >
                        <div className={`p-2.5 rounded-lg bg-linear-to-r ${project.gradient} bg-opacity-10 border border-white/20 hover:border-white/40 transition-all`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                          {tech}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Hover gradient border effect */}
                <div className={`absolute inset-0 rounded-3xl bg-linear-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none blur-xl`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2 gradient-text">Research & Side Projects</h3>
           
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all border border-cyan-500/20 hover:border-cyan-500/40"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <FiCpu className="text-cyan-400" size={20} />
                </div>
                <h4 className="text-xl font-semibold text-cyan-400">Object Recognition</h4>
              </div>
              <p className="text-gray-400 text-sm mb-4">CNN + OpenCV achieving 92% accuracy on custom dataset</p>
              <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                <FiTrendingUp size={12} />
                <span>Accuracy: 92%</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full font-mono text-cyan-400">TensorFlow</span>
                <span className="text-xs px-3 py-1 bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full font-mono text-cyan-400">OpenCV</span>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all border border-purple-500/20 hover:border-purple-500/40"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <FiDatabase className="text-purple-400" size={20} />
                </div>
                <h4 className="text-xl font-semibold text-purple-400">Digit Classification</h4>
              </div>
              <p className="text-gray-400 text-sm mb-4">MNIST CNN with 98% test accuracy & custom augmentation</p>
              <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                <FiTrendingUp size={12} />
                <span>Accuracy: 98%</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full font-mono text-purple-400">PyTorch</span>
                <span className="text-xs px-3 py-1 bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full font-mono text-purple-400">CNN</span>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all border border-green-500/20 hover:border-green-500/40"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center">
                  <FiCode className="text-green-400" size={20} />
                </div>
                <h4 className="text-xl font-semibold text-green-400">News Classification</h4>
              </div>
              <p className="text-gray-400 text-sm mb-4">NLP with 12% F1-score improvement over baseline</p>
              <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                <FiTrendingUp size={12} />
                <span>F1-Score: +12%</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-linear-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-full font-mono text-green-400">NLP</span>
                <span className="text-xs px-3 py-1 bg-linear-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-full font-mono text-green-400">TF-IDF</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
