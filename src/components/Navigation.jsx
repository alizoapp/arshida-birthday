import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Navigation({ current, total, onNext, onPrev }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '160px',
      zIndex: 100,
      background: 'var(--color-ivory)',
      padding: '12px 16px',
      borderRadius: '100px',
      boxShadow: 'var(--shadow-paper-lg)',
      border: '1px solid var(--color-gold)'
    }}>
      <button 
        onClick={onPrev}
        disabled={current === 1}
        style={{
          background: 'none', border: 'none', cursor: current === 1 ? 'default' : 'pointer',
          opacity: current === 1 ? 0.3 : 1, display: 'flex', alignItems: 'center'
        }}
      >
        <ChevronLeft size={24} color="var(--color-ink)" />
      </button>
      
      <div style={{
        fontFamily: 'var(--font-ui)',
        fontSize: '0.95rem',
        fontWeight: 600,
        color: 'var(--color-berry)',
        letterSpacing: '1px'
      }}>
        {current.toString().padStart(2, '0')} / {total}
      </div>

      <button 
        onClick={onNext}
        disabled={current === total}
        style={{
          background: 'none', border: 'none', cursor: current === total ? 'default' : 'pointer',
          opacity: current === total ? 0.3 : 1, display: 'flex', alignItems: 'center'
        }}
      >
        <ChevronRight size={24} color="var(--color-ink)" />
      </button>
    </div>
  );
}
