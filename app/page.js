'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { 
  FaDiscord, 
  FaGithub,
  FaMoon,
  FaHome,
  FaCode,
  FaExternalLinkAlt
} from "react-icons/fa";

import TypingAnimation from "./components/TypingAnimation";
import SocialLink from "./components/SocialLink";
import ContentCard from "./components/ContentCard";
import DiscordProfile from "./components/DiscordProfile";
import MusicPlayer from "./components/MusicPlayer";
import AudioOverlay from "./components/AudioOverlay";

// Custom globe icon component
const GlobeIcon = ({ size = 18, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    <path d="M2 12h20"></path>
  </svg>
);

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isAudioInitialized, setIsAudioInitialized] = useState(false);
  const audioRef = useRef(null);
  
  // Initialize MusicPlayer audio on first click/interaction
  const handleAudioInitialize = () => {
    setIsAudioInitialized(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <main className="min-h-screen py-8 relative overflow-hidden">
      <AnimatePresence>
        {!isAudioInitialized && (
          <AudioOverlay onInitialize={handleAudioInitialize} />
        )}
      </AnimatePresence>

      {/* Main content container */}
      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <motion.div
          className="glass-card p-8 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Profile Section */}
            <motion.div 
              className="flex flex-col items-center text-center"
              variants={itemVariants}
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            >
              <div className="flex items-center flex-col mb-4">
                <div className="relative mb-3">
                  <div className="absolute -inset-1 bg-gradient-to-r from-white to-gray-400 rounded-full opacity-20 blur-md"></div>
                  <div className="relative">
                    <Image
                      src="/profile.jpg" 
                      alt="fein.bio" 
                      width={90} 
                      height={90} 
                      className="rounded-full border border-white/10 bg-[#111] relative z-10 avatar-glow"
                    />
                  </div>
                </div>
                
                <h1 className="text-2xl font-bold mb-1 gradient-text">fein.bio</h1>
                <div className="mb-3 text-sm text-white/80">
                  <TypingAnimation 
                    strings={[
                      "Darkness is shadow", 
                      "I am a gamer", 
                      "Go for boldness no matter what"
                    ]} 
                    className="inline"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mb-1">
                <motion.a
                  href="https://discord.com/users/1354296744199979018"
                  className="social-icon bg-white/10 p-3 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaDiscord size={20} className="text-[#5865F2]" />
                </motion.a>
                <motion.a
                  href="https://fbi.lc/"
                  className="social-icon bg-white/10 p-3 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GlobeIcon size={20} className="text-white" />
                </motion.a>
                <motion.a
                  href="https://doxed.rest/"
                  className="social-icon bg-white/10 p-3 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GlobeIcon size={20} className="text-white" />
                </motion.a>
                <motion.a
                  href="https://github.com/later-now"
                  className="social-icon bg-white/10 p-3 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={20} className="text-white" />
                </motion.a>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="border-t border-white/10"></div>

            {/* Discord Profile */}
            <motion.div variants={itemVariants}>
              <DiscordProfile />
            </motion.div>

            {/* Music Player */}
            <motion.div variants={itemVariants}>
              <MusicPlayer isInitialized={isAudioInitialized} />
            </motion.div>

            {/* Social Links Section */}
            <motion.div className="space-y-3" variants={itemVariants}>
              <h2 className="text-sm uppercase text-white/60 font-medium tracking-wider mb-2">Links</h2>
              <div className="grid grid-cols-1 gap-3">
                <SocialLink 
                  href="https://anonymous.rip/" 
                  icon={GlobeIcon} 
                  label="anonymous.rip" 
                  iconColor="text-white"
                />
                <SocialLink 
                  href="https://gurl.lol/" 
                  icon={GlobeIcon} 
                  label="gurl.lol" 
                  iconColor="text-white"
                />
                <SocialLink 
                  href="https://punch.mom/" 
                  icon={GlobeIcon} 
                  label="punch.mom" 
                  iconColor="text-white"
                />
                <SocialLink 
                  href="https://tomoonest.xyz/" 
                  icon={FaMoon} 
                  label="tomoonest.xyz" 
                  iconColor="text-white"
                />
                <SocialLink 
                  href="https://moonest.xyz/" 
                  icon={FaMoon} 
                  label="moonest.xyz" 
                  iconColor="text-white"
                />
                <SocialLink 
                  href="https://homicid.es/" 
                  icon={FaHome} 
                  label="homicid.es" 
                  iconColor="text-white"
                />
              </div>
            </motion.div>

            {/* Projects Section */}
            <motion.div className="space-y-3" variants={itemVariants}>
              <h2 className="text-sm uppercase text-white/60 font-medium tracking-wider mb-2">Projects</h2>
              <div className="grid grid-cols-1 gap-3">
                <ContentCard 
                  title="Portfolio" 
                  icon={FaCode} 
                  href="https://fein.bio" 
                  description="My personal portfolio website"
                />
                <ContentCard 
                  title="GitHub" 
                  icon={FaGithub} 
                  href="https://github.com/later-now" 
                  description="My GitHub profile"
                />
              </div>
            </motion.div>
            
            {/* Footer */}
            <motion.div 
              className="text-center text-xs text-white/40 pt-4"
              variants={itemVariants}
            >
              © {new Date().getFullYear()} fein.bio • All rights reserved
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
