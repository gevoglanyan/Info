import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { icon: '📊', title: 'TRACK YOUR STATS',    desc: 'Log all your real-life matches, wins, losses, and track your Elo rating over time with detailed performance charts.' },
  { icon: '⚖️', title: 'ELO MATCHMAKING',     desc: 'Find opponents at your exact skill level. Every match is fair, competitive, and meaningful to your ranking.' },
  { icon: '🏆', title: 'LEADERBOARDS',        desc: 'See how you rank locally and globally. Watch your position climb as you put in the work.' },
  { icon: '🎯', title: 'CHALLENGES & STREAKS', desc: 'Daily and weekly challenges keep you sharp. Aim for personal records and unlock milestones.' },
  { icon: '👥', title: 'FRIENDS & SOCIAL',    desc: "Track friends' stats, challenge them directly, and compare who's been improving fastest." },
  { icon: '🔔', title: 'NOTIFICATIONS',       desc: 'Get reminders for upcoming challenges and alerts when a well-matched opponent is nearby.' },
];

const Features = () => (
  <section id="features" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(70px,10vw,110px) 24px' }}>

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
        What You Get
        <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(40px,7vw,72px)', letterSpacing: '0.02em', lineHeight: 0.95, marginBottom: 16 }}>
        APP FEATURES
      </h2>
      <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 'clamp(14px,2vw,17px)', fontWeight: 300, maxWidth: 480, margin: '0 auto' }}>
        Everything you need to take your real-life game to the next level.
      </p>
    </motion.div>

    <div className="tt-feat-grid">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          whileHover={{ y: -4, borderColor: 'rgba(109,255,60,0.28)' }}
          style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12, padding: 'clamp(24px,3vw,32px)',
            transition: 'background 0.25s, border-color 0.25s',
            position: 'relative', overflow: 'hidden',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
        >
          <span style={{ fontSize: 32, display: 'block', marginBottom: 16 }}>{f.icon}</span>
          <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(17px,2.2vw,21px)', letterSpacing: '0.04em', marginBottom: 10 }}>
            {f.title}
          </div>
          <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 14, fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
            {f.desc}
          </p>
        </motion.div>
      ))}
    </div>

    <style>{`
      .tt-feat-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      @media (max-width: 860px) { .tt-feat-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 520px) { .tt-feat-grid { grid-template-columns: 1fr; } }
    `}</style>
  </section>
);

export default Features;