import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LAUNCH = new Date(2026, 7, 15, 0, 0, 0);

const calcTime = () => {
  const diff = LAUNCH - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000)  / 60000),
    seconds: Math.floor((diff % 60000)    / 1000),
  };
};

const Block = ({ value, label, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 12, padding: 'clamp(24px,4vw,36px) clamp(12px,2vw,20px)',
      textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}
  >
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 2,
      background: 'linear-gradient(90deg, var(--lime), #52cc2a)',
    }} />
    <div style={{
      fontFamily: 'var(--display)',
      fontSize: 'clamp(44px,9vw,80px)',
      color: 'var(--lime)', lineHeight: 1, marginBottom: 8,
      fontVariantNumeric: 'tabular-nums',
    }}>
      {String(value).padStart(label === 'Days' ? 3 : 2, '0')}
    </div>
    <div style={{
      fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(244,239,230,0.45)',
      letterSpacing: '0.12em', textTransform: 'uppercase',
    }}>
      {label}
    </div>
  </motion.div>
);

const Countdown = () => {
  const [time, setTime] = useState(calcTime());

  useEffect(() => {
    const id = setInterval(() => setTime(calcTime()), 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { label: 'Days',    value: time.days },
    { label: 'Hours',   value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  return (
    <section style={{
      maxWidth: 1200, margin: '0 auto',
      padding: 'clamp(70px,10vw,110px) 24px',
      textAlign: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ marginBottom: 'clamp(32px,5vw,56px)' }}
      >
        <div style={{
          fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--lime)',
          display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginBottom: 16,
        }}>
          <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
          Launch Countdown
          <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
        </div>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(40px,7vw,72px)', letterSpacing: '0.02em', lineHeight: 0.95, marginBottom: 16 }}>
          OFFICIAL LAUNCH IN
        </h2>
        <p style={{ color: 'rgba(244,239,230,0.45)', fontSize: 'clamp(14px,2vw,17px)', fontWeight: 300 }}>
          Get ready to elevate your soccer game tracking experience.
        </p>
      </motion.div>

      <div className="tt-cd-grid">
        {blocks.map((b, i) => <Block key={b.label} {...b} index={i} />)}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
        style={{ marginTop: 'clamp(32px,5vw,56px)' }}
      >
        <a
          href="#newsletter"
          onClick={e => { e.preventDefault(); document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' }); }}
          style={{
            display: 'inline-block', background: 'var(--lime)', color: 'var(--pitch)',
            fontWeight: 600, fontSize: 14, padding: '15px 40px', borderRadius: 8,
            textDecoration: 'none', letterSpacing: '0.03em',
            transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#8fff60'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(109,255,60,0.35)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--lime)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          Get Notified at Launch
        </a>

        <p style={{ marginTop: 24, color: 'rgba(244,239,230,0.4)', fontSize: 13, fontFamily: 'var(--mono)' }}>
          Launching{' '}
          <span style={{ color: 'var(--lime)', fontWeight: 500 }}>August 15, 2026</span>
        </p>
      </motion.div>

      <style>{`
        .tt-cd-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 700px;
          margin: 0 auto;
        }
        @media (max-width: 580px) {
          .tt-cd-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 360px;
          }
        }
      `}</style>
    </section>
  );
};

export default Countdown;