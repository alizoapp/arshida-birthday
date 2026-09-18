import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Page01Opening() {
  const [step, setStep] = useState('idle'); // 'idle' -> 'opening' -> 'cinematic'

  const handleOpen = () => {
    if (step !== 'idle') return;
    
    // Start music immediately on the first interaction
    window.dispatchEvent(new Event('startMusic'));
    
    setStep('opening');

    // 0.35s tiny paper particles escape
    setTimeout(() => {
      confetti({ 
        particleCount: 15, 
        spread: 40, 
        origin: { y: 0.5 }, 
        colors: ['#FFF9F2', '#F4EAE1'], 
        disableForReducedMotion: true, 
        zIndex: 100,
        ticks: 50
      });
    }, 350);

    // 1.10s confetti and tiny stars gently release
    setTimeout(() => {
      confetti({ 
        particleCount: 80, 
        spread: 70, 
        origin: { y: 0.55 }, 
        colors: ['#E96B91', '#D68C9F', '#D4AF37'], 
        shapes: ['star', 'circle'], 
        disableForReducedMotion: true, 
        zIndex: 100,
        ticks: 200
      });
    }, 1100);

    // 1.50s transition into the cinematic reel
    setTimeout(() => {
      setStep('cinematic');
    }, 1500);
  };

  return (
    <motion.div
      className="story-section"
      style={{
        background: '#FFF9F2',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: step === 'cinematic' ? 'flex-start' : 'center',
        overflow: 'hidden',
        paddingTop: 'calc(env(safe-area-inset-top) + 20px)',
        paddingBottom: 'calc(env(safe-area-inset-bottom) + 20px)',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      {/* SVG Noise Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <filter id="subtleGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.04 0" />
        </filter>
        <filter id="flapShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
        </filter>
      </svg>
      
      {/* Background Textures */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.6, filter: 'url(#subtleGrain)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ 
        position: 'absolute', inset: 0, 
        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 65%)', 
        pointerEvents: 'none', zIndex: 0 
      }} />

      {/* Background particles/decorations */}
      <AnimatePresence>
        {step === 'idle' && (
          <motion.div exit={{ opacity: 0, transition: { duration: 1 } }}>
            <motion.img 
              loading="lazy"
              src="/assets/14-confetti-stars.png" 
              animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} 
              style={{ position: 'absolute', top: '15%', left: '8%', width: '35px', opacity: 0.6, pointerEvents: 'none', zIndex: 5 }} 
            />
            <motion.img 
              loading="lazy"
              src="/assets/13-flower-daisy-decoration.png" 
              animate={{ y: [5, -5, 5], rotate: [-10, -5, -10] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} 
              style={{ position: 'absolute', bottom: '20%', right: '5%', width: '55px', filter: 'blur(1px)', opacity: 0.6, pointerEvents: 'none', zIndex: 5 }} 
            />
            <motion.img 
              loading="lazy"
              src="/assets/11-paper-airplane.png" 
              animate={{ x: [0, 10, 0], y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }} 
              style={{ position: 'absolute', top: '18%', right: '12%', width: '40px', opacity: 0.4, transform: 'rotate(-15deg)', pointerEvents: 'none', zIndex: 5 }} 
            />
            <motion.img 
              loading="lazy"
              src="/assets/funny memory/smiling-yellow-star.png" 
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.7, 0.3] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
              style={{ position: 'absolute', bottom: '25%', left: '10%', width: '25px', pointerEvents: 'none', zIndex: 5 }} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Area Teaser */}
      <AnimatePresence>
        {step === 'idle' && (
          <motion.div
            exit={{ opacity: 0, y: -20, transition: { duration: 0.8 } }}
            style={{ position: 'absolute', top: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10, width: '100%' }}
          >
            <motion.span 
              animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '8px' }}
            >✦</motion.span>
            <span className="handwritten" style={{ fontSize: '1.4rem', color: 'var(--color-berry)', letterSpacing: '1px' }}>
              something special is waiting...
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Envelope Component */}
      <AnimatePresence mode="wait">
        {step !== 'cinematic' && (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, y: 30 }}
            animate={
              step === 'idle' 
                ? { opacity: 1, y: [-4, 4, -4], scale: 1, transition: { y: { repeat: Infinity, duration: 5, ease: "easeInOut" }, opacity: { duration: 0.8 } } }
                : { opacity: 1, y: -15, scale: 1, transition: { duration: 0.2, ease: "easeOut" } } // The "lift"
            }
            exit={{ scale: 12, opacity: 0, filter: 'blur(8px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
            style={{ position: 'relative', width: '100%', maxWidth: '340px', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 20 }}
          >
            {/* Card Layers Wrapper */}
            <div style={{ position: 'relative', width: '100%', height: '240px' }}>
              
              {/* 1. Back flap shadow layer */}
              <div style={{ position: 'absolute', inset: '4px', background: 'rgba(73,59,56,0.15)', filter: 'blur(10px)', borderRadius: '6px' }} />
              
              {/* 2. Main Envelope Back */}
              <div style={{ position: 'absolute', inset: 0, background: '#F4EAE1', borderRadius: '4px', boxShadow: 'inset 0 0 15px rgba(139,115,85,0.08)' }}>
                {/* Subtle paper texture overlay */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.3, filter: 'url(#subtleGrain)', mixBlendMode: 'multiply', borderRadius: '4px' }} />
              </div>

              {/* 3. The Inner Paper Card (Pulls out when opening) */}
              <motion.div
                initial={{ y: 0 }}
                animate={step === 'opening' ? { y: -65 } : { y: 0 }}
                transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
                style={{ 
                  position: 'absolute', top: '10px', left: '10px', right: '10px', bottom: '15px', 
                  background: '#FFFCFA', borderRadius: '4px', 
                  boxShadow: '0 -2px 12px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.8)', 
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  padding: '15px 20px', zIndex: 2 
                }}
              >
                <div style={{ position: 'absolute', inset: 0, opacity: 0.15, filter: 'url(#subtleGrain)', mixBlendMode: 'multiply' }} />
                
                <span className="handwritten" style={{ fontSize: '1.2rem', color: '#6A5653', opacity: 0.9 }}>
                  A little gift for you
                </span>
                
                <h2 className="handwritten" style={{ fontSize: '4.2rem', color: 'var(--color-berry)', margin: '5px 0 10px 0', transform: 'rotate(-3deg)', textShadow: '0 2px 4px rgba(159,49,90,0.08)' }}>
                  Arshida
                </h2>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="handwritten" style={{ fontSize: '1.1rem', color: '#8A6E6A' }}>open when you're ready</span>
                  <span style={{ color: '#D4AF37', fontSize: '0.8rem' }}>✦</span>
                </div>
              </motion.div>

              {/* 4. Envelope Front Flaps (SVG overlay for perfect shadows) */}
              <svg width="100%" height="100%" viewBox="0 0 340 240" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}>
                {/* Left Flap */}
                <polygon points="0,0 170,140 0,240" fill="#F0E3D5" filter="url(#flapShadow)" />
                {/* Right Flap */}
                <polygon points="340,0 170,140 340,240" fill="#EAD7C6" filter="url(#flapShadow)" />
                {/* Bottom Flap */}
                <polygon points="0,240 170,150 340,240" fill="#F4EAE1" filter="url(#flapShadow)" />
              </svg>
              
              {/* Tiny gold seal sticker */}
              <div style={{ position: 'absolute', bottom: '38%', left: '50%', transform: 'translate(-50%, 50%)', width: '32px', height: '32px', background: 'radial-gradient(circle at 30% 30%, #F5D76E, #D4AF37)', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4 }}>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem' }}>✦</span>
              </div>

              {/* Tape & Scrapbook Decorations */}
              <img loading="lazy" src="/assets/tape-strip.png" style={{ position: 'absolute', top: '-15px', right: '40px', width: '60px', transform: 'rotate(12deg)', zIndex: 10, opacity: 0.85, filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.1))' }} alt="tape" />
              <img loading="lazy" src="/assets/13-flower-daisy-decoration.png" style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '75px', zIndex: 10, transform: 'rotate(-25deg)', filter: 'drop-shadow(2px 6px 8px rgba(0,0,0,0.15))' }} alt="flower" />
            </div>

            {/* OPEN Button */}
            <motion.div
              animate={step === 'opening' ? { scale: 0.9, opacity: 0, y: 10 } : { scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              style={{ marginTop: '45px', zIndex: 30 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpen}
                disabled={step !== 'idle'}
                style={{
                  position: 'relative',
                  background: 'linear-gradient(135deg, #D68C9F 0%, #C37085 100%)',
                  color: '#FFF9F2',
                  border: 'none',
                  padding: '16px 50px',
                  borderRadius: '40px',
                  fontFamily: 'var(--font-ui)',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  letterSpacing: '3px',
                  cursor: step === 'idle' ? 'pointer' : 'default',
                  boxShadow: '0 8px 20px rgba(195,112,133,0.35), inset 0 2px 4px rgba(255,255,255,0.25)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                {/* Button paper texture */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.2, filter: 'url(#subtleGrain)', mixBlendMode: 'overlay', pointerEvents: 'none' }} />
                <motion.span 
                  animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2.5 }}
                  style={{ fontSize: '0.9rem', color: '#F5D76E' }}
                >✦</motion.span>
                OPEN
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Area Teaser */}
      <AnimatePresence>
        {step === 'idle' && (
          <motion.div
            exit={{ opacity: 0, y: 20, transition: { duration: 0.8 } }}
            className="handwritten"
            style={{ position: 'absolute', bottom: '8%', fontSize: '1.2rem', color: 'var(--color-berry)', opacity: 0.75, width: '100%', textAlign: 'center' }}
          >
            made from a few good memories ✦
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          STATE 3: THE CINEMATIC TRANSFORMATION 
          ========================================= */}
      {step === 'cinematic' && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          style={{ width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* Ambient Decorative Chaos */}
          <motion.img src="/assets/funny memory/smiling-yellow-star.png" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, y: [-3, 3, -3], rotate: [10, -10, 10] }} transition={{ opacity: { delay: 2.5 }, scale: { type: 'spring', delay: 2.5 }, y: { repeat: Infinity, duration: 4 }, rotate: { repeat: Infinity, duration: 5 } }} style={{ position: 'absolute', top: '230px', right: '40px', width: '28px', filter: 'sepia(1) saturate(3) hue-rotate(-20deg)', zIndex: 10, pointerEvents: 'none' }} />
          <motion.img src="/assets/13-flower-daisy-decoration.png" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, y: [2, -2, 2], rotate: [0, 15, 0] }} transition={{ opacity: { delay: 2.8 }, scale: { type: 'spring', delay: 2.8 }, y: { repeat: Infinity, duration: 5 }, rotate: { repeat: Infinity, duration: 7 } }} style={{ position: 'absolute', top: '300px', left: '30px', width: '32px', zIndex: 10, pointerEvents: 'none' }} />

          <div style={{ position: 'relative', width: '100%', maxWidth: '350px', height: '420px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             
             {/* MAGIC STROKE EFFECT - Dissolves from the button tap */}
             <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, zIndex: 20, overflow: 'visible', pointerEvents: 'none' }}>
               <motion.path d="M 175 300 C 50 200, 250 50, -50 -50" fill="none" stroke="var(--color-berry)" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0.6 }} animate={{ pathLength: 1, opacity: 0 }} transition={{ duration: 1.0, ease: "easeOut" }} />
             </svg>

             {/* HAPPY (Curved textPath flying in) */}
             <motion.div
               initial={{ offsetDistance: "0%", scale: 1.6, opacity: 0 }} animate={{ offsetDistance: "100%", scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               style={{ position: 'absolute', top: '10px', left: '0', width: 'max-content', offsetPath: "path('M -80 -50 C 20 -50, 60 40, 120 40')", offsetRotate: "0deg", zIndex: 3, pointerEvents: 'none' }}
             >
                <svg width="220" height="100" viewBox="0 0 220 100" style={{ overflow: 'visible' }}>
                  <path id="happyCurve" d="M 10 70 Q 110 20 210 60" fill="transparent" />
                  <text fill="var(--color-berry)" fontSize="5.5rem" fontFamily="'Caveat', cursive" filter="drop-shadow(0px 4px 8px rgba(159,49,90,0.15))">
                    <textPath href="#happyCurve" startOffset="50%" textAnchor="middle">Happy</textPath>
                  </text>
                </svg>
             </motion.div>

             {/* BIRTHDAY (Curved textPath flying in from opposite) */}
             <motion.div
               initial={{ offsetDistance: "0%", scale: 1.4, opacity: 0 }} animate={{ offsetDistance: "100%", scale: 1, opacity: 1 }} transition={{ delay: 0.9, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
               style={{ position: 'absolute', top: '20px', left: '0', width: 'max-content', offsetPath: "path('M 420 180 C 320 180, 260 95, 170 95')", offsetRotate: "0deg", zIndex: 2, pointerEvents: 'none' }}
             >
                 <svg width="320" height="100" viewBox="0 0 320 100" style={{ overflow: 'visible' }}>
                  <path id="birthdayCurve" d="M 10 30 Q 160 90 310 30" fill="transparent" />
                  <text fill="#D68C9F" fontSize="6rem" fontFamily="'Caveat', cursive" filter="drop-shadow(0px 4px 10px rgba(214,140,159,0.2))">
                    <textPath href="#birthdayCurve" startOffset="50%" textAnchor="middle">Birthday</textPath>
                  </text>
                </svg>
             </motion.div>

             {/* ARSHIDA 3D RIBBON REVEAL */}
             <div style={{ position: 'absolute', top: '150px', left: '50%', transform: 'translateX(-50%)', width: '280px', height: '110px', zIndex: 4, pointerEvents: 'none' }}>
                <svg width="280" height="110" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0 }}>
                   <defs>
                      <mask id="arshida-mask"><motion.path d="M -10 55 L 290 55" stroke="white" strokeWidth="110" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8, duration: 1.2, ease: "easeInOut" }} /></mask>
                   </defs>
                   <image href="/assets/02-arshida-name.png" width="280" height="110" preserveAspectRatio="xMidYMid contain" mask="url(#arshida-mask)" />
                </svg>
             </div>

             {/* "22" Accent */}
             <motion.div
               initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 2.6, duration: 0.8, type: "spring" }}
               className="handwritten"
               style={{ position: 'absolute', right: '35px', top: '135px', fontSize: '3.8rem', color: '#D4AF37', transform: 'rotate(-8deg)', textShadow: '0 2px 8px rgba(212,175,55,0.25)', zIndex: 5, pointerEvents: 'none' }}
             >
               22
             </motion.div>

             {/* REAL ARSHIDA PHOTO */}
             <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '230px', height: '230px', zIndex: 10, pointerEvents: 'none' }}>
               <motion.div
                 initial={{ opacity: 0, y: 50, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 2.8, duration: 1.2, ease: "easeOut" }}
                 style={{ width: '100%', height: '100%' }}
               >
                  <img src="/assets/arshida-birthday-hero-cutout.png" alt="Arshida" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  <div style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', width: '170px', height: '12px', background: 'radial-gradient(ellipse at center, rgba(73, 59, 56, 0.18) 0%, transparent 70%)', zIndex: -1 }} />
               </motion.div>
             </div>
          </div>

          {/* =========================================
              LOWER CONTENT AREA
              ========================================= */}
          <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', zIndex: 20 }}>
            
            {/* Background Floral Decoration */}
            <motion.img 
              loading="lazy"
              src="/assets/bottom-floral-decoration.png"
              initial={{ opacity: 0, x: -20, rotate: -10 }}
              animate={{ opacity: 0.85, x: 0, rotate: 0 }}
              transition={{ delay: 5.2, duration: 1.5, ease: "easeOut" }}
              style={{ position: 'absolute', bottom: '30px', left: '-10px', width: '140px', zIndex: -1, pointerEvents: 'none' }}
            />

            {/* Primary Greeting */}
            <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '35px', pointerEvents: 'none' }}>
              <motion.img 
                loading="lazy"
                src="/assets/pink-brush-stroke.png"
                initial={{ opacity: 0, scaleX: 0, originX: 0.5 }}
                animate={{ opacity: 0.4, scaleX: 1 }}
                transition={{ delay: 3.8, duration: 1.2, ease: "easeOut" }}
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '280px', height: '110px', objectFit: 'contain', zIndex: -1 }}
              />
              
              {/* Sparkles */}
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 1, 0.5, 1], scale: [0, 1, 0.9, 1] }} transition={{ delay: 4.2, duration: 2, repeat: Infinity, repeatType: "reverse" }} style={{ position: 'absolute', top: '-5px', right: '50px', color: '#D4AF37', fontSize: '1.2rem', zIndex: 5 }}>✦</motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 1, 0.3, 1], scale: [0, 1, 0.8, 1] }} transition={{ delay: 4.5, duration: 2.5, repeat: Infinity, repeatType: "reverse" }} style={{ position: 'absolute', bottom: '5px', left: '70px', color: '#D4AF37', fontSize: '0.9rem', zIndex: 5 }}>✦</motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 1, 0.6, 1], scale: [0, 1, 0.9, 1] }} transition={{ delay: 4.3, duration: 1.8, repeat: Infinity, repeatType: "reverse" }} style={{ position: 'absolute', top: '15px', left: '50px', color: '#D4AF37', fontSize: '0.8rem', zIndex: 5 }}>✨</motion.div>

              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4.0, duration: 0.8 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 className="handwritten" style={{ fontSize: '2.4rem', color: 'var(--color-berry)', margin: 0, lineHeight: 1 }}>Happy 22nd,</h3>
                <h2 className="handwritten" style={{ fontSize: '4.6rem', color: 'var(--color-berry)', margin: 0, lineHeight: 0.9, textShadow: '0 2px 4px rgba(159,49,90,0.1)' }}>Arshida!</h2>
              </motion.div>
            </div>

            {/* Editorial Divider */}
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 4.4, duration: 1.0 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px', width: '100%', maxWidth: '300px', pointerEvents: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '15px' }}>
                <div style={{ flex: 1, height: '1px', background: 'rgba(159,49,90,0.35)' }} />
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.75rem', letterSpacing: '3px', color: '#6e5c58', textTransform: 'uppercase' }}>A Little Memory Book</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(159,49,90,0.35)' }} />
              </div>
              <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.65rem', letterSpacing: '4px', color: '#8a7672', textTransform: 'uppercase', marginTop: '10px' }}>For My Best Friend</span>
            </motion.div>

            {/* Body Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4.6, duration: 0.8 }}
              style={{ fontFamily: 'Georgia, serif', color: '#4a3b38', fontSize: '16px', lineHeight: '1.55', maxWidth: '310px', textAlign: 'center', marginBottom: '15px', margin: 0, pointerEvents: 'none' }}
            >
              From one ordinary college conversation<br />to years of laughter, chaos,<br />and unforgettable memories.
            </motion.p>

            {/* Small Handwritten Line */}
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 0.85 }} transition={{ delay: 4.8, duration: 0.8 }}
              className="handwritten"
              style={{ fontSize: '1.5rem', color: 'var(--color-berry)', transform: 'rotate(-2deg)', marginBottom: '50px', marginTop: '20px', pointerEvents: 'none' }}
            >
              somehow, we made a lot of memories. <span style={{ color: '#D4AF37', fontSize: '1.1rem' }}>✦</span>
            </motion.p>

            {/* Scrapbook Memory Note */}
            <motion.div 
              initial={{ opacity: 0, y: 20, rotate: 0 }} animate={{ opacity: 1, y: 0, rotate: 3 }} transition={{ delay: 5.0, duration: 1.0, type: 'spring' }}
              style={{ position: 'relative', width: '170px', marginLeft: 'auto', marginRight: '30px', marginBottom: '70px', filter: 'drop-shadow(2px 8px 15px rgba(73,59,56,0.15))', pointerEvents: 'none' }}
            >
              <img loading="lazy" src="/assets/handmade-scrapbook-paper-note.png" alt="Scrapbook note" style={{ width: '100%', display: 'block' }} />
              <img loading="lazy" src="/assets/tape-strip.png" alt="Tape" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%) rotate(-4deg)', width: '65px', opacity: 0.9, filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.1))' }} />
            </motion.div>

            {/* Scroll Cue */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 5.5, duration: 1.0 }}
              className="handwritten"
              style={{ fontSize: '1.3rem', color: 'var(--color-berry)', marginBottom: '30px', pointerEvents: 'none' }}
            >
              keep scrolling &darr;
            </motion.div>

          </div>
          
        </motion.div>
      )}
    </motion.div>
  );
}
