import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Page01Opening() {
  // States: 'closed' -> 'opened' -> 'cinematic' -> 'settled'
  const [step, setStep] = useState('closed');



  const handleOpen = () => {
    // Start music immediately on the first interaction
    window.dispatchEvent(new Event('startMusic'));
    
    // Trigger realistic 3D confetti burst from the envelope location
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.55 },
      colors: ['#E96B91', '#D68C9F', '#D4AF37', '#FFF9F2'],
      disableForReducedMotion: true,
      zIndex: 100
    });
    
    // Show the 'opened' state (envelope expanding + confetti)
    setStep('opened');
    
    // Automatically transition to the cinematic reel after the envelope animation
    setTimeout(() => {
      setStep('cinematic');
      setTimeout(() => setStep('settled'), 4000);
    }, 1500);
  };

  return (
    <motion.div
      className="story-section"
      style={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 'calc(env(safe-area-inset-top) + 20px)',
        paddingBottom: 'calc(env(safe-area-inset-bottom) + 20px)',
        overflow: 'hidden', 
        background: '#FFF9F2',
        position: 'relative',
        minHeight: '100vh'
      }}
    >
      {/* Global subtle grain */}
      <div style={{ 
        position: 'absolute', inset: 0, opacity: 0.35, 
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(246, 182, 200, 0.15) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(201, 154, 69, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none', zIndex: 0 
      }} />

      {/* =========================================
          STATE 1 & 2: THE SCRAPBOOK ENVELOPE 
          ========================================= */}
      <AnimatePresence>
        {(step === 'closed' || step === 'opened') && (
          <div style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 50 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, scale: step === 'opened' ? 1.05 : 1 }}
              exit={{ opacity: 0, scale: 1.5, filter: 'blur(12px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
              style={{ width: '310px', height: '220px' }}
            >
            {/* Ambient motion wrapper */}
            <motion.div
              animate={{ y: [-4, 4, -4], rotate: [-1, 1, -1] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              {/* Card Body */}
              <motion.div 
                layout
                style={{
                  position: 'absolute', inset: 0,
                  background: '#FFFCFA',
                  borderRadius: '16px',
                  boxShadow: step === 'opened' 
                    ? '0 30px 60px rgba(73,59,56,0.15), inset 0 0 0 1px rgba(214,140,159,0.4)' 
                    : '0 15px 35px rgba(73,59,56,0.1), inset 0 0 0 1px rgba(214,140,159,0.2)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  overflow: 'hidden',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <AnimatePresence mode="wait">
                  {step === 'closed' ? (
                    <motion.div key="closed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }} transition={{ duration: 0.4 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <p className="handwritten" style={{ fontSize: '1.2rem', color: 'var(--color-ink)', marginBottom: '8px', opacity: 0.8 }}>A little Gift for you</p>
                      <h2 className="handwritten" style={{ fontSize: '3.6rem', color: 'var(--color-berry)', marginBottom: '30px' }}>Arshida</h2>
                      <motion.button
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.92 }}
                        onClick={handleOpen}
                        style={{
                          background: 'linear-gradient(135deg, #E96B91 0%, #D68C9F 100%)',
                          color: '#fff', border: 'none', padding: '12px 34px', borderRadius: '30px',
                          fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '1rem', letterSpacing: '2px',
                          boxShadow: '0 6px 20px rgba(233,107,145,0.4)', cursor: 'pointer'
                        }}
                      >
                        OPEN
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div key="opened" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                      <p className="handwritten" style={{ fontSize: '1.8rem', color: 'var(--color-berry)', opacity: 0.8 }}>Opening...</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Tape Detail */}
              <div style={{ position: 'absolute', top: '-12px', right: '30px', width: '45px', height: '18px', background: 'rgba(255,255,255,0.5)', transform: 'rotate(12deg)', backdropFilter: 'blur(4px)', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }} />
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>

      {/* =========================================
          STATE 3 & 4: THE CINEMATIC TRANSFORMATION 
          ========================================= */}
      {(step === 'cinematic' || step === 'settled') && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}
          style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none' }}
        >
          {/* Ambient Decorative Chaos */}
          <motion.img src="/assets/funny memory/Smiling Yellow Star.png" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, y: [-3, 3, -3], rotate: [10, -10, 10] }} transition={{ opacity: { delay: 2.5 }, scale: { type: 'spring', delay: 2.5 }, y: { repeat: Infinity, duration: 4 }, rotate: { repeat: Infinity, duration: 5 } }} style={{ position: 'absolute', top: '230px', right: '40px', width: '28px', filter: 'sepia(1) saturate(3) hue-rotate(-20deg)', zIndex: 10 }} />
          <motion.img src="/assets/13 — Flower : Daisy Decoration.png" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, y: [2, -2, 2], rotate: [0, 15, 0] }} transition={{ opacity: { delay: 2.8 }, scale: { type: 'spring', delay: 2.8 }, y: { repeat: Infinity, duration: 5 }, rotate: { repeat: Infinity, duration: 7 } }} style={{ position: 'absolute', top: '300px', left: '30px', width: '32px', zIndex: 10 }} />

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5, duration: 1 }} className="handwritten" style={{ fontSize: '1.2rem', color: 'var(--color-berry)', marginTop: '80px', zIndex: 10, opacity: 0.85 }}>
        
          </motion.p>

          <div style={{ position: 'relative', width: '100%', maxWidth: '350px', height: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             
             {/* MAGIC STROKE EFFECT - Dissolves from the button tap */}
             <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, zIndex: 20, overflow: 'visible' }}>
               <motion.path d="M 175 300 C 50 200, 250 50, -50 -50" fill="none" stroke="var(--color-berry)" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0.6 }} animate={{ pathLength: 1, opacity: 0 }} transition={{ duration: 1.0, ease: "easeOut" }} />
             </svg>

             {/* HAPPY (Curved textPath flying in) */}
             <motion.div
               initial={{ offsetDistance: "0%", scale: 1.6, opacity: 0 }} animate={{ offsetDistance: "100%", scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               style={{ position: 'absolute', top: '10px', left: '0', width: 'max-content', offsetPath: "path('M -80 -50 C 20 -50, 60 40, 120 40')", offsetRotate: "0deg", zIndex: 3 }}
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
               style={{ position: 'absolute', top: '20px', left: '0', width: 'max-content', offsetPath: "path('M 420 180 C 320 180, 260 95, 170 95')", offsetRotate: "0deg", zIndex: 2 }}
             >
                <svg width="260" height="100" viewBox="0 0 260 100" style={{ overflow: 'visible' }}>
                  <path id="birthdayCurve" d="M 10 30 Q 130 90 250 30" fill="transparent" />
                  <text fill="#D68C9F" fontSize="6rem" fontFamily="'Caveat', cursive" filter="drop-shadow(0px 4px 10px rgba(214,140,159,0.2))">
                    <textPath href="#birthdayCurve" startOffset="50%" textAnchor="middle">Birthday</textPath>
                  </text>
                </svg>
             </motion.div>

             {/* ARSHIDA 3D RIBBON REVEAL */}
             <div style={{ position: 'absolute', top: '150px', left: '50%', transform: 'translateX(-50%)', width: '280px', height: '110px', zIndex: 4 }}>
                <svg width="280" height="110" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0 }}>
                   <defs>
                      <mask id="arshida-mask"><motion.path d="M -10 55 L 290 55" stroke="white" strokeWidth="110" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8, duration: 1.2, ease: "easeInOut" }} /></mask>
                   </defs>
                   <image href="/assets/02 — Arshida Name.png" width="280" height="110" preserveAspectRatio="xMidYMid contain" mask="url(#arshida-mask)" />
                </svg>
             </div>

             {/* "22" Accent */}
             <motion.div
               initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 2.6, duration: 0.8, type: "spring" }}
               className="handwritten"
               style={{ position: 'absolute', right: '35px', top: '135px', fontSize: '3.8rem', color: '#D4AF37', transform: 'rotate(-8deg)', textShadow: '0 2px 8px rgba(212,175,55,0.25)', zIndex: 5 }}
             >
               22
             </motion.div>

             {/* REAL ARSHIDA PHOTO */}
             <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '230px', height: '230px', zIndex: 10 }}>
               <motion.div
                 initial={{ opacity: 0, y: 50, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 2.8, duration: 1.2, ease: "easeOut" }}
                 style={{ width: '100%', height: '100%' }}
               >
                  <img src="/assets/Arshida Birthday Hero Cutout.png" alt="Arshida" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  <div style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', width: '170px', height: '12px', background: 'radial-gradient(ellipse at center, rgba(73, 59, 56, 0.18) 0%, transparent 70%)', zIndex: -1 }} />
               </motion.div>
             </div>
          </div>

          {/* Greeting Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.8, duration: 1.0 }}
            style={{ zIndex: 20, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <h2 className="handwritten" style={{ fontSize: '1.9rem', color: 'var(--color-berry)', marginBottom: '16px' }}>Happy 22nd, Arshida!</h2>
            <p className="handwritten" style={{ fontSize: '1.35rem', color: 'var(--color-ink)', marginBottom: '18px', opacity: 0.9 }}>A little memory book for my best friend</p>
            <p style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-ink)', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '310px', textAlign: 'center', opacity: 0.85 }}>From one ordinary college conversation<br />to years of laughter, chaos and memories.</p>
          </motion.div>
          
        </motion.div>
      )}
    </motion.div>
  );
}
