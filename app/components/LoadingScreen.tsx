'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 4;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: '#0c0a09' }}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="RSK"
            width={140}
            height={50}
            className="mx-auto object-contain"
            priority
            style={{ height: 'auto' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-mono text-[0.6rem] tracking-[0.25em] uppercase mb-8" style={{ color: '#a8a29e' }}
        >
          ML Engineer · Full-Stack Developer
        </motion.p>

        <div className="w-48 mx-auto">
          <div className="h-px relative overflow-hidden" style={{ background: 'rgba(250,250,249,0.1)' }}>
            <motion.div
              className="absolute inset-y-0 left-0 bg-accent"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15, ease: 'linear' }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-[0.55rem] mt-3 tracking-wider" style={{ color: '#8a8580' }}
          >
            {progress < 100 ? 'loading' : 'ready'}
          </motion.p>
        </div>

        <noscript>
          <style>{`.fixed { display: none; }`}</style>
        </noscript>
      </div>
    </motion.div>
  );
}
