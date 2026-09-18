import React from 'react';
import { motion } from 'framer-motion';

export default function Page06PhotoCarousel() {
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
        className="handwritten"
        style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '40px', maxWidth: '300px' }}
      >
        Same Class, Different Stories
      </motion.h2>

      {/* Asset 2: College Books Stack (Middle Left of SCREEN) */}
      <motion.img
        src="/assets/funny memory/College Books Stack.png"
        initial={{ opacity: 0, x: -50, rotate: -10 }}
        whileInView={{ opacity: 1, x: 0, rotate: -5 }}
        animate={{ y: [0, 5, 0] }}
        transition={{ delay: 0.7, y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
        viewport={{ once: true }}
        style={{ position: 'absolute', top: '55%', left: '10px', width: '100px', zIndex: 15 }}
      />

      {/* Asset 3: Coffee Cup (Top Right of SCREEN) */}
      <motion.img
        src="/assets/09 — Coffee Cup.png"
        initial={{ opacity: 0, x: 50, rotate: 10 }}
        whileInView={{ opacity: 1, x: 0, rotate: 5 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ delay: 0.8, y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }}
        viewport={{ once: true }}
        style={{ position: 'absolute', top: '40px', right: '10px', width: '80px', zIndex: 15 }}
      />

      <div style={{ position: 'relative', width: '100%', maxWidth: '340px', height: '300px', margin: '0 auto', marginBottom: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* Main Photo (Center) - Keep size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: 'spring' }}
          style={{ width: '220px', zIndex: 10 }}
        >
          <div className="photo-card" style={{ paddingBottom: '16px' }}>
            <div className="photo-tape" style={{ transform: 'translateX(-50%) rotate(3deg)', background: 'rgba(255, 255, 255, 0.9)' }} />
            <img src="/assets/images/college days in 3rd year.png" alt="Same Class Different Stories" />
            
            {/* Adding a small daisy decoration to blend it with the scrapbook theme */}
            <motion.img 
              src="/assets/13 — Flower : Daisy Decoration.png"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              style={{ position: 'absolute', bottom: '5px', left: '-10px', width: '35px', zIndex: 15, rotate: '-20deg' }}
            />
          </div>
        </motion.div>

        {/* Asset 1: Sticky Notes (Moved Left) */}
        <motion.img
          src="/assets/funny memory/Sticky Notes Stack.png"
          initial={{ opacity: 0, rotate: 20 }}
          whileInView={{ opacity: 1, rotate: 5 }}
          animate={{ y: [0, -5, 0], rotate: [5, 8, 5] }}
          transition={{ delay: 0.6, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
          viewport={{ once: true }}
          style={{ position: 'absolute', top: '15px', right: '15px', width: '65px', zIndex: 12 }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '1.15rem',
          lineHeight: '1.7',
          color: 'var(--color-ink)',
          textAlign: 'justify',
          maxWidth: '90%'
        }}
      >
        Somehow, two completely different people ended up sharing the same classrooms, the same deadlines, the same random conversations — and eventually, a lot of memories.
      </motion.p>
    </motion.div>
  );
}
