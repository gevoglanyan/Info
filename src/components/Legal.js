import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { icon: '🔒', title: 'PRIVACY POLICY',     desc: 'We collect minimal data — email and gameplay stats only — to improve your experience. Your data is never sold. You can request deletion anytime.' },
  { icon: '📜', title: 'TERMS OF SERVICE',   desc: 'By using Two Touch, you agree to play fairly, respect other players, and report issues responsibly. Misuse may result in account suspension.' },
  { icon: '🍪', title: 'COOKIE POLICY',      desc: 'We use cookies to enhance performance and analytics. You can disable cookies anytime in browser settings without affecting core functionality.' },
  { icon: '🛡️', title: 'SAFETY & SECURITY',  desc: 'Account security and fair play are our priority. All sensitive data is encrypted and we continuously monitor for fraudulent activity.' },
  { icon: '⚖️', title: 'DISPUTE RESOLUTION', desc: 'Disputes around match results, rankings, or accounts can be submitted through our support channels for a fair and timely review.' },
];

const Legal = () => (
  <section id="legal" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(70px,10vw,110px) 24px' }}>

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
        Policies
        <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(40px,7vw,72px)', letterSpacing: '0.02em', lineHeight: 0.95, marginBottom: 16 }}>
        LEGAL &amp; POLICIES
      </h2>
      <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 'clamp(14px,2vw,17px)', fontWeight: 300, maxWidth: 480, margin: '0 auto' }}>
        We believe in full transparency about how Two Touch handles your data and your account.
      </p>
    </motion.div>

    <div className="tt-legal-grid">
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

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px dashed rgba(109,255,60,0.2)',
          borderRadius: 12, padding: 'clamp(24px,3vw,32px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', gap: 12,
        }}
      >
        <div style={{ fontFamily: 'var(--display)', fontSize: 20, letterSpacing: '0.04em' }}>QUESTIONS?</div>
        <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 14, fontWeight: 300, margin: 0 }}>
          Our team is happy to help with any legal or policy questions.
        </p>
        <a
          href="mailto:support@twotouchgame.com"
          style={{
            marginTop: 4, display: 'inline-block',
            background: 'var(--lime)', color: 'var(--pitch)',
            fontWeight: 600, fontSize: 13, padding: '10px 24px', borderRadius: 8,
            textDecoration: 'none', transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#8fff60'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--lime)'}
        >
          Contact Us
        </a>
      </motion.div>
    </div>

    <style>{`
      .tt-legal-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      @media (max-width: 860px) { .tt-legal-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 520px) { .tt-legal-grid { grid-template-columns: 1fr; } }
    `}</style>
  </section>
);

export default Legal;