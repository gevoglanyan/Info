import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01', label: '📱 Step One', title: 'DOWNLOAD THE APP',
    desc: 'Get Two Touch from the App Store or Google Play. Create your account in seconds with just your email — no long forms, no fuss.',
  },
  {
    num: '02', label: '👤 Step Two', title: 'SET UP YOUR PROFILE',
    desc: 'Add your position, set your skill level, and connect with friends already on the platform. Your profile is your soccer identity.',
  },
  {
    num: '03', label: '⚽ Step Three', title: 'LOG YOUR FIRST MATCH',
    desc: 'After any real-life game, open the app and enter the result. Two Touch automatically calculates your Elo rating change — no math required.',
  },
  {
    num: '04', label: '📊 Step Four', title: 'TRACK & COMPETE',
    desc: 'Watch your stats grow, climb the leaderboards, and get matched with opponents at your level. The grind starts here.',
  },
];

const GettingStarted = () => (
  <section id="start" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(70px,10vw,110px) 24px' }}>

    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}
      style={{ textAlign: 'center', marginBottom: 'clamp(48px,7vw,80px)' }}
    >
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'var(--lime)',
        display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginBottom: 16,
      }}>
        <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
        Getting Started
        <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(40px,7vw,72px)', letterSpacing: '0.02em', lineHeight: 0.95, marginBottom: 16 }}>
        UP AND RUNNING<br />IN 4 STEPS
      </h2>
      <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 'clamp(14px,2vw,17px)', fontWeight: 300, maxWidth: 440, margin: '0 auto' }}>
        From download to your first tracked match in minutes.
      </p>
    </motion.div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 700, margin: '0 auto' }}>
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          style={{
            display: 'grid', gridTemplateColumns: 'clamp(44px,8vw,80px) 1fr',
            gap: 'clamp(16px,3vw,32px)',
            paddingBottom: i < steps.length - 1 ? 'clamp(32px,5vw,56px)' : 0,
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: 'clamp(40px,6vw,52px)', height: 'clamp(40px,6vw,52px)',
              borderRadius: '50%', background: 'var(--lime)', color: 'var(--pitch)',
              fontFamily: 'var(--display)', fontSize: 'clamp(16px,2.5vw,22px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, position: 'relative', zIndex: 1,
            }}>
              {step.num}
            </div>
            {i < steps.length - 1 && (
              <div style={{
                flex: 1, width: 1, marginTop: 8,
                background: 'linear-gradient(to bottom, var(--lime), transparent)',
                opacity: 0.3,
              }} />
            )}
          </div>

          <div style={{ paddingTop: 10 }}>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--lime)',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6,
            }}>
              {step.label}
            </div>
            <div style={{
              fontFamily: 'var(--display)', fontSize: 'clamp(22px,3.5vw,28px)',
              letterSpacing: '0.04em', marginBottom: 10,
            }}>
              {step.title}
            </div>
            <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 'clamp(14px,1.8vw,15px)', fontWeight: 300, lineHeight: 1.65, margin: 0 }}>
              {step.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
      style={{ textAlign: 'center', marginTop: 'clamp(48px,7vw,80px)' }}
    >
      <p style={{ color: 'rgba(244,239,230,0.4)', fontSize: 14, fontFamily: 'var(--mono)', marginBottom: 20, letterSpacing: '0.04em' }}>
        Ready to start tracking your soccer journey?
      </p>
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
        Join the Waitlist
      </a>
    </motion.div>
  </section>
);

export default GettingStarted;