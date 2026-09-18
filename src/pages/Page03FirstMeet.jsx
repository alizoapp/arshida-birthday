import React from 'react';
import { motion } from 'framer-motion';

export default function Page03FirstMeet() {
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
        transition={{ delay: 0.2 }}
        className="handwritten"
        style={{ fontSize: '3.2rem', textAlign: 'center', marginBottom: '40px' }}
      >
        Our First Meet
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: 'spring' }}
        style={{ width: '100%', maxWidth: '320px', position: 'relative', zIndex: 10, marginBottom: '32px' }}
      >
        <div className="photo-card" style={{ paddingBottom: '80px' }}>
          <div className="photo-tape" />
          <img loading="lazy" src="/assets/images/our-first-selfy.png" alt="First Meet" />
          
          <div className="handwritten" style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            fontSize: '1.4rem',
            color: 'var(--color-ink)',
            lineHeight: 1.1
          }}>
            First year<br/>
            Same class<br/>
            Unexpected friendship
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '1.15rem',
          lineHeight: '1.6',
          color: 'var(--color-ink)',
          textAlign: 'center',
          fontWeight: 500
        }}
      >
        First year. Same class. Completely unexpected friendship.
      </motion.p>
    </motion.div>
  );
}
