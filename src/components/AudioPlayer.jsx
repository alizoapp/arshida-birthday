import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
        setHasStarted(true);
      }
    };

    window.addEventListener('startMusic', handleStart);
    return () => {
      window.removeEventListener('startMusic', handleStart);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio 
        loop 
        ref={audioRef} 
        src="/assets/music/The_metro_proposal(128k).mp3" 
      />
      

    </>
  );
}