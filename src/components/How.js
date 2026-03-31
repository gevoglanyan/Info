import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: 'CREATE YOUR PROFILE',    desc: 'Set up your account with basic info and start building your Two Touch identity.' },
  { title: 'LOG YOUR MATCHES',       desc: 'Enter results from real-life games against friends or opponents found via the app.' },
  { title: 'TRACK YOUR STATS',       desc: 'Monitor wins, losses, streaks, and Elo rating as your skill improves over time.' },
  { title: 'FIND OPPONENTS',         desc: 'The app matches you with players at your skill level for fair, competitive games.' },
  { title: 'COMPETE & CHALLENGE',    desc: 'Challenge friends or new opponents and go for personal milestones and streaks.' },
  { title: 'ANALYZE & IMPROVE',      desc: 'Study performance charts and leaderboard rankings to sharpen your game.' },
];

const How = () => (
  <section id="how" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(70px,10vw,110px) 24px' }}>

    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}
      style={{ textAlign: 'center', marginBottom: 'clamp(40px,6vw,72px)' }}
    >
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'var(--lime)',
        display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginBottom: 16,
      }}>
        <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
        The Process
        <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
      </div>
      <h2 style={{
        fontFamily: 'var(--display)', fontSize: 'clamp(40px,7vw,72px)',
        letterSpacing: '0.02em', lineHeight: 0.95, marginBottom: 16,
      }}>
        HOW IT WORKS
      </h2>
      <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 'clamp(14px,2vw,17px)', fontWeight: 300, maxWidth: 480, margin: '0 auto' }}>
        Six steps from signing up to dominating your local leaderboard.
      </p>
    </motion.div>

    <div className="tt-step-grid">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          whileHover={{ y: -4, borderColor: 'rgba(109,255,60,0.28)' }}
          style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12, padding: 'clamp(24px,3vw,36px)', textAlign: 'center',
            transition: 'border-color 0.25s',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <span style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(44px,6vw,60px)',
            lineHeight: 1, color: 'var(--lime)', display: 'block', marginBottom: 12, opacity: 0.9,
          }}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(17px,2.2vw,21px)', letterSpacing: '0.04em', marginBottom: 10 }}>
            {step.title}
          </div>
          <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 14, fontWeight: 300, lineHeight: 1.65, margin: 0 }}>
            {step.desc}
          </p>
        </motion.div>
      ))}
    </div>

    <style>{`
      .tt-step-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      @media (max-width: 860px) { .tt-step-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 520px) { .tt-step-grid { grid-template-columns: 1fr; } }
    `}</style>
  </section>
);

export default How;