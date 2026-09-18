import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Page08MemoryObjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/assets/images/funny-moment-her-similing.png",
    "/assets/images/our-internship-but-this-use-the-funny-moment.png",
    "/assets/images/our-after-college-first-meet.png",
    "/assets/images/college-days-photo.png"
  ];

  useEffect(() => {
    // Auto-scroll logic: switch image continuously every 3 seconds
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.div
      className="story-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="handwritten"
        style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '20px', maxWidth: '300px', zIndex: 10, color: 'var(--color-berry)' }}
      >
        Some Memories Never Get Old
      </motion.h2>

      <div style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '320px', 
        height: '380px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        overflow: 'hidden' // Ensures horizontal scroll looks clean
      }}>
        {/* Horizontal Auto-Scroll Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 150, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: currentIndex % 2 === 0 ? -3 : 3 }}
            exit={{ opacity: 0, x: -150, rotate: -10 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{ position: 'absolute', width: '85%', zIndex: 10 }}
          >
            {/* Daisy Flower Decoration (Top Left) */}
            <img loading="lazy" 
              src="/assets/13-flower-daisy-decoration.png"
              style={{ position: 'absolute', top: '-25px', left: '-25px', width: '80px', zIndex: 20, transform: 'rotate(-15deg)' }}
              alt="Daisy Decoration"
            />
            
            {/* Premium Photoframe Card */}
            <div style={{ 
              background: 'white', 
              padding: '16px 16px 40px 16px', 
              borderRadius: '8px', 
              boxShadow: 'var(--shadow-paper-lg)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <img loading="lazy" 
                src={images[currentIndex]} 
                alt="Memory" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxHeight: '400px',
                  objectFit: 'contain', 
                  borderRadius: '4px' 
                }} 
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Decorative Assets framing the carousel */}
      
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '1.15rem',
          lineHeight: '1.6',
          color: 'var(--color-ink)',
          textAlign: 'center',
          maxWidth: '90%',
          marginTop: '20px'
        }}
      >
        Years move forward, but some ordinary college moments stay unexpectedly unforgettable.
      </motion.p>
    </motion.div>
  );
}
