import React from 'react';
import { motion } from 'framer-motion';

export default function Page02BeforeMemories() {
  return (
    <motion.div 
      className="story-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      style={{ alignItems: 'center' }}
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="handwritten"
        style={{ fontSize: '2.8rem', marginBottom: '48px', textAlign: 'center' }}
      >
        Before all these memories…
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 40, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: 'spring', damping: 15 }}
        style={{ width: '100%', maxWidth: '300px', position: 'relative', zIndex: 10, marginBottom: '40px' }}
      >
        <div className="photo-card" style={{ paddingBottom: '24px' }}>
          <div className="photo-tape" style={{ background: 'rgba(246, 182, 200, 0.8)' /* Pink tape */ }} />
          
          <img loading="lazy" src="/assets/images/i-wish-her-like-dimont-in-collage-days.png" alt="College Days" />
          
          {/* Subtle decorations on polaroid */}
          <img loading="lazy" 
            src="/assets/13-flower-daisy-decoration.png" 
            alt="Daisy"
            style={{ position: 'absolute', bottom: '10px', right: '-15px', width: '40px', zIndex: 5, transform: 'rotate(15deg)' }}
          />
        </div>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '1.15rem',
          lineHeight: '1.6',
          color: 'var(--color-ink)',
          textAlign: 'center',
          maxWidth: '90%'
        }}
      >
        Before the stories, the jokes, the chaos and all those unforgettable college days, there was just one ordinary beginning.
      </motion.p>
    </motion.div>
  );
}
