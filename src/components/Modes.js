import React from 'react';
import { motion } from 'framer-motion';

const challenges = [
  { icon: '🥅', name: 'PENALTY SHOOTOUTS', desc: 'Test your nerves from the spot. Score as many as you can against the keeper.' },
  { icon: '🎯', name: 'CROSSBAR CHALLENGE', desc: 'Show off your precision — hit the crossbar as many times as possible.' },
  { icon: '⚽', name: 'FREEKICKS',          desc: 'Bend it like Beckham. Score from different freekick positions and distances.' },
  { icon: '🤹', name: 'JUGGLING CHALLENGE', desc: 'Keep the ball airborne as long as possible without letting it touch the ground.' },
  { icon: '🌀', name: 'CORNERS CHALLENGE',  desc: 'Score directly from corners or set up perfect assists for teammates.' },
  { icon: '⏳', name: 'MORE COMING SOON',   desc: 'New challenge types are in development. Follow us to be first to know.' },
];

const games = [
  { icon: '👤', name: '1V1',  desc: 'Head-to-head duels. The purest form of the game — just you and your opponent.' },
  { icon: '👥', name: '3V3',  desc: 'Small-sided, intense matches with your crew. Every touch counts.' },
  { icon: '⚡', name: '5V5',  desc: 'Classic street football style. Fast-paced, technical, and relentless.' },
  { icon: '🏃', name: '6V6',  desc: 'Half-field action with bigger squads. Tactical play starts to matter here.' },
  { icon: '🏟️', name: '11V11', desc: 'The full experience. Play as a complete squad on a proper pitch.' },
  { icon: '⏳', name: 'MORE COMING SOON', desc: 'Exciting new game modes are on the way. Stay tuned.' },
];

const ModeCard = ({ item, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
    whileHover={{ y: -4, borderColor: 'rgba(109,255,60,0.28)' }}
    style={{
      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 12, padding: 'clamp(24px,3vw,32px)', textAlign: 'center',
      transition: 'background 0.25s, border-color 0.25s',
    }}
    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
  >
    <span style={{ fontSize: 32, display: 'block', marginBottom: 14 }}>{item.icon}</span>
    <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(17px,2.2vw,20px)', letterSpacing: '0.04em', marginBottom: 10 }}>
      {item.name}
    </div>
    <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 14, fontWeight: 300, lineHeight: 1.65, margin: 0 }}>
      {item.desc}
    </p>
  </motion.div>
);

const SubHeading = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.5 }}
    style={{
      fontFamily: 'var(--display)', fontSize: 'clamp(22px,4vw,32px)',
      letterSpacing: '0.04em', color: 'var(--lime)',
      textAlign: 'center', marginBottom: 24,
    }}
  >
    {children}
  </motion.div>
);

const Modes = () => (
  <section id="modes" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(70px,10vw,110px) 24px' }}>

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
        How You Play
        <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(40px,7vw,72px)', letterSpacing: '0.02em', lineHeight: 0.95, marginBottom: 16 }}>
        GAME MODES
      </h2>
      <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 'clamp(14px,2vw,17px)', fontWeight: 300, maxWidth: 480, margin: '0 auto' }}>
        From 1v1 duels to full 11-a-side — log any format. Challenges keep it interesting between matches.
      </p>
    </motion.div>

    <SubHeading>⚡ CHALLENGES</SubHeading>
    <div className="tt-mode-grid" style={{ marginBottom: 64 }}>
      {challenges.map((item, i) => <ModeCard key={i} item={item} i={i} />)}
    </div>

    <SubHeading>🏟️ GAMES</SubHeading>
    <div className="tt-mode-grid">
      {games.map((item, i) => <ModeCard key={i} item={item} i={i} />)}
    </div>

    <style>{`
      .tt-mode-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      @media (max-width: 860px) { .tt-mode-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 520px) { .tt-mode-grid { grid-template-columns: 1fr; } }
    `}</style>
  </section>
);

export default Modes;