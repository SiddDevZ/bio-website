'use client';

import { motion } from 'framer-motion';

export default function SocialLink({ href, icon: Icon, label, iconColor = 'text-white' }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card flex items-center justify-between px-5 py-4 rounded-xl text-white w-full group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center">
        <div className={`rounded-full bg-white/10 p-2 mr-3 social-icon ${iconColor} group-hover:bg-white/20 transition-all`}>
          <Icon size={18} />
        </div>
        <span className="font-medium">{label}</span>
      </div>
      <div className="text-white/40 group-hover:text-white/80 transition-all transform group-hover:translate-x-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </div>
    </motion.a>
  );
} 