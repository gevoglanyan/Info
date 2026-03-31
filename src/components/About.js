import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { icon: '⚽', title: 'OUR STORY',    desc: 'Started from pickup games among friends who wanted an easy way to track wins and losses without spreadsheets — turning real-life soccer into a competitive tracking experience.' },
  { icon: '🌍', title: 'OUR MISSION',  desc: 'Connect soccer players worldwide through real competition and a platform that tracks performance, skill progression, and fair matchmaking at every level.' },
  { icon: '🎯', title: 'OUR VISION',   desc: 'A global community where players compete fairly, track their improvement, and experience real-world soccer like never before — regardless of where they play.' },
  { icon: '👨‍💻', title: 'THE TEAM',    desc: 'Created by Harry Gevoglanyan — Developer & Designer — combining real-life sports with smart digital tracking and competitive matchmaking since day one.' },
  { icon: '💡', title: 'OUR VALUES',   desc: 'Fair play, progress, community, and accessibility guide everything — from the app\'s design to how matches are tracked, ranked, and rewarded.' },
  { icon: '📈', title: 'THE SYSTEM',   desc: 'Players log real-life matches, the app calculates Elo ratings, and matchmaking ensures every competition is balanced, fair, and meaningful.' },
];

const About = () => (
  <section id="about" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(70px,10vw,110px) 24px' }}>

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
        The Story
        <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(40px,7vw,72px)', letterSpacing: '0.02em', lineHeight: 0.95, marginBottom: 16 }}>
        ABOUT TWO TOUCH
      </h2>
      <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 'clamp(14px,2vw,17px)', fontWeight: 300, maxWidth: 500, margin: '0 auto' }}>
        Built by players, for players. Two Touch started from a problem every pickup footballer knows.
      </p>
    </motion.div>

    <div className="tt-about-grid">
      {items.map((item, i) => (
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
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
        >
          <span style={{ fontSize: 32, display: 'block', marginBottom: 16 }}>{item.icon}</span>
          <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(17px,2.2vw,21px)', letterSpacing: '0.04em', marginBottom: 10 }}>
            {item.title}
          </div>
          <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 14, fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>

    <style>{`
      .tt-about-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      @media (max-width: 860px) { .tt-about-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 520px) { .tt-about-grid { grid-template-columns: 1fr; } }
    `}</style>
  </section>
);

export default About;