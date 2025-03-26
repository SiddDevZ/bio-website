'use client';

import { motion } from 'framer-motion';

export default function ContentCard({ title, description, icon: Icon, href, className = '' }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`glass-card p-5 rounded-xl flex items-center group ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          {Icon && (
            <div className="mr-4 text-white bg-white/10 p-3 rounded-xl group-hover:bg-white/20 transition-all">
              <Icon size={20} />
            </div>
          )}
          <div>
            <h3 className="font-medium text-white">{title}</h3>
            {description && (
              <p className="text-sm text-gray-400 mt-1 truncate max-w-[240px] sm:max-w-[320px]">{description}</p>
            )}
          </div>
        </div>
        <div className="text-white/40 group-hover:text-white/80 transition-all transform group-hover:translate-x-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
    </motion.a>
  );
} 