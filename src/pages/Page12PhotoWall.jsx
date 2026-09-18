import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Page12PhotoWall() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0.8, 1], [0, -30]);
  const airplaneParallax = useTransform(scrollYProgress, [0.8, 1], [0, -50]);

  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleMuteChange = (e) => {
      setIsMuted(e.detail);
    };
    window.addEventListener('muteStateChanged', handleMuteChange);
    return () => window.removeEventListener('muteStateChanged', handleMuteChange);
  }, []);

  const toggleMute = () => {
    window.dispatchEvent(new Event('toggleMute'));
  };

  return (
    <div
      className="story-section"
      style={{
        position: 'relative',
        background: '#FFFCFA',
        height: 'auto',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflowX: 'hidden',
        paddingTop: '80px',
        paddingBottom: 'calc(env(safe-area-inset-bottom) + 60px)',
        zIndex: 1
      }}
    >
      {/* Realistic Paper Texture Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.015) 1px, transparent 1px), radial-gradient(circle, rgba(214,140,159,0.02) 2px, transparent 2px)', backgroundSize: '6px 6px, 18px 18px', pointerEvents: 'none', zIndex: -10 }} />

      {/* Top Right Decorative Note */}
      <motion.div
        initial={{ opacity: 0, x: 20, rotate: 0 }}
        whileInView={{ opacity: 1, x: 0, rotate: 6 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'absolute',
          top: '30px',
          right: '20px',
          background: '#FDF1F3',
          padding: '12px 14px',
          boxShadow: '2px 4px 10px rgba(73,59,56,0.1)',
          clipPath: 'polygon(0% 2%, 100% 0%, 98% 100%, 2% 98%)',
          zIndex: 5
        }}
      >
    
        <span style={{ position: 'absolute', bottom: '6px', right: '10px', color: '#D4AF37', fontSize: '0.8rem' }}>✦</span>
      </motion.div>

      {/* Chapter Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}
      >
      </motion.div>

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}
      >
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <h2 className="handwritten" style={{ fontSize: '3.8rem', color: 'var(--color-berry)', margin: 0, textShadow: '0 2px 8px rgba(159,49,90,0.1)', textAlign: 'center', lineHeight: '1.1' }}>
            To The Best<br/>Year
          </h2>
          <svg width="100%" height="20" style={{ position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', maxWidth: '300px', overflow: 'visible' }}>
            <motion.path
              d="M 10 10 Q 150 20 300 5"
              fill="none"
              stroke="#D68C9F"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
            />
          </svg>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 1 }}
          className="handwritten"
          style={{ fontSize: '1.4rem', color: 'var(--color-ink)', transform: 'rotate(-2deg)', marginTop: '20px', textAlign: 'center', maxWidth: '300px' }}
        >
          wishing you everything you've ever dreamed of.
        </motion.p>
      </motion.div>

      {/* Hero Photo Composition */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '380px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px', marginTop: '20px' }}>

        {/* Background Confetti */}
        <motion.img
          loading="lazy"
          src="/assets/14-confetti-stars.png"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          style={{ position: 'absolute', top: '-10px', left: '0', width: '110%', zIndex: 0 }}
        />

        {/* Flowers (Removed Daisy) */}
        <div style={{ position: 'absolute', top: '-10px', right: '-20px', zIndex: 5 }}>
          <svg width="120" height="120" style={{ position: 'absolute', top: '10px', right: '40px', overflow: 'visible', zIndex: -1 }}>
            <motion.path
              d="M 0 100 Q 50 20 100 0"
              fill="none"
              stroke="#D68C9F"
              strokeWidth="2"
              strokeDasharray="4 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
            />
          </svg>
          <motion.img
            loading="lazy"
            src="/assets/11-paper-airplane.png"
            initial={{ opacity: 0, rotate: 10, x: -40, y: 40 }}
            whileInView={{ opacity: 1, rotate: -10, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 1.2, type: 'spring' }}
            style={{ width: '70px', y: airplaneParallax, filter: 'drop-shadow(2px 6px 8px rgba(0,0,0,0.1))' }}
          />
        </div>

        {/* The Photo */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -4 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.5, duration: 1.0, type: 'spring' }}
          style={{
            position: 'relative',
            zIndex: 10,
            width: '85%',
            background: '#FFFCFA',
            padding: '12px 12px 35px 12px',
            boxShadow: '2px 12px 30px rgba(73,59,56,0.2)',
            borderRadius: '2px'
          }}
        >
          <img
            loading="lazy"
            src="/assets/images/i-wish-her-like-dimont-in-collage-days.png"
            alt="College Days"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '1px' }}
          />

          {/* Tape on Photo */}
          <motion.img
            loading="lazy"
            src="/assets/tape-strip.png"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%) rotate(-3deg)', width: '70px', filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.15))' }}
          />

          {/* Paperclip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4 }}
            style={{ position: 'absolute', bottom: '20px', right: '-8px', width: '20px', height: '45px', border: '3px solid #D4AF37', borderRadius: '10px', background: 'transparent', boxShadow: '2px 2px 4px rgba(0,0,0,0.15)', transform: 'rotate(15deg)', borderRight: 'none', zIndex: 12 }}
          />

          {/* Bottom Left Floral Decoration on Frame */}
          <motion.img 
            loading="lazy" 
            src="/assets/bottom-floral-decoration.png"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6, duration: 0.8 }}
            style={{ 
              position: 'absolute', 
              bottom: '-25px', 
              left: '-25px', 
              width: '110px', 
              zIndex: 15,
              filter: 'drop-shadow(2px 6px 8px rgba(0,0,0,0.15))'
            }}
          />
        </motion.div>

        {/* Side Annotations */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="handwritten"
          style={{ position: 'absolute', left: '-5px', top: '20%', fontSize: '1.2rem', color: 'var(--color-berry)', transform: 'rotate(-12deg)', zIndex: 20, lineHeight: 1.1 }}
        >
          College<br />Days<br />Best<br />Days<br />
          <span style={{ color: '#D4AF37', fontSize: '0.8rem' }}>✦</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 15, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 6 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{ position: 'absolute', right: '-15px', bottom: '15%', background: '#FFFCFA', padding: '10px 14px', boxShadow: '2px 4px 8px rgba(73,59,56,0.1)', clipPath: 'polygon(2% 0%, 98% 2%, 100% 98%, 0% 100%)', zIndex: 20, maxWidth: '120px' }}
        >
          <p className="handwritten" style={{ margin: 0, fontSize: '1.05rem', color: 'var(--color-berry)', lineHeight: 1.1 }}>
            Same People<br />Same Chaos<br />More Memories
          </p>
        </motion.div>
      </div>

      {/* Memory Label */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '25px', position: 'relative' }}
      >
        <motion.img
          loading="lazy"
          src="/assets/pink-brush-stroke.png"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.4, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', width: '180px', height: '50px', objectFit: 'contain', zIndex: -1 }}
        />
        <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.8rem', letterSpacing: '3px', color: '#6e5c58', textTransform: 'uppercase' }}>The Final Wish</span>

        <h3 className="handwritten" style={{ fontSize: '2.8rem', color: 'var(--color-berry)', margin: '10px 0 0 0', position: 'relative', textAlign: 'center', lineHeight: '1.1' }}>
          I miss those days<br/>so much.
          <svg width="100%" height="15" style={{ position: 'absolute', bottom: '-5px', left: '50%', transform: 'translateX(-50%)', maxWidth: '280px', overflow: 'visible' }}>
            <motion.path d="M 5 5 Q 150 15 280 5" fill="none" stroke="var(--color-berry)" strokeWidth="2" strokeLinecap="round" opacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 1 }} />
          </svg>
        </h3>
      </motion.div>

      {/* Small Handwritten Caption */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="handwritten"
        style={{ fontSize: '1.3rem', color: 'var(--color-berry)', transform: 'rotate(-2deg)', marginBottom: '35px', textAlign: 'center', maxWidth: '300px' }}
      >
        wishing you a long and happy life. <span style={{ color: '#D4AF37', fontSize: '0.9rem' }}>✦</span>
      </motion.p>

      {/* Body Text */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ maxWidth: '315px', textAlign: 'center', marginBottom: '40px' }}
      >
        <p style={{ fontFamily: 'Georgia, serif', color: '#4a3b38', fontSize: '16px', lineHeight: '1.55', margin: 0 }}>
          The memories we made back then<br />
          will always be so incredibly special to me.<br />
          Thank you for being such a wonderful friend.
        </p>
      </motion.div>

      {/* Memory Words (Paper Labels) */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '50px', flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: '340px' }}>
        {['LAUGHTER', 'CHAOS', 'MEMORIES'].map((word, i) => (
          <motion.div
            key={word}
            initial={{ opacity: 0, y: 20, rotate: (i - 1) * -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: (i - 1) * 3 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4 + (i * 0.2), duration: 0.8, type: 'spring' }}
            style={{
              background: i === 1 ? '#FDF1F3' : '#FFFCFA',
              padding: '8px 16px',
              boxShadow: '1px 3px 8px rgba(73,59,56,0.1)',
              borderRadius: '2px',
              border: '1px solid rgba(0,0,0,0.03)',
              position: 'relative'
            }}
          >
            <span className="handwritten" style={{ fontSize: '1.3rem', color: 'var(--color-ink)' }}>{word}</span>
            <span style={{ position: 'absolute', top: '2px', right: '4px', fontSize: '0.6rem', color: '#D4AF37' }}>✦</span>
          </motion.div>
        ))}
      </div>

      {/* Closing Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.0, duration: 1.0 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', marginBottom: '60px' }}
      >
        <div style={{ position: 'absolute', inset: '-20px', background: 'radial-gradient(ellipse, rgba(214,140,159,0.1) 0%, transparent 70%)', zIndex: -1 }} />
        <span className="handwritten" style={{ fontSize: '2.6rem', color: 'var(--color-berry)', lineHeight: '1.2' }}>Keep laughing.</span>
        <span className="handwritten" style={{ fontSize: '2.6rem', color: 'var(--color-berry)', lineHeight: '1.2' }}>Keep growing.</span>
        <span className="handwritten" style={{ fontSize: '2.6rem', color: 'var(--color-berry)', lineHeight: '1.2' }}>Keep being you.</span>
      </motion.div>

      {/* Bottom Scrapbook Decorations */}
      <div style={{ width: '100%', maxWidth: '350px', display: 'flex', justifyContent: 'space-between', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 0.8, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="handwritten"
          style={{ fontSize: '1.2rem', color: 'var(--color-ink)', transform: 'rotate(-4deg)', lineHeight: 1.1 }}
        >
          Grateful<br />for you<br />Always <span style={{ color: '#D4AF37', fontSize: '0.8rem' }}>✦</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="handwritten"
          style={{ fontSize: '1.4rem', color: 'var(--color-berry)', marginTop: '20px', cursor: 'pointer', position: 'relative' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top &uarr;
          <svg width="100%" height="10" style={{ position: 'absolute', bottom: '-4px', left: 0, overflow: 'visible' }}>
            <path d="M 0 5 Q 50 10 120 5" fill="none" stroke="rgba(159,49,90,0.5)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>

      {/* Bottom Page Corner (Dog Ear) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.6, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, transparent 50%, #FFFCFA 50%)',
          boxShadow: '-4px -4px 10px rgba(73,59,56,0.08)',
          zIndex: 5
        }}
      >
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, transparent 48%, rgba(214,140,159,0.1) 50%, transparent 52%)' }} />
      </motion.div>

    </div>
  );
}
