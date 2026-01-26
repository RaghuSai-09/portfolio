'use client';

import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiPhone, FiDownload, FiSend, FiCheck, FiCopy, FiUser, FiMessageSquare, FiAlertCircle } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('error');
      setErrorMessage('Failed to send message. Please try emailing directly.');
      
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('kosanaraghusai@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getButtonClassName = () => {
    const baseClasses = 'w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3';
    
    switch (formStatus) {
      case 'success':
        return `${baseClasses} bg-green-500 hover:bg-green-600`;
      case 'error':
        return `${baseClasses} bg-red-500 hover:bg-red-600`;
      case 'sending':
        return `${baseClasses} bg-gray-500 cursor-wait`;
      default:
        return `${baseClasses} bg-linear-to-r from-cyan-500 to-purple-500 hover:shadow-lg hover:shadow-cyan-500/50`;
    }
  };
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
              href="/resume.pdf"
              download="Raghu_Sai_Kosana_Resume.pdf"
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

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center gap-6"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300 ${social.color}`}
                    title={social.label}
                  >
                    <Icon size={28} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-200">Send Me a Message</h3>

            <motion.form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Name Input */}
              <div className="relative group">
                <label htmlFor="name" className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <FiUser size={16} />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none group-hover:border-white/20"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div className="relative group">
                <label htmlFor="email" className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <FiMail size={16} />
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none group-hover:border-white/20"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject Input */}
              <div className="relative group">
                <label htmlFor="subject" className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <FiMessageSquare size={16} />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none group-hover:border-white/20"
                  placeholder="Project Collaboration"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative group">
                <label htmlFor="message" className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <FiMessageSquare size={16} />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none resize-none group-hover:border-white/20"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={formStatus === 'sending'}
                whileHover={{ scale: formStatus === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: formStatus === 'idle' ? 0.98 : 1 }}
                className={getButtonClassName()}
              >
                {formStatus === 'sending' && (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    <FiCheck size={20} />
                    Message Sent!
                  </>
                )}
                {formStatus === 'error' && (
                  <>
                    <FiAlertCircle size={20} />
                    Failed to Send
                  </>
                )}
                {formStatus === 'idle' && (
                  <>
                    <FiSend size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {formStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm text-center"
                >
                  Thanks! I&apos;ll get back to you soon.
                </motion.p>
              )}

              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm text-center space-y-2"
                >
                  <p>{errorMessage}</p>
                  <a
                    href="mailto:kosanaraghusai@gmail.com"
                    className="text-cyan-400 hover:underline inline-flex items-center gap-1"
                  >
                    <FiMail size={14} />
                    kosanaraghusai@gmail.com
                  </a>
                </motion.div>
              )}
            </motion.form>
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
