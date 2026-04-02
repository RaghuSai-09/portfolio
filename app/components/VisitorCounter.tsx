'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const LAST_COUNTED_KEY = 'rsk_portfolio_last_counted';
        let lastCountedStr = null;
        try { lastCountedStr = localStorage.getItem(LAST_COUNTED_KEY); } catch (e) {}
        
        const now = Date.now();
        const TWELVE_HOURS = 12 * 60 * 60 * 1000;

        let shouldIncrement = true;
        if (lastCountedStr) {
          const lastCounted = parseInt(lastCountedStr, 10);
          if (now - lastCounted < TWELVE_HOURS) {
            shouldIncrement = false;
          }
        }

        const endpoint = shouldIncrement 
          ? 'https://api.counterapi.dev/v1/raghusai_portfolio/views/up'
          : 'https://api.counterapi.dev/v1/raghusai_portfolio/views';

        const res = await fetch(endpoint, { cache: 'no-store' });
        if (!res.ok) throw new Error('Network response was not ok');
        
        const data = await res.json();
        
        if (data && typeof data.count === 'number') {
          setCount(data.count);
          if (shouldIncrement) {
             try { localStorage.setItem(LAST_COUNTED_KEY, now.toString()); } catch (e) {}
          }
        } else {
          setCount(0); // fallback
        }
      } catch (error) {
        console.warn('Failed to fetch visitor count, using fallback:', error);
        setCount(42); // Fallback number so the UI doesn't just vanish
      }
    }
    
    fetchCount();
  }, []);

  return (
    <AnimatePresence>
      {count !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <div className="paper-card px-4 py-2.5 rounded-sm flex items-center gap-3 glass-panel">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <div className="flex flex-col">
              <span className="text-[0.6rem] font-mono text-muted uppercase tracking-wider leading-none mb-1">
                Portfolio Views
              </span>
              <span className="text-sm font-semibold text-foreground leading-none">
                {count.toLocaleString()}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
