'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const experiences = [
  {
    company: 'Phamax.ch',
    role: 'Full Stack Developer',
    period: 'Jul 2024 - Dec 2024',
    location: 'Remote',
    achievements: [
      'Architected and deployed an AI-powered medical chatbot using Microsoft Bot Framework, Python, FastAPI, and Azure Bot Service, processing 500+ patient queries daily with 40% faster response times',
      'Implemented advanced NLP pipelines using spaCy, NLTK, and transformer models (BERT) for intent classification and entity recognition, achieving 30% improvement in semantic accuracy and 92% user satisfaction rate',
      'Engineered automated ETL data pipelines with Python, SQL Server, and Azure Data Factory to extract conversation analytics, reducing manual reporting overhead by 10+ hours/week and enabling real-time performance monitoring',
      'Integrated RESTful APIs and WebSockets for real-time communication, implementing OAuth 2.0 authentication and HIPAA-compliant data encryption protocols',
      'Collaborated with cross-functional teams (product, QA, medical staff) in Agile sprints, conducting code reviews and maintaining 95% test coverage using Jest and Pytest',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: 'VOIS',
    role: 'Software Engineer',
    period: 'Jun 2022 - Jun 2023',
    location: 'Remote',
    achievements: [
      'Designed and developed an enterprise-grade spam detection system using Python, scikit-learn, and TensorFlow, implementing ensemble ML models (Naive Bayes, Logistic Regression, Random Forest) that processed 50,000+ emails daily with 95% precision and 93% recall',
      'Performed comprehensive feature engineering using TF-IDF vectorization, n-gram analysis, and word embeddings (Word2Vec) to improve model accuracy by 18% over baseline implementations',
      'Built and deployed production-ready ML pipeline with Docker containerization, CI/CD using Jenkins, and model versioning with MLflow, reducing deployment time by 60%',
      'Published peer-reviewed research paper on comparative analysis of ML algorithms for spam detection, contributing to academic knowledge in Document Intelligence and NLP',
      'Created interactive real-time monitoring dashboard using Streamlit, React, and PostgreSQL, enabling stakeholders to track system performance metrics and reducing manual review time by 40%',
      'Partnered with DevOps and SRE teams to implement API gateway integration, load balancing, and monitoring using Prometheus and Grafana, achieving 99.5% uptime',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    company: '1Stop.ai (Personifwy)',
    role: 'AI Engineer',
    period: 'Oct 2021 - May 2022',
    location: 'Remote',
    achievements: [
      'Engineered production-grade deep learning models for computer vision applications using TensorFlow, Keras, and PyTorch, including object detection (YOLO v3), handwritten digit classification (CNN-MNIST), and fake news detection (LSTM-NLP), achieving 90%+ accuracy across 100K+ data samples',
      'Designed and optimized custom CNN architectures with transfer learning (ResNet, VGG16, MobileNet) for image classification tasks, implementing data augmentation and regularization techniques that reduced overfitting by 25%',
      'Built end-to-end ML pipelines incorporating data preprocessing, feature extraction, model training, hyperparameter tuning (Grid Search, Bayesian Optimization), and model evaluation using cross-validation techniques',
      'Performed exploratory data analysis (EDA) using Pandas, NumPy, and Matplotlib on large-scale datasets (500K+ records), identifying data quality issues and implementing data cleaning strategies that improved model performance by 15%',
      'Created comprehensive technical documentation and Jupyter notebooks for reproducible research, implementing MLOps best practices including version control (Git), experiment tracking, and model registry',
      'Collaborated with data scientists and software engineers in Agile environment, presenting model insights to stakeholders and contributing to 5+ successful AI product launches',
    ],
    color: 'from-green-500 to-teal-500',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-blue-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-purple-500 via-blue-500 to-green-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative md:ml-20"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute -left-13 top-6 w-4 h-4 rounded-full bg-linear-to-r hidden md:block"
                  style={{
                    backgroundImage: `linear-linear(to right, var(--tw-linear-stops))`,
                  }}
                  whileHover={{ scale: 1.5 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  <div className={`w-full h-full rounded-full bg-linear-to-r ${exp.color}`} />
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                </motion.div>

                {/* Card */}
                <motion.div
                  className="group relative p-6 rounded-2xl bg-linear-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-linear-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-lg">
                          <FiBriefcase className="text-purple-400" />
                          <span className={`font-semibold bg-linear-to-r ${exp.color} bg-clip-text text-transparent`}>
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                        <FiCalendar className="text-purple-400" />
                        <span className="text-sm font-mono">{exp.period}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex gap-3 text-gray-300 leading-relaxed group/item"
                        >
                          <span className="text-purple-400 mt-1.5 shrink-0 group-hover/item:text-blue-400 transition-colors">
                            ▹
                          </span>
                          <span className="group-hover/item:text-white transition-colors">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative p-6 rounded-2xl bg-linear-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all group"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all" />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-2 text-cyan-400">Master of Engineering</h4>
                <p className="text-xl text-gray-300 mb-2">Computer Science</p>
                <p className="text-purple-400 font-semibold mb-4">University of Cincinnati</p>
                <div className="flex items-center justify-between text-gray-400 mb-4">
                  <span>Aug 2024 - Present</span>
                  <span className="text-cyan-400 font-bold">GPA: 3.93/4.0</span>
                </div>
                <p className="text-sm text-gray-400">
                  NLP • Advanced ML Techniques • Advance Algorithms • Distributed OS • Software Testing Q&A
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative p-6 rounded-2xl bg-linear-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all group"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all" />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-2 text-cyan-400">Bachelor of Technology</h4>
                <p className="text-xl text-gray-300 mb-2">Computer Science</p>
                <p className="text-purple-400 font-semibold mb-4">SRM University - AP</p>
                <div className="flex items-center justify-between text-gray-400 mb-4">
                  <span>Sep 2020 - May 2024</span>
                  <span className="text-cyan-400 font-bold">GPA: 3.75/4.0</span>
                </div>
                <p className="text-sm text-gray-400">
                  AI • Machine Learning • Deep Learning • Database Management • Data Mining & Warehousing
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
        

