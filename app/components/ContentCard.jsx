'use client';

import { motion } from 'framer-motion';

export default function ContentCard({ title, description, icon: Icon, href, className = '' }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`glass-card p-3 sm:p-5 rounded-xl flex items-center group ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17,
        mass: 0.5 
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center min-w-0">
          {Icon && (
            <div className="mr-3 sm:mr-4 text-white bg-white/[0.08] p-2 sm:p-3 rounded-xl group-hover:bg-white/10 transition-all duration-150 ease-out flex-shrink-0">
              <Icon size={16} className="sm:text-[20px]" />
            </div>
          )}
          <div className="min-w-0">
            <h3 className="font-medium text-white text-sm sm:text-base truncate">{title}</h3>
            {description && (
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1 truncate max-w-[140px] sm:max-w-[240px] md:max-w-[320px]">{description}</p>
            )}
          </div>
        </div>
        <div className="text-white/30 group-hover:text-white/40 transition-all duration-150 ease-out transform group-hover:translate-x-1 flex-shrink-0 ml-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
    </motion.a>
  );
} 