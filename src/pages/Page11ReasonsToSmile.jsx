import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Page11ReasonsToSmile() {
  const { scrollYProgress } = useScroll();
  const cakeY = useTransform(scrollYProgress, [0.7, 1], [0, -40]);

  return (
    <motion.div 
      className="story-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <div style={{ position: 'relative', width: '100%', maxWidth: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Typography */}
        <motion.img 
          src="/assets/01 — Happy Birthday 22.png" 
          alt="Happy Birthday"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ width: '85%', zIndex: 10, filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}
        />

        {/* Cake - visually separated from typography */}
        <motion.img 
          src="/assets/03 — Birthday Cake.png" 
          alt="Cake"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1, type: 'spring' }}
          style={{ width: '160px', marginTop: '20px', zIndex: 5, y: cakeY }}
        />
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="handwritten"
        style={{ fontSize: '3.2rem', textAlign: 'center', marginTop: '40px', marginBottom: '24px' }}
      >
        Today is your day.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '1.2rem',
          lineHeight: '1.8',
          color: 'var(--color-ink)',
          textAlign: 'center'
        }}
      >
        <p style={{ fontWeight: 600, marginBottom: '24px', color: 'var(--color-berry)' }}>22 looks good on you, Arshida.</p>
        <p>Here's to more laughter,</p>
        <p>more adventures,</p>
        <p>more chaos,</p>
        <p>and many more memories.</p>
      </motion.div>

    </motion.div>
  );
}
