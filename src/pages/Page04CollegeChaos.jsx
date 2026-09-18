import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Page04CollegeChaos() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <motion.div 
      className="story-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      style={{ 
        alignItems: 'center', 
        justifyContent: 'center', // Center everything vertically to fit the screen perfectly
        background: 'linear-gradient(to bottom, transparent, rgba(201, 154, 69, 0.05), transparent)',
        paddingTop: '20px',
        paddingBottom: '20px'
      }}
    >
      {/* 1. Heading at the Top */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="handwritten"
        style={{ fontSize: '3.6rem', textAlign: 'center', marginBottom: '40px', zIndex: 20, color: 'var(--color-berry)' }}
      >
        Then came the chaos…
      </motion.h2>

      {/* 2. Middle Part: The Photo Frame and Scattered Animated Assets */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '380px', height: '420px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* Main Photo (Center) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: 'spring' }}
          style={{ width: '250px', zIndex: 10 }}
        >
          <div className="photo-card" style={{ paddingBottom: '16px' }}>
            <div className="photo-tape" style={{ transform: 'translateX(-50%) rotate(-4deg)' }} />
            <img src="/assets/images/funny moment - her similing.png" alt="Funny Moment" />
          </div>
        </motion.div>

        {/* Animated Corner 1: College Notebook */}
        <motion.img
          src="/assets/funny memory/College Notebook.png"
          initial={{ opacity: 0, x: -30, rotate: -20 }}
          whileInView={{ opacity: 1, x: 0, rotate: -8 }}
          animate={{ y: [0, -8, 0], rotate: [-8, -10, -8] }}
          transition={{ delay: 0.6, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
          viewport={{ once: true }}
          style={{ position: 'absolute', top: '10px', left: '-10px', width: '120px', zIndex: 5 }}
        />

        {/* Animated Corner 2: College Backpack */}
        <motion.img
          src="/assets/funny memory/College Backpack.png"
          initial={{ opacity: 0, x: 30, rotate: 20 }}
          whileInView={{ opacity: 1, x: 0, rotate: 12 }}
          animate={{ y: [0, 8, 0], rotate: [12, 14, 12] }}
          transition={{ delay: 0.7, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
          viewport={{ once: true }}
          style={{ position: 'absolute', top: '30px', right: '-15px', width: '130px', zIndex: 5 }}
        />

        {/* Animated Corner 3: College Days Note (Replaced Clock) */}
        <motion.img
          src="/assets/funny memory/College Days Note.png"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
          animate={{ y: [0, 5, 0], rotate: [-5, -8, -5] }}
          transition={{ delay: 0.8, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
          viewport={{ once: true }}
          style={{ position: 'absolute', bottom: '40px', left: '-5px', width: '90px', zIndex: 15 }}
        />

        {/* Animated Corner 4: Iced Coffee */}
        <motion.img
          src="/assets/funny memory/Iced Coffee.png"
          initial={{ opacity: 0, y: 30, rotate: 30 }}
          whileInView={{ opacity: 1, y: 0, rotate: 15 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ delay: 0.9, y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
          viewport={{ once: true }}
          style={{ position: 'absolute', bottom: '30px', right: '5px', width: '100px', zIndex: 15 }}
        />
      </div>

      {/* 3. Description at the Bottom */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '1.10rem',
          lineHeight: '1.8',
          fontWeight: 'bold',
          color: 'var(--color-ink)',
          textAlign: 'left',
          marginTop: '60px',
          maxWidth: '90%'
        }}
      >
        One ordinary classroom.<br/>
        One ordinary conversation.<br/>
        One friendship that would become important.
      </motion.p>
    </motion.div>
  );
}
