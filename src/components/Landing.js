import React from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      style={{
        position: 'relative', minHeight: '100dvh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: 'clamp(100px,14vw,140px) 24px 80px',
        overflow: 'hidden',
      }}
    >
      {[700, 350].map(size => (
        <div key={size} style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: size, height: size,
          border: '1px solid rgba(109,255,60,0.055)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />
      ))}

      {[
        { top: 80, left: 32, borderTop: '1px solid', borderLeft: '1px solid', borderTopLeftRadius: 12 },
        { top: 80, right: 32, borderTop: '1px solid', borderRight: '1px solid', borderTopRightRadius: 12 },
        { bottom: 32, left: 32, borderBottom: '1px solid', borderLeft: '1px solid', borderBottomLeftRadius: 12 },
        { bottom: 32, right: 32, borderBottom: '1px solid', borderRight: '1px solid', borderBottomRightRadius: 12 },
      ].map((style, i) => (
        <div key={i} style={{
          position: 'absolute', width: 'clamp(60px, 10vw, 140px)', height: 'clamp(60px, 10vw, 140px)',
          borderColor: 'rgba(109,255,60,0.14)', pointerEvents: 'none',
          ...style,
        }} />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--lime)',
          display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28,
        }}
      >
        <span style={{ width: 32, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
        IRL Soccer Companion App
        <span style={{ width: 32, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(80px, 18vw, 210px)',
          lineHeight: 0.87, letterSpacing: '-0.01em',
          color: 'var(--white)', margin: 0,
        }}
      >
        TWO<br />TOUCH
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(28px, 6vw, 72px)',
          letterSpacing: '0.06em',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(244,239,230,0.18)',
          margin: '8px 0 32px',
        }}
      >
        TRACK. CHALLENGE. DOMINATE.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 300,
          color: 'rgba(244,239,230,0.5)', maxWidth: 440,
          margin: '0 auto 44px', lineHeight: 1.65,
        }}
      >
        Log real-life matches, climb the Elo leaderboard, and find opponents at your exact skill level. Soccer tracking, reimagined.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}
        className="tt-btn-row"
      >
        <button onClick={() => scrollTo('newsletter')} className="tt-btn-pri">
          Join the Waitlist
        </button>
        <button onClick={() => scrollTo('how')} className="tt-btn-sec">
          See How It Works
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        style={{ position: 'relative', display: 'inline-block', marginTop: 56 }}
      >
        <div style={{
          fontSize: 'clamp(100px, 18vw, 220px)', lineHeight: 1,
          filter: 'drop-shadow(0 30px 60px rgba(109,255,60,0.25))',
          animation: 'tt-float 5s ease-in-out infinite',
        }}>
          ⚽
        </div>
        <div style={{
          position: 'absolute', bottom: -18, left: '50%', transform: 'translateX(-50%)',
          width: '55%', height: 30,
          background: 'radial-gradient(ellipse, rgba(109,255,60,0.25), transparent 70%)',
          filter: 'blur(8px)',
          animation: 'tt-shadow-pulse 5s ease-in-out infinite',
        }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{ marginTop: 48 }}
      >
        <p style={{
          fontFamily: 'var(--display)', fontSize: 20, letterSpacing: '0.06em',
          marginBottom: 16, color: 'var(--white)',
        }}>
          FOLLOW US
        </p>
        <a
          href="https://www.instagram.com/twotouchgame"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: 'rgba(244,239,230,0.5)', textDecoration: 'none',
            fontSize: 14, transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--lime)'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(244,239,230,0.5)'}
        >
          <svg width="18" height="18" viewBox="0 0 496 512" fill="currentColor">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.8 0 184.8 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.8-1.7 67.6-9.9 93.9-36.1s34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
          </svg>
          twotouchgame
        </a>
      </motion.div>

      <div style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        color: 'rgba(244,239,230,0.35)', fontSize: 10, letterSpacing: '0.12em',
        textTransform: 'uppercase', fontFamily: 'var(--mono)',
      }}>
        <div style={{
          width: 1, height: 44,
          background: 'linear-gradient(to bottom, var(--lime), transparent)',
          animation: 'tt-drip 2.2s ease-in-out infinite',
        }} />
        Scroll
      </div>

      <style>{`
        @keyframes tt-float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-20px); }
        }
        @keyframes tt-shadow-pulse {
          0%,100% { transform: translateX(-50%) scaleX(0.8); opacity: 0.5; }
          50%     { transform: translateX(-50%) scaleX(1.1); opacity: 1; }
        }
        @keyframes tt-drip {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 0; }
          50%  { opacity: 1; transform: scaleY(1); }
          100% { transform: translateY(40px); opacity: 0; }
        }
        .tt-btn-row { width: 100%; max-width: 400px; }
        .tt-btn-pri {
          background: var(--lime); color: var(--pitch); font-weight: 600;
          font-size: 14px; padding: 15px 36px; border-radius: 8px; border: none;
          cursor: pointer; letter-spacing: 0.03em; transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          flex: 1;
        }
        .tt-btn-pri:hover { background: #8fff60; transform: translateY(-2px); box-shadow: 0 0 32px rgba(109,255,60,0.35); }
        .tt-btn-sec {
          color: var(--white); font-size: 14px; padding: 15px 36px; border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.12); background: transparent; cursor: pointer;
          transition: border-color 0.2s, transform 0.15s; flex: 1;
        }
        .tt-btn-sec:hover { border-color: rgba(244,239,230,0.35); transform: translateY(-2px); }
        @media (max-width: 520px) {
          .tt-btn-row { flex-direction: column !important; }
          .tt-btn-pri, .tt-btn-sec { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Landing;