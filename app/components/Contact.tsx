'use client';

import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiPhone, FiDownload } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

export default function Contact() {
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'kosanaraghusai@gmail.com',
      link: 'mailto:kosanaraghusai@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '(513) 338-9801',
      link: 'tel:+15133389801',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Cincinnati, OH',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      link: 'https://github.com/raghusai-09',
      color: 'hover:text-purple-400',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/raghusai09/',
      color: 'hover:text-cyan-400',
    },
    {
      icon: SiLeetcode,
      label: 'LeetCode',
      link: 'https://leetcode.com/raghusai',
      color: 'hover:text-yellow-400',
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Let&apos;s Connect</h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I&apos;m currently open to ML Engineer roles and exciting collaboration opportunities. 
            Let&apos;s build something amazing together!
          </p>
        </motion.div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xl font-semibold text-green-400">Available for Opportunities</span>
          </div>
          <p className="text-gray-400">
            Currently pursuing Master&apos;s in Computer Science at University of Cincinnati • Open to full-time ML Engineer roles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-200">Get In Touch</h3>
            
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  {item.link ? (
                    <a href={item.link} className="flex items-center gap-4">
                      <div className="p-3 bg-linear-to-br from-cyan-500/20 to-purple-500/20 rounded-xl group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                        <Icon size={24} className="text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <p className="text-lg text-gray-200 group-hover:text-cyan-400 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-linear-to-br from-cyan-500/20 to-purple-500/20 rounded-xl">
                        <Icon size={24} className="text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <p className="text-lg text-gray-200">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* Resume Download */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-3 glass rounded-2xl p-6 hover:bg-linear-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 group"
            >
              <FiDownload size={24} className="text-cyan-400 group-hover:animate-bounce" />
              <span className="text-lg font-semibold text-gray-200 group-hover:text-cyan-400 transition-colors">
                Download Resume
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-200">Connect Online</h3>

            {/* Social Cards */}
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className={`flex items-center justify-between glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group ${social.color}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-linear-to-br from-cyan-500/20 to-purple-500/20 rounded-xl group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                        <Icon size={24} />
                      </div>
                      <span className="text-xl font-semibold text-gray-200">{social.label}</span>
                    </div>
                    <svg
                      className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.a>
                );
              })}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 mt-8"
            >
              <h4 className="text-2xl font-bold mb-4 gradient-text">Ready to Collaborate?</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Whether you&apos;re looking for an ML Engineer, want to discuss a project, or just want to connect, 
                I&apos;d love to hear from you!
              </p>
              <a
                href="mailto:kosanaraghusai@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-500  font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <FiMail size={20} />
                Send a Message
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center text-gray-400 text-sm"
        >
          <p>© 2026 Raghu Sai Kosana. Built with Next.js, Tailwind CSS & Framer Motion.</p>
        </motion.div>
      </div>
    </section>
  );
}
