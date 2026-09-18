import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Page10FunnyTruths() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const slides = [
    { img: "/assets/images/our first selfy.png", text: "1. The day it all started... our first selfie!" },
    { img: "/assets/images/first year second image in college function.png", text: "2. First year functions, so many memories." },
    { img: "/assets/images/college days photo.png", text: "3. Those unforgettable college days." },
    { img: "/assets/images/college days in 3rd year.png", text: "4. 3rd year, when we ruled the campus." },
    { img: "/assets/images/funny moment - her similing.png", text: "5. Never skip the funny moments." },
    { img: "/assets/images/our internship- but this use the funny moment.png", text: "6. Internship diaries and inside jokes." },
    { img: "/assets/images/this her similing special moments.png", text: "7. Smiling through all the special moments." },
    { img: "/assets/images/her single photos in beautiful-1.png", text: "8. Coffee fixes questionable decisions." },
    { img: "/assets/images/her single photos in beautiful-2.png", text: "9. Some classes become memories." },
    { img: "/assets/images/her single photos in beautiful-3.png", text: "10. Random conversations become stories." },
    { img: "/assets/images/her single photos in beautiful-4.png", text: "11. Good friends make ordinary days better." },
    { img: "/assets/images/her single photos in beautiful-5.png", text: "12. Because your smile is contagious." },
    { img: "/assets/images/her single photos in beautiful-6.png", text: "13. For all the late-night talks." },
    { img: "/assets/images/her single photos in beautiful-7.png", text: "14. Always radiating positive energy." },
    { img: "/assets/images/her single photos in beautiful.png", text: "15. A picture-perfect moment." },
    { img: "/assets/images/i wish her like dimont- in collage days .png", text: "16. Shining bright like a diamond." },
    { img: "/assets/images/our after college first meet.png", text: "17. Our first meet after college!" },
    { img: "/assets/images/the same day of our after the college second  meet in nother friend marrage .png", text: "18. Reuniting at a friend's marriage." },
    { img: "/assets/images/our last meet in kozhikode.jpg", text: "19. Our last meet in Kozhikode." },
    { img: "/assets/images/our first selfy.png", text: "20. Looking back at where we started..." },
    { img: "/assets/images/first year second image in college function.png", text: "21. To all the chaos we survived together." },
    { img: "/assets/images/college days photo.png", text: "22. Here's to 22, and 22 more things to come!", isEnd: true }
  ];

  useEffect(() => {
    if (!isActive) return;
    
    // Global continuous confetti fall starts when user reaches this screen
    const interval = setInterval(() => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: -0.1, y: 0.3 },
        colors: ['#E96B91', '#D68C9F', '#D4AF37'],
        disableForReducedMotion: true,
        zIndex: 100
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1.1, y: 0.3 },
        colors: ['#E96B91', '#D68C9F', '#D4AF37'],
        disableForReducedMotion: true,
        zIndex: 100
      });
    }, 2500);
    
    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    // Auto-scroll every 3 seconds
    const timer = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(timer);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, slides.length, isActive]);

  return (
    <motion.div 
      id="page10"
      className="story-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsActive(true)}
      onViewportLeave={() => setIsActive(false)}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8 }}
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="handwritten"
        style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '30px', maxWidth: '300px', lineHeight: 1.1, color: 'var(--color-berry)', zIndex: 20 }}
      >
        22 Things Worth Remembering
      </motion.h2>

      <div style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '340px', 
        minHeight: '480px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '20px 0'
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 150, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: currentIndex % 2 === 0 ? -2 : 2 }}
            exit={{ opacity: 0, x: -150, rotate: -5 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{ position: 'absolute', width: '90%', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Daisy Sticker Pin */}
            <img 
              src="/assets/13 — Flower : Daisy Decoration.png" 
              style={{ position: 'absolute', top: '-15px', right: '-15px', width: '65px', zIndex: 20, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))', transform: 'rotate(15deg)' }} 
              alt="Daisy Pin" 
            />

            <div style={{ 
              background: 'white', 
              padding: '16px 16px 20px 16px', 
              borderRadius: '8px', 
              boxShadow: 'var(--shadow-paper-lg)',
              border: '1px solid rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%'
            }}>
              <img 
                src={slides[currentIndex].img} 
                alt="Memory" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxHeight: '360px',
                  objectFit: 'contain', 
                  borderRadius: '4px'
                }} 
              />
            </div>
            
            <span className="handwritten" style={{ 
              fontSize: '1.6rem', 
              textAlign: 'center', 
              marginTop: '20px',
              fontWeight: slides[currentIndex].isEnd ? 700 : 500,
              color: slides[currentIndex].isEnd ? 'var(--color-berry)' : 'var(--color-ink)',
              textShadow: '0 2px 4px rgba(0,0,0,0.03)',
              transform: currentIndex % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)'
            }}>
              {slides[currentIndex].text}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Premium Scrapbook Decorative Elements */}
      <motion.img 
        src="/assets/funny memory/Memories Cloud.png"
        className="scrapbook-sticker"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.7, y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        viewport={{ once: true }}
        style={{ top: '10%', right: '2%', width: '120px', zIndex: 0 }}
      />
      
      <motion.img 
        src="/assets/funny memory/Laughing Face Emoji.png"
        className="scrapbook-sticker"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        viewport={{ once: true }}
        style={{ bottom: '5%', left: '5%', width: '70px', zIndex: 0 }}
      />

      <motion.img 
        src="/assets/funny memory/Smiling Yellow Star.png"
        className="scrapbook-sticker"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        viewport={{ once: true }}
        style={{ top: '25%', left: '8%', width: '45px', zIndex: 0 }}
      />
    </motion.div>
  );
}
