import React from 'react';
import { motion } from 'framer-motion';

export default function Page09ThingsIRemember() {
  const events = [
    { title: 'First Year', desc: 'The starting point.', img: '/assets/16-college-notebook.png' },
    { title: 'First Conversations', desc: 'Slightly awkward, totally ordinary.', img: '/assets/09-coffee-cup.png' },
    { title: 'Random College Chaos', desc: 'Assignments, canteen, and laughs.', img: '/assets/funny memory/college-to-do-checklist.png' },
    { title: 'More Memories', desc: 'Trips, jokes, and surviving.', img: '/assets/07-polaroid-camera-photos.png' },
    { title: 'Still Friends', desc: 'Some things don\'t change.', img: '/assets/funny memory/smiling-yellow-star.png' }
  ];

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
        style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '40px' }}
      >
        Friendship Timeline
      </motion.h2>

      <div style={{ position: 'relative', width: '100%', maxWidth: '320px', paddingLeft: '20px' }}>
        {/* Vertical Line */}
        <div style={{ position: 'absolute', left: '32px', top: '20px', bottom: '20px', width: '2px', background: 'var(--color-gold)', opacity: 0.3 }} />

        {events.map((evt, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px', position: 'relative' }}
          >
            {/* Timeline Node */}
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-ivory)', border: '2px solid var(--color-gold)', zIndex: 5 }} />
            
            <div style={{ flex: 1 }}>
              <div className="handwritten" style={{ fontSize: '1.6rem', color: 'var(--color-berry)', lineHeight: 1.2 }}>{evt.title}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.95rem', color: 'var(--color-ink)', opacity: 0.8 }}>{evt.desc}</div>
            </div>

            {/* Tiny Decorative Image */}
            <motion.img loading="lazy" 
              src={evt.img} 
              alt={evt.title}
              whileHover={{ scale: 1.1, rotate: 5 }}
              style={{ width: '40px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
