"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const loadingMessages = [
  "Initializing AI systems...",
  "Loading neural networks...",
  "Compiling portfolio data...",
  "Optimizing experience...",
  "Almost there..."
];

export default function LoadingScreen({ onLoadingComplete }: readonly { onLoadingComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [particles, setParticles] = useState<Array<{x: number; y: number; delay: number}>>([]);

  useEffect(() => {
    // Generate particles client-side
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2
      }))
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1500);
    return () => clearInterval(msgInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden will-change-opacity"
      style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
    >
      {/* Animated Gradient Waves Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-cyan-900/20 to-pink-900/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute inset-0 bg-linear-to-tl from-cyan-900/20 via-purple-900/20 to-blue-900/20"
          animate={{
            backgroundPosition: ['100% 100%', '0% 0%'],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="text-center flex flex-col items-center relative z-10">
        {/* 3D Rotating Logo with Glitch Effect */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
          animate={{ 
            scale: 1, 
            opacity: 1, 
            rotateY: 0,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center will-change-transform relative"
        >
          <motion.div
            animate={{
              rotateY: [0, 360],
              rotateZ: [0, 5, -5, 0]
            }}
            transition={{
              rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
              rotateZ: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={500} 
              height={140} 
              className="object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]" 
              unoptimized 
              priority
              style={{ height: 'auto' }}
            />
          </motion.div>

          {/* Glitch effect */}
          <motion.div
            className="absolute inset-0 mix-blend-screen pointer-events-none"
            animate={{
              opacity: [0, 0, 0, 1, 0],
              x: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              times: [0, 0.8, 0.85, 0.9, 1]
            }}
          >
            <Image 
              src="/favicon.ico" 
              alt="" 
              width={500} 
              height={140} 
              className="object-contain opacity-50" 
              unoptimized 
              priority
              style={{ height: 'auto' }} 
            />
          </motion.div>
        </motion.div>

        {/* Circular Progress Ring */}
        <div className="relative w-32 h-32 mb-6">
          <svg className="transform -rotate-90 w-32 h-32">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="rgba(75, 85, 99, 0.3)"
              strokeWidth="8"
              fill="none"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                strokeDasharray: "1000",
                strokeDashoffset: "0"
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-2xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              key={progress}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {progress}%
            </motion.span>
          </div>
        </div>

        {/* Typing Animation for Messages */}
        <div className="h-6 mb-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={messageIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-cyan-400 text-sm font-mono"
            >
              {loadingMessages[messageIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
                backgroundColor: [
                  "rgb(168, 85, 247)",
                  "rgb(236, 72, 153)",
                  "rgb(6, 182, 212)",
                  "rgb(168, 85, 247)"
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Pulsing Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-purple-500/30"
              initial={{ width: 100, height: 100, opacity: 0 }}
              animate={{
                width: [100, 400],
                height: [100, 400],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
