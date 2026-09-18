import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './index.css';

import Page01Opening from './pages/Page01Opening';
import Page02BeforeMemories from './pages/Page02BeforeMemories';
import Page03FirstMeet from './pages/Page03FirstMeet';
import Page04CollegeChaos from './pages/Page04CollegeChaos';
import Page05FunnyMemory from './pages/Page05FunnyMemory';
import Page06PhotoCarousel from './pages/Page06PhotoCarousel';
import Page07Timeline from './pages/Page07Timeline';
import Page08MemoryObjects from './pages/Page08MemoryObjects';

import Page10FunnyTruths from './pages/Page10FunnyTruths';
import Page11ReasonsToSmile from './pages/Page11ReasonsToSmile';
import Page12PhotoWall from './pages/Page12PhotoWall';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioInited, setAudioInited] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Lock scrolling until the user taps OPEN on the first page
    document.body.style.overflow = isUnlocked ? 'auto' : 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isUnlocked]);

  useEffect(() => {
    const handleStart = () => setIsUnlocked(true);
    window.addEventListener('startMusic', handleStart);
    return () => window.removeEventListener('startMusic', handleStart);
  }, []);

  const handleFirstInteraction = () => {
    if (!audioInited) {
      setAudioInited(true);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });
    document.addEventListener('scroll', handleFirstInteraction, { once: true });
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [audioInited]);

  return (
    <div className="app-container">
      <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      
      {/* 
        Sequential Vertical Render
        Each page acts as a discrete vertical section.
      */}
      <Page01Opening />
      <Page02BeforeMemories />
      <Page03FirstMeet />
      <Page04CollegeChaos />
      <Page05FunnyMemory />
      <Page06PhotoCarousel />
      <Page07Timeline />
      <Page08MemoryObjects />

      <Page10FunnyTruths />
      <Page11ReasonsToSmile />
      <Page12PhotoWall />
    </div>
  );
}

export default App;
