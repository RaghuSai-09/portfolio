'use client';

import { motion } from 'framer-motion';
import { SiPython, SiTensorflow, SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTypescript, SiCplusplus } from 'react-icons/si';

const techStack = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '95%', label: 'ML Accuracy' },
  { value: '500+', label: 'Users Served' },
  { value: '3.93', label: 'GPA' },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m a Machine Learning Engineer with <span className="text-cyan-400 font-semibold">3 years of experience</span> specializing 
              in NLP and predictive modeling. Currently pursuing my Master&apos;s in Computer Science at the University of Cincinnati with a 3.93 GPA.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My work spans from building <span className="text-purple-400 font-semibold">medical chatbots</span> that serve 500+ users 
              to developing <span className="text-purple-400 font-semibold">spam detection systems</span> with 95% precision. 
              I&apos;m passionate about creating AI solutions that make a real-world impact.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I&apos;m not training models or building full-stack applications, I&apos;m exploring the latest in AI research, 
              contributing to open-source projects, or working on innovative side projects.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Current Focus:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> Master&apos;s at UC - Advanced ML & NLP
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> Open to ML Engineer opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> Building AI-powered web applications
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Key Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h3>
              <div className="grid grid-cols-4 gap-4">
                {techStack.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="glass rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                    >
                      <Icon size={32} style={{ color: tech.color }} className="group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-gray-400 group-hover:text-gray-300">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
