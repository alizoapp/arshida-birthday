import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleStart = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
      }
    };

    const handleToggleMute = () => {
      if (audioRef.current) {
        audioRef.current.muted = !audioRef.current.muted;
        window.dispatchEvent(new CustomEvent('muteStateChanged', { detail: audioRef.current.muted }));
      }
    };

    window.addEventListener('startMusic', handleStart);
    window.addEventListener('toggleMute', handleToggleMute);
    return () => {
      window.removeEventListener('startMusic', handleStart);
      window.removeEventListener('toggleMute', handleToggleMute);
    };
  }, []);

  return (
    <audio 
      loop 
      ref={audioRef} 
      src="/assets/music/The_metro_proposal(128k).mp3" 
    />
  );
}