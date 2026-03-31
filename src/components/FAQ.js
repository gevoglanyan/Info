import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  { icon: '🎮', title: 'HOW DO I PLAY?',              desc: 'All matches happen in real life. Use Two Touch to log your results after each game — wins, losses, and match stats are all tracked automatically.' },
  { icon: '📈', title: 'WHAT IS ELO RATING?',         desc: 'Elo measures your skill level based on wins, losses, and the strength of opponents. It adjusts after every match to reflect your true level.' },
  { icon: '⚖️', title: 'HOW DOES MATCHMAKING WORK?',  desc: 'The app connects you with players who share similar Elo ratings, so every match is competitive and neither side has an unfair advantage.' },
  { icon: '👥', title: 'CAN I CHALLENGE FRIENDS?',    desc: 'Yes — track head-to-head results, compare stats, and settle the debate of who\'s been putting in the real work.' },
  { icon: '📊', title: 'CAN I SEE MY STATS?',         desc: 'Everything is tracked: wins, losses, streaks, Elo history, and personal milestones. Your full profile tells the story of your progress.' },
  { icon: '🐞', title: 'I FOUND A BUG!',              desc: 'We want to hear about it. Report issues via the contact form or email support@twotouchgame.com — we aim to respond within 24 hours.' },
];

const FAQ = () => (
  <section id="faq" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(70px,10vw,110px) 24px' }}>

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
        Common Questions
        <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(40px,7vw,72px)', letterSpacing: '0.02em', lineHeight: 0.95, marginBottom: 16 }}>
        FAQ
      </h2>
      <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 'clamp(14px,2vw,17px)', fontWeight: 300, maxWidth: 440, margin: '0 auto' }}>
        Everything you've been wondering about Two Touch, answered.
      </p>
    </motion.div>

    <div className="tt-faq-grid">
      {faqs.map((faq, i) => (
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
          <span style={{ fontSize: 32, display: 'block', marginBottom: 16 }}>{faq.icon}</span>
          <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(17px,2.2vw,21px)', letterSpacing: '0.04em', marginBottom: 10 }}>
            {faq.title}
          </div>
          <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 14, fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
            {faq.desc}
          </p>
        </motion.div>
      ))}
    </div>

    <style>{`
      .tt-faq-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      @media (max-width: 860px) { .tt-faq-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 520px) { .tt-faq-grid { grid-template-columns: 1fr; } }
    `}</style>
  </section>
);

export default FAQ;