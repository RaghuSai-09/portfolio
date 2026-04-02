'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';

const experiences = [
  {
    company: 'Phamax.ch',
    role: 'Full Stack Developer',
    period: 'Jul 2024 – Dec 2024',
    bullets: [
      'Built AI-powered medical chatbot from scratch serving 5,000+ users across web and Microsoft Teams, processing 50k+ queries daily',
      'Rebuilt backend from Flask to async FastAPI with Redis caching — reduced query timeout rates from 30% to under 2%',
      'Fine-tuned BERT on medical domain data with spaCy NER — improved semantic accuracy by 30%, reaching 92% user satisfaction',
      'Engineered ETL pipelines with Azure Data Factory, eliminating 10+ hours/week of manual reporting',
    ],
  },
  {
    company: 'VOIS',
    role: 'Software Engineer',
    period: 'Jun 2022 – Jun 2023',
    bullets: [
      'Designed and shipped enterprise spam detection system processing 50,000+ emails daily with 95% precision and 93% recall',
      'Built ensemble voting classifier (NB + LR + RF) with TF-IDF and Word2Vec features — 18% improvement over baseline',
      'Containerized ML pipeline with Docker + Jenkins CI/CD + MLflow versioning — reduced deployment time by 60%',
      'Built real-time Streamlit + React monitoring dashboard; maintained 99.5% uptime. Published peer-reviewed research paper',
    ],
  },
  {
    company: '1Stop.ai (Personifwy)',
    role: 'AI Engineer',
    period: 'Oct 2021 – May 2022',
    bullets: [
      'Applied ResNet, VGG16, and MobileNet with custom augmentation — reduced overfitting by 25% on limited training data',
      'Performed EDA on 500K+ records; identified systematic labeling errors — improved model performance by 15%',
      'Built end-to-end ML pipelines across computer vision, NLP, and deep learning on 100K+ data samples',
    ],
  },
];

const education = [
  {
    degree: 'Master of Engineering, Computer Science',
    school: 'University of Cincinnati',
    period: 'Aug 2024 – Present',
    gpa: '3.93/4.0',
    coursework: 'NLP, Advanced ML, Distributed Systems, Advanced Algorithms',
  },
  {
    degree: 'Bachelor of Technology, Computer Science',
    school: 'SRM University – AP',
    period: 'Sep 2020 – May 2024',
    gpa: '3.75/4.0',
    coursework: 'AI, Machine Learning, Deep Learning, Data Mining',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-3">Career</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">Experience</h2>
          <div className="editorial-rule mt-6 w-24" />
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative py-10 first:pt-0 border-b border-border-light last:border-0"
            >
              <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-12">
                <div className="md:pt-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FiBriefcase size={14} className="text-accent" />
                    <p className="text-base font-bold text-foreground">{exp.company}</p>
                  </div>
                  <p className="text-[0.95rem] font-semibold text-accent mb-1">{exp.role}</p>
                  <p className="font-mono text-[0.65rem] text-muted tracking-wider">{exp.period}</p>
                </div>

                <div>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="bullet-item flex gap-3 text-[0.9rem] text-foreground/80 leading-[1.7] py-1 px-2 -mx-2">
                        <span className="text-accent mt-1.5 shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="flex items-center gap-2 mb-10">
            <FiBookOpen size={16} className="text-accent" />
            <p className="section-label">Academics</p>
          </div>
          <h3 className="font-serif text-2xl text-foreground tracking-tight mb-10">Education</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="paper-card p-6"
              >
                <p className="font-serif text-base text-foreground mb-1">{edu.degree}</p>
                <p className="text-sm text-secondary mb-4">{edu.school}</p>
                <div className="flex items-baseline justify-between font-mono text-[0.65rem] text-muted tracking-wider mb-3">
                  <span>{edu.period}</span>
                  <span className="text-accent font-medium text-[0.75rem]">GPA: {edu.gpa}</span>
                </div>
                <div className="editorial-rule-center mb-3" />
                <p className="text-[0.78rem] text-subtle">{edu.coursework}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
