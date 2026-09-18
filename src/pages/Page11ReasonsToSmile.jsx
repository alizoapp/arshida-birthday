import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Page11ReasonsToSmile() {
  const [isActive, setIsActive] = useState(false);
  const { scrollYProgress } = useScroll();
  const cakeY = useTransform(scrollYProgress, [0.7, 1], [0, -30]);
  const heroY = useTransform(scrollYProgress, [0.7, 1], [0, -50]);
  const noteY = useTransform(scrollYProgress, [0.7, 1], [0, -15]);

  useEffect(() => {
    if (!isActive) return;
    
    // Shoot star-shaped confetti from both sides
    const defaults = {
      spread: 90,
      startVelocity: 45,
      particleCount: 30,
      shapes: ['star'],
      colors: ['#D4AF37', '#FFD700', '#E96B91', '#F6B6C8'],
      zIndex: 100,
      disableForReducedMotion: true
    };
    
    confetti({ ...defaults, angle: 60, origin: { x: 0, y: 0.3 } });
    confetti({ ...defaults, angle: 120, origin: { x: 1, y: 0.3 } });
  }, [isActive]);

  return (
    <motion.div
      onViewportEnter={() => setIsActive(true)}
      onViewportLeave={() => setIsActive(false)}
      viewport={{ amount: 0.3 }}
      className="story-section"
      style={{
        position: 'relative',
        background: '#FFF9F2',
        height: 'auto',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflowX: 'hidden',
        paddingTop: '60px',
        paddingBottom: '80px',
        zIndex: 1
      }}
    >
      {/* Subtle Paper Texture Overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.4, mixBlendMode: 'multiply', pointerEvents: 'none',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
      }} />

      {/* Decorative Paper Edges */}
      <div style={{ position: 'absolute', top: '-10px', left: '-10px', width: '80px', height: '80px', background: '#F6B6C8', opacity: 0.3, filter: 'blur(2px)', clipPath: 'polygon(0 0, 100% 0, 0 100%)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '120px', height: '120px', background: '#F6B6C8', opacity: 0.2, filter: 'blur(4px)', clipPath: 'polygon(100% 100%, 100% 0, 0 100%)', zIndex: 0 }} />

      {/* Hero Container */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
        
        {/* 3D Birthday Artwork */}
        <motion.img 
          loading="lazy" 
          src="/assets/01-happy-birthday-22.png" 
          alt="Happy Birthday 22"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
          style={{ width: '90%', zIndex: 10, filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.15))', y: heroY }}
        />

        {/* Cake */}
        <motion.img 
          loading="lazy" 
          src="/assets/03-birthday-cake.png" 
          alt="Cake"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1, type: 'spring' }}
          style={{ width: '170px', marginTop: '-15px', zIndex: 15, y: cakeY, filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}
        />
      </div>

      {/* Custom SVG Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
        style={{ width: '100%', maxWidth: '280px', height: '30px', margin: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <svg viewBox="0 0 280 30" width="100%" height="100%" style={{ overflow: 'visible' }}>
          <path d="M 40 15 Q 90 5 130 15" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <path d="M 150 15 Q 190 25 240 15" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          {/* Left Flower */}
          <circle cx="35" cy="15" r="3" fill="#D4AF37" opacity="0.8" />
          <circle cx="30" cy="12" r="2" fill="#D4AF37" opacity="0.5" />
          <circle cx="30" cy="18" r="2" fill="#D4AF37" opacity="0.5" />
          <circle cx="40" cy="12" r="2" fill="#D4AF37" opacity="0.5" />
          <circle cx="40" cy="18" r="2" fill="#D4AF37" opacity="0.5" />
          {/* Right Flower */}
          <circle cx="245" cy="15" r="3" fill="#D4AF37" opacity="0.8" />
          <circle cx="240" cy="12" r="2" fill="#D4AF37" opacity="0.5" />
          <circle cx="240" cy="18" r="2" fill="#D4AF37" opacity="0.5" />
          <circle cx="250" cy="12" r="2" fill="#D4AF37" opacity="0.5" />
          <circle cx="250" cy="18" r="2" fill="#D4AF37" opacity="0.5" />
          {/* Center Sparkle */}
          <path d="M 140 10 L 142 14 L 146 15 L 142 16 L 140 20 L 138 16 L 134 15 L 138 14 Z" fill="#D4AF37" />
        </svg>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0, duration: 0.8 }}
        style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', width: '100%' }}
      >
        <motion.img loading="lazy" 
          src="/assets/pink-brush-stroke.png"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.3, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{ position: 'absolute', width: '260px', height: '60px', objectFit: 'contain', zIndex: 0 }}
        />
        <h2 className="handwritten" style={{ fontSize: '3.4rem', color: 'var(--color-berry)', margin: 0, position: 'relative', zIndex: 5, transform: 'rotate(-2deg)' }}>
          Today is your day.
        </h2>
        {/* Tiny Sparkles */}
        <span style={{ position: 'absolute', top: '-5px', right: '15%', color: '#D4AF37', fontSize: '1rem' }}>✦</span>
        <span style={{ position: 'absolute', bottom: '5px', left: '10%', color: '#D4AF37', fontSize: '0.7rem' }}>✦</span>
      </motion.div>

      {/* Secondary Line */}
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ fontFamily: 'Georgia, serif', fontWeight: 500, fontSize: '1.25rem', color: 'var(--color-berry)', margin: '0 0 20px 0', textAlign: 'center' }}
      >
        22 looks good on you, Arshida.
      </motion.h3>

      {/* Small Editorial Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px', width: '200px' }}
      >
        <div style={{ height: '1px', flex: 1, background: 'rgba(143,49,84,0.3)' }} />
        <span style={{ color: 'var(--color-berry)', fontSize: '0.7rem' }}>✦</span>
        <div style={{ height: '1px', flex: 1, background: 'rgba(143,49,84,0.3)' }} />
      </motion.div>

      {/* Main Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{ maxWidth: '315px', textAlign: 'center', zIndex: 10 }}
      >
        <p style={{ fontFamily: 'Georgia, serif', color: '#4a3b38', fontSize: '17px', lineHeight: '1.6', margin: 0 }}>
          Here's to more laughter,<br />
          more adventures,<br />
          more chaos,<br />
          and many more memories.
        </p>
      </motion.div>

      {/* Chapter 01 Scrapbook Note */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: 3 }}
        viewport={{ once: true }}
        transition={{ delay: 1.9, duration: 1.0, type: 'spring' }}
        style={{ position: 'relative', marginTop: '45px', width: '220px', zIndex: 15, y: noteY }}
      >
        {/* The torn paper note (Text is already baked into the image) */}
        <img loading="lazy" 
          src="/assets/handmade-scrapbook-paper-note.png" 
          alt="Scrapbook Note" 
          style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(2px 6px 12px rgba(73,59,56,0.15))' }}
        />
      </motion.div>

      {/* Side Handwritten Note */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="handwritten"
        style={{ position: 'absolute', right: '15px', top: '55%', fontSize: '1.1rem', color: 'var(--color-berry)', transform: 'rotate(8deg)', zIndex: 5, lineHeight: 1.2, textAlign: 'center' }}
      >
        Good<br />Friends<br />Brighter<br />Days
        <span style={{ display: 'block', color: '#D4AF37', fontSize: '0.8rem', marginTop: '4px' }}>✧</span>
      </motion.div>

      {/* Bottom Floral Decorations */}
      <motion.img loading="lazy" 
        src="/assets/bottom-floral-decoration.png"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.4, duration: 1.5 }}
        style={{ position: 'absolute', bottom: '-20px', left: '-30px', width: '150px', zIndex: 5, filter: 'drop-shadow(2px 8px 12px rgba(0,0,0,0.1))', pointerEvents: 'none' }}
      />
      <motion.img loading="lazy" 
        src="/assets/13-flower-daisy-decoration.png"
        initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5, duration: 1.5 }}
        style={{ position: 'absolute', bottom: '40px', right: '-20px', width: '90px', zIndex: 2, filter: 'drop-shadow(2px 6px 10px rgba(0,0,0,0.1))', pointerEvents: 'none' }}
      />

      {/* Keep Scrolling Cue */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 3.0, duration: 1 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px', zIndex: 20 }}
      >
        <motion.span 
          animate={{ y: [0, 5, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ fontSize: '1.2rem', color: 'var(--color-berry)', marginBottom: '4px' }}
        >
          ↓
        </motion.span>
        <span className="handwritten" style={{ fontSize: '1.3rem', color: 'var(--color-berry)' }}>keep scrolling</span>
      </motion.div>

    </motion.div>
  );
}
