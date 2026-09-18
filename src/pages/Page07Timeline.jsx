import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function Page07Timeline() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  // Track scroll progress within this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const lastScrolledIndex = useRef(-1);

  // Auto-play the timeline steps
  useEffect(() => {
    if (!isActive) return;
    if (activeIndex >= 4) return; // Stop at the 5th dot (index 4)

    const timer = setTimeout(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3500); // Wait 3.5s before moving to next item

    return () => clearTimeout(timer);
  }, [isActive, activeIndex]);

  // Handle automatic scrolling
  useEffect(() => {
    if (!isActive) return;

    if (activeIndex > 0 && activeIndex <= 4 && lastScrolledIndex.current !== activeIndex) {
      const element = document.getElementById(`timeline-item-${activeIndex}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        lastScrolledIndex.current = activeIndex;
      }
    }
  }, [activeIndex, isActive]);

  return (
    <motion.div 
      id="page07"
      ref={containerRef}
      onViewportEnter={() => setIsActive(true)}
      onViewportLeave={() => setIsActive(false)}
      viewport={{ amount: 0.2 }}
      className="story-section" 
      style={{
        height: 'auto',
        minHeight: '100vh',
        padding: '60px 0 140px 0',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'var(--color-ivory)',
        overflow: 'hidden'
      }}
    >
      {/* Background Depth */}
      <div style={{ 
        position: 'absolute', inset: 0, opacity: 0.25, 
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(246, 182, 200, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(201, 154, 69, 0.08) 0%, transparent 50%)',
        pointerEvents: 'none', zIndex: 0 
      }} />

      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ width: '100%', maxWidth: '350px', textAlign: 'center', marginBottom: '80px', zIndex: 10, position: 'relative' }}
      >
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: 600, letterSpacing: '1.5px', color: 'var(--color-berry)', opacity: 0.85 }}>
          OUR STORY SO FAR
        </span>
        <h2 className="handwritten" style={{ fontSize: '38px', color: 'var(--color-berry)', margin: '6px 0 8px 0', textShadow: '0 2px 4px rgba(143,49,84,0.05)' }}>
          Friendship Timeline
        </h2>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--color-ink)', opacity: 0.9 }}>
          From one random conversation to all this chaos.
        </p>
      </motion.div>

      {/* CENTRAL TIMELINE CONTAINER */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '390px', zIndex: 10 }}>
        
        {/* Hand-drawn SVG Path */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '60px', zIndex: 1, pointerEvents: 'none' }}>
          <svg width="60" height="100%" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
             <motion.path 
                d="M 30 0 Q 45 100, 20 250 T 40 500 T 15 750 T 45 1000 T 25 1250 T 30 1500"
                fill="transparent"
                stroke="#CFA9B6" 
                strokeWidth="1.5"
                strokeDasharray="4 4"
                strokeLinecap="round"
                style={{ pathLength: scrollYProgress }}
             />
          </svg>
        </div>


        {/* =========================================
            MILESTONE 00 — FRIENDSHIP STARTED THERE
            ========================================= */}
        <div id="timeline-item-0" style={{ position: 'relative', width: '100%', minHeight: '220px', marginBottom: '80px', display: 'flex', zIndex: activeIndex === 0 ? 50 : 5 }}>
           <motion.div 
             initial={{scale: 0.85, opacity: 0}} whileInView={{scale: 1, opacity: 1}} viewport={{once: true, margin: "-20%"}} transition={{duration: 0.4}}
             style={{ position: 'absolute', left: '50%', top: '20px', transform: 'translate(-50%, -50%)', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-ivory)', border: '2px solid var(--color-berry)', zIndex: 10, boxShadow: activeIndex === 0 ? '0 0 0 6px rgba(159,49,90,0.15)' : '0 0 0 4px rgba(255,249,242,0.8)', transition: 'box-shadow 0.3s' }} 
           >
              {/* Traveling Arrow */}
              {activeIndex === 0 && (
                 <motion.img loading="lazy" 
                   layoutId="traveling-arrow" 
                   src="/assets/funny memory/this-way-to-fun-arrow.png" 
                   style={{ position: 'absolute', top: '-15px', left: '-35px', width: '22px', transform: 'rotate(15deg) scaleX(-1)' }} 
                   alt="arrow"
                 />
              )}
           </motion.div>
           
           <div style={{ position: 'absolute', right: '50%', paddingRight: '24px', width: '50%', textAlign: 'right', paddingLeft: '20px' }}>
              <span className="handwritten" style={{ fontSize: '14px', color:'var(--color-berry)', opacity: 0.7 }}>01</span>
              <h3 className="handwritten" style={{ fontSize: '26px', color: 'var(--color-berry)', margin: '0 0 2px 0', lineHeight: 1 }}>Friendship Started</h3>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-ink)' }}>Our first ever selfie together.</p>
           </div>

           <div style={{ position: 'absolute', left: '50%', paddingLeft: '20px', width: '50%', zIndex: 5, top: '0' }}>
              <motion.div 
                animate={{ scale: activeIndex === 0 ? 1.3 : 1, rotate: 3, y: activeIndex === 0 ? -10 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ position: 'relative', background: 'white', padding: '6px 6px 20px 6px', boxShadow: activeIndex === 0 ? '0 15px 35px rgba(70,45,35,.15)' : '0 4px 12px rgba(70,45,35,.08)', width: '130px', border: '1px solid #EAE1D8' }}
              >
                 <div style={{ position: 'absolute', top: '-6px', right: '15px', width: '30px', height: '12px', background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(2px)', transform: 'rotate(-4deg)', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', zIndex: 10 }} />
                 <img loading="lazy" src="/assets/images/our-first-selfy.png" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '1px' }} alt="First Selfie" />
              </motion.div>
           </div>
        </div>


        {/* =========================================
            MILESTONE 01 — FIRST YEAR
            ========================================= */}
        <div id="timeline-item-1" style={{ position: 'relative', width: '100%', minHeight: '220px', marginBottom: '80px', display: 'flex', zIndex: activeIndex === 1 ? 50 : 5 }}>
           <motion.div 
             initial={{scale: 0.85, opacity: 0}} whileInView={{scale: 1, opacity: 1}} viewport={{once: true, margin: "-20%"}} transition={{duration: 0.4}}
             style={{ position: 'absolute', left: '50%', top: '30px', transform: 'translate(-50%, -50%)', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-ivory)', border: '2px solid var(--color-berry)', zIndex: 10, boxShadow: activeIndex === 1 ? '0 0 0 6px rgba(159,49,90,0.15)' : '0 0 0 4px rgba(255,249,242,0.8)', transition: 'box-shadow 0.3s' }} 
           >
              {activeIndex === 1 && (
                 <motion.img loading="lazy" 
                   layoutId="traveling-arrow" 
                   src="/assets/funny memory/this-way-to-fun-arrow.png" 
                   style={{ position: 'absolute', top: '-15px', left: '15px', width: '22px', transform: 'rotate(70deg)' }} 
                   alt="arrow"
                 />
              )}
           </motion.div>
           
           <div style={{ position: 'absolute', right: '50%', paddingRight: '20px', width: '50%', zIndex: 5, top: '0' }}>
              <motion.div 
                animate={{ scale: activeIndex === 1 ? 1.3 : 1, rotate: -2, y: activeIndex === 1 ? -10 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ position: 'relative', background: '#FFF9F2', padding: '8px 8px 24px 8px', boxShadow: activeIndex === 1 ? '0 15px 35px rgba(70,45,35,.15)' : '0 5px 18px rgba(70,45,35,.08)', width: '140px', float: 'right' }}
              >
                 <div style={{ position: 'absolute', top: '-8px', left: '15px', width: '35px', height: '14px', background: 'rgba(233,107,145,0.4)', transform: 'rotate(4deg)', zIndex: 10, backdropFilter: 'blur(1px)' }} />
                 <img loading="lazy" src="/assets/images/first-year-second-image-in-college-function.png" style={{ width: '100%', height: '130px', objectFit: 'contain', filter: 'drop-shadow(0 8px 20px rgba(60,35,30,.12))', transform: 'scale(1.15) translateY(-5px) translateX(4px)', position: 'relative', zIndex: 5 }} alt="First Year" />
              </motion.div>
           </div>

           <div style={{ position: 'absolute', left: '50%', paddingLeft: '24px', width: '50%', paddingRight: '20px', top: '10px' }}>
              <span className="handwritten" style={{ fontSize: '14px', color:'var(--color-berry)', opacity: 0.7 }}>02</span>
              <h3 className="handwritten" style={{ fontSize: '26px', color: 'var(--color-berry)', margin: '0 0 4px 0' }}>First Year</h3>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-ink)', lineHeight: 1.4 }}>College functions and surviving the chaos.</p>
           </div>
        </div>


        {/* =========================================
            MILESTONE 02 — COURSE INTERNSHIP
            ========================================= */}
        <div id="timeline-item-2" style={{ position: 'relative', width: '100%', minHeight: '220px', marginBottom: '80px', display: 'flex', zIndex: activeIndex === 2 ? 50 : 5 }}>
           <motion.div 
             initial={{scale: 0.85, opacity: 0}} whileInView={{scale: 1, opacity: 1}} viewport={{once: true, margin: "-20%"}} transition={{duration: 0.4}}
             style={{ position: 'absolute', left: '50%', top: '20px', transform: 'translate(-50%, -50%)', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-ivory)', border: '2px solid var(--color-berry)', zIndex: 10, boxShadow: activeIndex === 2 ? '0 0 0 6px rgba(159,49,90,0.15)' : '0 0 0 4px rgba(255,249,242,0.8)', transition: 'box-shadow 0.3s' }} 
           >
              {activeIndex === 2 && (
                 <motion.img loading="lazy" 
                   layoutId="traveling-arrow" 
                   src="/assets/funny memory/this-way-to-fun-arrow.png" 
                   style={{ position: 'absolute', top: '-15px', left: '-35px', width: '22px', transform: 'rotate(15deg) scaleX(-1)' }} 
                   alt="arrow"
                 />
              )}
           </motion.div>
           
           <div style={{ position: 'absolute', right: '50%', paddingRight: '24px', width: '50%', textAlign: 'right', paddingLeft: '20px' }}>
              <span className="handwritten" style={{ fontSize: '14px', color:'var(--color-berry)', opacity: 0.7 }}>03</span>
              <h3 className="handwritten" style={{ fontSize: '25px', color: 'var(--color-berry)', margin: '0 0 8px 0', lineHeight: 1.1 }}>Course Internship</h3>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-ink)' }}>Funny moments and serious work... sometimes.</p>
           </div>

           <div style={{ position: 'absolute', left: '50%', paddingLeft: '20px', width: '50%', zIndex: 5, top: '0' }}>
              <motion.div 
                animate={{ scale: activeIndex === 2 ? 1.3 : 1, rotate: -3, y: activeIndex === 2 ? -10 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ position: 'relative', background: 'white', padding: '6px 6px 20px 6px', boxShadow: activeIndex === 2 ? '0 15px 35px rgba(70,45,35,.15)' : '0 4px 12px rgba(70,45,35,.08)', width: '130px', border: '1px solid #EAE1D8' }}
              >
                 <div style={{ position: 'absolute', top: '-6px', right: '40px', width: '30px', height: '12px', background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(2px)', transform: 'rotate(2deg)', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', zIndex: 10 }} />
                 <img loading="lazy" src="/assets/images/our-internship-but-this-use-the-funny-moment.png" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '1px' }} alt="Internship" />
              </motion.div>
           </div>
        </div>


        {/* =========================================
            MILESTONE 03 — PROJECT WORK TOGETHER
            ========================================= */}
        <div id="timeline-item-3" style={{ position: 'relative', width: '100%', minHeight: '220px', marginBottom: '80px', display: 'flex', zIndex: activeIndex === 3 ? 50 : 5 }}>
           <motion.div 
             initial={{scale: 0.85, opacity: 0}} whileInView={{scale: 1, opacity: 1}} viewport={{once: true, margin: "-20%"}} transition={{duration: 0.4}}
             style={{ position: 'absolute', left: '50%', top: '20px', transform: 'translate(-50%, -50%)', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-ivory)', border: '2px solid var(--color-berry)', zIndex: 10, boxShadow: activeIndex === 3 ? '0 0 0 6px rgba(159,49,90,0.15)' : '0 0 0 4px rgba(255,249,242,0.8)', transition: 'box-shadow 0.3s' }} 
           >
              {activeIndex === 3 && (
                 <motion.img loading="lazy" 
                   layoutId="traveling-arrow" 
                   src="/assets/funny memory/this-way-to-fun-arrow.png" 
                   style={{ position: 'absolute', top: '-15px', left: '15px', width: '22px', transform: 'rotate(70deg)' }} 
                   alt="arrow"
                 />
              )}
           </motion.div>

           <div style={{ position: 'absolute', right: '50%', paddingRight: '20px', width: '50%', zIndex: 5, top: '0' }}>
              <motion.div 
                animate={{ scale: activeIndex === 3 ? 1.3 : 1, rotate: 4, y: activeIndex === 3 ? -10 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ position: 'relative', background: 'white', padding: '6px 6px 20px 6px', boxShadow: activeIndex === 3 ? '0 15px 35px rgba(70,45,35,.15)' : '0 4px 12px rgba(70,45,35,.08)', width: '130px', border: '1px solid #EAE1D8', float: 'right' }}
              >
                 <div style={{ position: 'absolute', top: '-6px', left: '15px', width: '30px', height: '12px', background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(2px)', transform: 'rotate(-8deg)', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', zIndex: 10 }} />
                 <img loading="lazy" src="/assets/images/college-days-in-3rd-year.png" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '1px' }} alt="Project Work" />
                 <img loading="lazy" src="/assets/13-flower-daisy-decoration.png" style={{ position: 'absolute', bottom: '-15px', right: '-15px', width: '28px', transform: 'rotate(45deg)', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} alt="daisy" />
              </motion.div>
           </div>
           
           <div style={{ position: 'absolute', left: '50%', paddingLeft: '24px', width: '50%', paddingRight: '20px' }}>
              <span className="handwritten" style={{ fontSize: '14px', color:'var(--color-berry)', opacity: 0.7 }}>04</span>
              <h3 className="handwritten" style={{ fontSize: '26px', color: 'var(--color-berry)', margin: '0 0 4px 0', lineHeight: 1.1 }}>Project Work Together</h3>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-ink)', lineHeight: 1.4 }}>Deadlines, teamwork, and making it through 3rd year.</p>
           </div>
        </div>


        {/* =========================================
            MILESTONE 04 — LAST MEET & STILL FRIENDS
            ========================================= */}
        <div id="timeline-item-4" style={{ position: 'relative', width: '100%', minHeight: '230px', zIndex: activeIndex === 4 ? 50 : 5 }}>
           <motion.div 
             initial={{scale: 0.85, opacity: 0}} whileInView={{scale: 1, opacity: 1}} viewport={{once: true, margin: "-20%"}} transition={{duration: 0.4}}
             style={{ position: 'absolute', left: '50%', top: '20px', transform: 'translate(-50%, -50%)', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-ivory)', border: '2px solid var(--color-berry)', zIndex: 10, boxShadow: activeIndex === 4 ? '0 0 0 6px rgba(159,49,90,0.15)' : '0 0 0 4px rgba(255,249,242,0.8)', transition: 'box-shadow 0.3s' }} 
           >
              {activeIndex === 4 && (
                 <motion.img loading="lazy" 
                   layoutId="traveling-arrow" 
                   src="/assets/funny memory/this-way-to-fun-arrow.png" 
                   style={{ position: 'absolute', top: '-15px', left: '-35px', width: '22px', transform: 'rotate(15deg) scaleX(-1)' }} 
                   alt="arrow"
                 />
              )}
           </motion.div>
           
           <div style={{ position: 'absolute', right: '50%', paddingRight: '24px', width: '50%', textAlign: 'right', paddingLeft: '20px' }}>
              <div style={{ position: 'relative', background: '#FFF9F2', padding: '16px 14px', borderRadius: '2px', boxShadow: '0 4px 14px rgba(70,45,35,.06)', transform: 'rotate(-2deg)', borderBottom: '1px dashed #E5D5C5' }}>
                 <span className="handwritten" style={{ fontSize: '14px', color:'var(--color-berry)', opacity: 0.7 }}>05</span>
                 <h3 className="handwritten" style={{ fontSize: '24px', color: 'var(--color-berry)', margin: '0 0 8px 0', lineHeight: 1 }}>Last Meet & Still Friends</h3>
                 <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-ink)', lineHeight: 1.5, margin: 0 }}>
                    Different stories.<br/>Same friendship.<br/>More memories ahead.
                 </p>
                 <span className="handwritten" style={{ position: 'absolute', bottom: '10px', right: '12px', fontSize: '18px', color: 'var(--color-berry)', transform: 'rotate(-10deg)' }}>:)</span>
              </div>
           </div>

           <div style={{ position: 'absolute', left: '50%', paddingLeft: '20px', width: '50%', zIndex: 5, top: '10px' }}>
              <motion.div 
                animate={{ scale: activeIndex === 4 ? 1.3 : 1, rotate: 5, y: activeIndex === 4 ? -10 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ position: 'relative', background: 'white', padding: '6px 6px 20px 6px', boxShadow: activeIndex === 4 ? '0 15px 35px rgba(70,45,35,.15)' : '0 4px 12px rgba(70,45,35,.08)', width: '130px', border: '1px solid #EAE1D8' }}
              >
                 <div style={{ position: 'absolute', top: '-6px', right: '15px', width: '30px', height: '12px', background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(2px)', transform: 'rotate(4deg)', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', zIndex: 10 }} />
                 <img loading="lazy" src="/assets/images/our-last-meet-in-kozhikode.jpg" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '1px' }} alt="Last Meet" />
                 <img loading="lazy" src="/assets/funny memory/smiling-yellow-star.png" style={{ position: 'absolute', top: '-10px', right: '-10px', width: '20px', filter: 'sepia(1) saturate(3) hue-rotate(-30deg)' }} alt="sparkle" />
              </motion.div>
           </div>
        </div>

        {/* Continuation Label */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.7 }} viewport={{ once: true, margin: "-20%" }} transition={{ delay: 0.5, duration: 0.6 }}
          style={{ width: '100%', textAlign: 'center', marginTop: '60px', position: 'relative', zIndex: 10 }}
        >
           <span className="handwritten" style={{ fontSize: '18px', color: 'var(--color-berry)', background: 'var(--color-ivory)', padding: '4px 12px' }}>
              and the story continues &darr;
           </span>
        </motion.div>

      </div>
    </motion.div>
  );
}
