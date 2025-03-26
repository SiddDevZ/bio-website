'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaDiscord, FaGamepad } from 'react-icons/fa';

export default function DiscordProfile() {
  const [discordData] = useState({
    username: 'fein.bio',
    displayName: 'fein.bio',
    avatar: '/profile.jpg',
    hasHypesquad: true,
    status: 'online',
    activity: 'Playing Minecraft',
    userId: '1354296744199979018'
  });

  return (
    <motion.div 
      className="glass-card p-4 sm:p-5 w-full overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center">
          <div className="relative mr-3 flex-shrink-0">
            <Image 
              src={discordData.avatar} 
              alt="Discord Avatar" 
              width={40} 
              height={40} 
              className="rounded-full border-2 border-white/20 relative z-10 sm:w-[50px] sm:h-[50px]"
            />
            <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#111] z-20`}>
            </div>
          </div>
          
          <div className="min-w-0">
            <div className="flex items-center flex-wrap gap-x-2">
              <h3 className="font-bold text-base sm:text-lg text-white truncate max-w-[110px] sm:max-w-[160px]">{discordData.displayName}</h3>
              {discordData.hasHypesquad && (
                <div className="flex-shrink-0">
                  <Image 
                    src="/hypesquad.png" 
                    alt="Hypesquad Badge" 
                    width={16} 
                    height={16} 
                    className="sm:w-[18px] sm:h-[18px]"
                  />
                </div>
              )}
            </div>
            {discordData.activity && (
              <div className="flex items-center text-xs sm:text-sm text-gray-300 truncate max-w-[150px] sm:max-w-full">
                <span>{discordData.activity}</span>
              </div>
            )}
          </div>
        </div>
        
        <motion.a
          href={`https://discord.com/users/${discordData.userId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn flex items-center gap-1 whitespace-nowrap text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 15,
            mass: 0.5 
          }}
        >
          <FaDiscord size={12} className="sm:text-[14px]" />
          <span>Add</span>
          <span className="hidden sm:inline"> on Discord</span>
        </motion.a>
      </div>
    </motion.div>
  );
} 