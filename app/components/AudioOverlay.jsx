'use client';

import { motion } from 'framer-motion';

export default function AudioOverlay({ onInitialize }) {
  return (
    <motion.div 
      className="fixed cursor-pointer inset-0 z-50 backdrop-blur-xl flex items-center justify-center bg-black/70"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onInitialize}
    >
      <div className="text-center p-8 cursor-pointer">
        <motion.div 
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center pulse"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18V6L21 12L9 18Z" fill="white"/>
          </svg>
        </motion.div>
        <h2 className="text-2xl font-bold mb-3 text-white">Click to enable music</h2>
        <p className="text-white/60 max-w-sm">
          The full experience includes background music. Click anywhere to continue.
        </p>
      </div>
    </motion.div>
  );
} 