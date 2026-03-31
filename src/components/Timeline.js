import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { year: '2026 Q1', event: 'ALPHA',          note: 'Testing with early users' },
  { year: '2026 Q2', event: 'BETA',           note: 'Open beta — feedback welcome' },
  { year: '2026 Q3', event: 'OFFICIAL LAUNCH', note: 'Public release — game on' },
];

const Timeline = () => (
  <section id="roadmap" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(70px,10vw,110px) 24px', textAlign: 'center' }}>

    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}
      style={{ marginBottom: 'clamp(40px,6vw,64px)' }}
    >
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'var(--lime)',
        display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginBottom: 16,
      }}>
        <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
        Roadmap
        <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(40px,7vw,72px)', letterSpacing: '0.02em', lineHeight: 0.95 }}>
        TIMELINE
      </h2>
    </motion.div>

    <div className="tt-tl-grid" style={{ maxWidth: 760, margin: '0 auto' }}>
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          whileHover={{ scale: 1.04, borderColor: 'rgba(109,255,60,0.3)' }}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: i === 1 ? '1px solid rgba(109,255,60,0.28)' : '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12, padding: 'clamp(28px,4vw,40px) 24px',
            transition: 'border-color 0.25s, transform 0.25s',
          }}
        >
          <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(22px,3.5vw,30px)', color: 'var(--lime)', marginBottom: 10 }}>
            {step.year}
          </div>
          <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(18px,2.5vw,22px)', letterSpacing: '0.04em', marginBottom: 10 }}>
            {step.event}
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'rgba(244,239,230,0.4)', letterSpacing: '0.06em' }}>
            {step.note}
          </div>
        </motion.div>
      ))}
    </div>

    <style>{`
      .tt-tl-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      @media (max-width: 580px) {
        .tt-tl-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  </section>
);

export default Timeline;