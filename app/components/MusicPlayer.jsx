'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { Howl } from 'howler';

export default function MusicPlayer({ isInitialized = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [songTitle, setSongTitle] = useState('');
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const soundRef = useRef(null);
  const timeoutRef = useRef(null);
  
  // Songs playlist
  const songs = [
    '/audio/Corpse - E-GIRLS ARE RUINING MY LIFE.mp3'
  ];
  
  // Get song name without extension or path
  const getSongName = (path) => {
    const filename = path.split('/').pop();
    return filename.replace(/\.[^/.]+$/, "");
  };
  
  const loadSong = (index) => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.unload();
    }
    
    if (songs[index]) {
      const songName = getSongName(songs[index]);
      setSongTitle(songName);
      
      soundRef.current = new Howl({
        src: [songs[index]],
        html5: true,
        volume: isMuted ? 0 : volume,
        autoplay: isInitialized,
        onload: () => {
          setDuration(soundRef.current.duration());
        },
        onplay: () => {
          setIsPlaying(true);
        },
        onpause: () => {
          setIsPlaying(false);
        },
        onstop: () => {
          setIsPlaying(false);
        },
        onend: () => {
          nextSong();
        }
      });
      
      if (isInitialized) {
        soundRef.current.play();
      }
    }
  };
  
  useEffect(() => {
    if (isInitialized && songs.length > 0) {
      loadSong(currentSongIndex);
    }
    
    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current.unload();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isInitialized]);
  
  useEffect(() => {
    const updateTime = () => {
      if (soundRef.current && isPlaying) {
        setCurrentTime(soundRef.current.seek());
        timeoutRef.current = setTimeout(updateTime, 250);
      }
    };
    
    if (isPlaying) {
      updateTime();
    } else if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isPlaying]);
  
  const togglePlay = () => {
    if (!soundRef.current) return;
    
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
  };
  
  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    loadSong(nextIndex);
  };
  
  const prevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    loadSong(prevIndex);
  };
  
  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (soundRef.current) {
      soundRef.current.seek(seekTime);
    }
  };

  const toggleMute = () => {
    if (!soundRef.current) return;
    
    if (isMuted) {
      soundRef.current.volume(volume);
    } else {
      soundRef.current.volume(0);
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (soundRef.current && !isMuted) {
      soundRef.current.volume(newVolume);
    }
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
      if (soundRef.current) {
        soundRef.current.volume(newVolume);
      }
    }
  };
  
  const formatTime = (time) => {
    if (!time || isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  if (!isInitialized) {
    return (
      <motion.div 
        className="glass-card p-5 w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="text-white/60 py-4">
          Click anywhere to enable music player...
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div 
      className="glass-card p-5 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 pulse">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18V6L21 12L9 18Z" fill="white"/>
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-white">{songTitle || 'Loading...'}</h3>
            <p className="text-xs text-gray-400">{isPlaying ? 'Now Playing' : 'Paused'}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={toggleMute} className="text-white hover:text-gray-300 transition-colors">
            {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 rounded-lg appearance-none bg-white/20 cursor-pointer"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <div className="progress-bar mb-2 relative">
          <input
            type="range"
            min="0"
            max={duration || 100}
            step="0.01"
            value={currentTime || 0}
            onChange={handleSeek}
            className="absolute inset-0 w-full h-full z-10 opacity-0 cursor-pointer"
          />
          <div 
            className="progress-bar-fill" 
            style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      
      <div className="flex justify-center items-center space-x-8">
        <motion.button 
          className="text-white/70 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSong}
        >
          <FaBackward size={14} />
        </motion.button>
        <motion.button 
          className="bg-white text-black hover:bg-opacity-90 p-3 rounded-full transition-all"
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} className="ml-0.5" />}
        </motion.button>
        <motion.button 
          className="text-white/70 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSong}
        >
          <FaForward size={14} />
        </motion.button>
      </div>
    </motion.div>
  );
} 