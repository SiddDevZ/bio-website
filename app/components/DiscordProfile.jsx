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
      className="glass-card p-5 w-full overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center">
          <div className="relative mr-4">
            <Image 
              src={discordData.avatar} 
              alt="Discord Avatar" 
              width={50} 
              height={50} 
              className="rounded-full border-2 border-white/20 relative z-10"
            />
            <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#111] z-20`}>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <h3 className="font-bold text-lg text-white">{discordData.displayName}</h3>
              {discordData.hasHypesquad && (
                <div className="ml-2">
                  <Image 
                    src="/hypesquad.png" 
                    alt="Hypesquad Badge" 
                    width={18} 
                    height={18} 
                  />
                </div>
              )}
            </div>
            {discordData.activity && (
              <div className="flex items-center mt-1 text-sm text-gray-300">
                <span>{discordData.activity}</span>
              </div>
            )}
          </div>
        </div>
        <motion.a
          href={`https://discord.com/users/${discordData.userId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn flex items-center gap-2 whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 15,
            mass: 0.5 
          }}
        >
          <FaDiscord size={14} />
          <span>Add on Discord</span>
        </motion.a>
      </div>
    </motion.div>
  );
} 