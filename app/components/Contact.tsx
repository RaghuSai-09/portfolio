'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiLinkedin, FiDownload, FiArrowUpRight, FiSend, FiCheck } from 'react-icons/fi';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const available = [true, true, true, true, true, false, false];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setError('');
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSent(true);
      formRef.current.reset();
    } catch {
      setError('Failed to send. Try emailing me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12">
          <p className="section-label mb-3">Connect</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">Get in touch</h2>
          <div className="editorial-rule mt-6 w-24" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="space-y-5 mb-14">
          <p className="text-base text-foreground/80 leading-[1.8] font-medium">
            I&apos;m looking for full-time <span className="highlight-text">ML Engineer</span> or <span className="highlight-text">NLP Engineer</span> roles starting mid-2025.
            The work that excites me most sits at the intersection of language understanding and production systems.
          </p>
          <p className="text-base text-secondary leading-[1.8]">
            My Master&apos;s at UC deepened my understanding of distributed systems and advanced ML,
            and my production experience means I can ship, not just prototype. If you&apos;re building something where language matters, I&apos;d like to hear about it.
          </p>
        </motion.div>

        {/* Availability */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }} className="mb-14">
          <p className="section-label mb-4">Availability</p>
          <div className="flex gap-2">
            {days.map((day, i) => (
              <div key={day} className={`w-11 h-11 flex items-center justify-center text-[0.7rem] font-mono transition-colors ${available[i] ? 'availability-active' : 'availability-inactive'}`}>
                {day}
              </div>
            ))}
          </div>
          <p className="text-[0.75rem] text-muted mt-3">Open to conversations Monday through Friday</p>
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }} viewport={{ once: true }} className="mb-14">
          <p className="section-label mb-6">Send a message</p>
          <form ref={formRef} onSubmit={handleSubmit} className="paper-card p-6 md:p-8 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="from_name" className="block text-[0.75rem] font-mono text-muted tracking-wider uppercase mb-2">Name</label>
                <input id="from_name" name="name" type="text" required className="w-full bg-transparent border-b border-border focus:border-accent text-foreground text-[0.9rem] py-2.5 outline-none transition-colors placeholder:text-muted" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-[0.75rem] font-mono text-muted tracking-wider uppercase mb-2">Email</label>
                <input id="email" name="email" type="email" required className="w-full bg-transparent border-b border-border focus:border-accent text-foreground text-[0.9rem] py-2.5 outline-none transition-colors placeholder:text-muted" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-[0.75rem] font-mono text-muted tracking-wider uppercase mb-2">Message</label>
              <textarea id="message" name="message" required rows={4} className="w-full bg-transparent border-b border-border focus:border-accent text-foreground text-[0.9rem] py-2.5 outline-none transition-colors resize-none placeholder:text-muted" placeholder="What would you like to discuss?" />
            </div>
            <div className="flex items-center justify-between pt-2">
              <div>
                {sent && <p className="text-accent text-[0.8rem] font-mono flex items-center gap-2"><FiCheck size={14} /> Message sent!</p>}
                {error && <p className="text-red-500 text-[0.8rem] font-mono">{error}</p>}
              </div>
              <button type="submit" disabled={sending} className="flex items-center gap-2 bg-foreground text-background px-6 py-2.5 text-[0.8rem] font-mono hover:bg-accent transition-colors disabled:opacity-50 cursor-pointer">
                <FiSend size={14} />
                {sending ? 'Sending...' : 'Send message'}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact links */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} viewport={{ once: true }} className="space-y-3">
          <a href="mailto:kosanaraghusai@gmail.com" className="paper-card p-5 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 flex items-center justify-center border border-border-light group-hover:border-accent group-hover:bg-accent transition-all">
                <FiMail size={16} className="text-secondary group-hover:text-white transition-colors" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-[0.8rem] text-subtle">kosanaraghusai@gmail.com</p>
              </div>
            </div>
            <FiArrowUpRight size={16} className="text-muted group-hover:text-accent transition-colors" />
          </a>

          <a href="https://www.linkedin.com/in/raghusai09/" target="_blank" rel="noopener noreferrer" className="paper-card p-5 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 flex items-center justify-center border border-border-light group-hover:border-accent group-hover:bg-accent transition-all">
                <FiLinkedin size={16} className="text-secondary group-hover:text-white transition-colors" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">LinkedIn</p>
                <p className="text-[0.8rem] text-subtle">linkedin.com/in/raghusai09</p>
              </div>
            </div>
            <FiArrowUpRight size={16} className="text-muted group-hover:text-accent transition-colors" />
          </a>

          <a href="/resume.pdf" download="Raghu_Sai_Kosana_Resume.pdf" className="paper-card p-5 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 flex items-center justify-center border border-border-light group-hover:border-accent group-hover:bg-accent transition-all">
                <FiDownload size={16} className="text-secondary group-hover:text-white transition-colors" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">Resume</p>
                <p className="text-[0.8rem] text-subtle">Download PDF</p>
              </div>
            </div>
            <FiArrowUpRight size={16} className="text-muted group-hover:text-accent transition-colors" />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} viewport={{ once: true }} className="mt-24 pt-8 border-t border-border-light">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-[0.75rem] text-muted">© 2026 Raghu Sai Kosana</p>
            <p className="text-[0.75rem] text-muted">Built with Next.js, Tailwind CSS, and Framer Motion</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
