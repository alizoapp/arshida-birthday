import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function Page12PhotoWall() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0.8, 1], [0, -20]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div 
      className="story-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ alignItems: 'center' }}
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="handwritten"
        style={{ fontSize: '3.2rem', textAlign: 'center', marginBottom: '32px', color: 'var(--color-berry)' }}
      >
        To More Memories
      </motion.h2>

      <div style={{ position: 'relative', width: '100%', maxWidth: '340px', display: 'flex', justifyContent: 'center' }}>
        
        {/* Decorative background assets */}
        <motion.img loading="lazy" src="/assets/14-confetti-stars.png" 
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.8 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
          style={{ position: 'absolute', top: '-20px', width: '120%', zIndex: 0 }} />
          
        <motion.img loading="lazy" src="/assets/13-flower-daisy-decoration.png" 
          initial={{ opacity: 0, rotate: -20 }} whileInView={{ opacity: 1, rotate: 10 }} viewport={{ once: true }} transition={{ delay: 0.7 }}
          style={{ position: 'absolute', bottom: '10px', left: '-10px', width: '60px', zIndex: 5, y: yParallax }} />
          
        <motion.img loading="lazy" src="/assets/11-paper-airplane.png" 
          initial={{ opacity: 0, rotate: -40 }} whileInView={{ opacity: 1, rotate: -20 }} viewport={{ once: true }} transition={{ delay: 0.8 }}
          style={{ position: 'absolute', top: '10px', right: '-10px', width: '70px', zIndex: 5 }} />

        {/* Hero Cutout Centerpiece (Special Image) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
          style={{ zIndex: 10, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <img loading="lazy" 
            src="/assets/images/i-wish-her-like-dimont-in-collage-days.png" 
            alt="Arshida Memory" 
            style={{ 
              width: '80%', 
              maxWidth: '260px', 
              maxHeight: '35vh', 
              objectFit: 'cover', 
              borderRadius: '8px',
              border: '6px solid white',
              boxShadow: 'var(--shadow-paper-lg)',
              transform: 'rotate(-2deg)'
            }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
        style={{
          fontFamily: 'var(--font-ui)',
          textAlign: 'center',
          marginTop: '20px',
          maxWidth: '90%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h3 className="handwritten" style={{ fontSize: '2.4rem', color: 'var(--color-berry)', marginBottom: '12px', whiteSpace: 'nowrap' }}>
          Happy 22nd Birthday!
        </h3>
        
        <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--color-ink)', marginBottom: '16px', opacity: 0.9 }}>
          From one ordinary college conversation<br/>
          to countless unforgettable moments —<br/>
          I'm genuinely grateful for this friendship.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-berry)', marginBottom: '24px' }}>
          <span>Keep laughing.</span>
          <span>Keep growing.</span>
          <span>Keep being you.</span>
        </div>

        <motion.button 
          className="btn-primary"
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ margin: '0 auto', fontSize: '0.95rem', padding: '10px 20px', background: 'white' }}
        >
          Open the Memory Book Again <ChevronUp size={16} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
