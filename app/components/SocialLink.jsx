'use client';

import { motion } from 'framer-motion';

export default function SocialLink({ href, icon: Icon, label, iconColor = 'text-white' }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card flex items-center transition-all ease-in-out justify-between px-3 sm:px-5 py-3 sm:py-4 rounded-xl text-white w-full group"
      whileHover={{ scaleX: 1.025, transition: { duration: 0.1 } }}
      whileTap={{ scaleX: 0.98 }}
    >
      <div className="flex items-center min-w-0">
        <div className={`rounded-full bg-white/10 p-1.5 sm:p-2 mr-2 sm:mr-3 social-icon ${iconColor} group-hover:bg-white/20 transition-all duration-250 ease-out flex-shrink-0`}>
          <Icon size={16} className="text-[14px] sm:text-[16px]" />
        </div>
        <span className="font-medium text-sm sm:text-base truncate">{label}</span>
      </div>
      <div className="text-white/40 group-hover:text-white/80 transition-all duration-250 ease-in-out transform group-hover:translate-x-1 flex-shrink-0 ml-2">
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </div>
    </motion.a>
  );
} 