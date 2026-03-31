import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email,   setEmail]   = useState('');
  const [status,  setStatus]  = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setStatus('loading');
    try {
      const res = await fetch('https://formspree.io/f/mykkkgpk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, _subject: 'New Two Touch Waitlist Signup!' }),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.section
      id="newsletter"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(70px,10vw,110px) 24px' }}
    >
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 16, padding: 'clamp(40px,6vw,72px) clamp(24px,6vw,64px)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(109,255,60,0.08), transparent 60%)',
        }} />

        <div style={{ position: 'relative' }}>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--lime)',
            display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginBottom: 16,
          }}>
            <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
            Don't Miss It
            <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(40px,7vw,72px)',
            letterSpacing: '0.02em', lineHeight: 0.95, marginBottom: 16,
          }}>
            STAY IN THE LOOP
          </h2>

          <p style={{
            color: 'rgba(244,239,230,0.5)', fontSize: 'clamp(14px,2vw,17px)',
            fontWeight: 300, maxWidth: 400, margin: '0 auto',
          }}>
            Sign up to get notified the moment Two Touch launches. No spam. Just the drop.
          </p>

          {status !== 'success' ? (
            <form onSubmit={handleSubmit} className="tt-nl-form">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
                style={{
                  flex: 1, minWidth: 0,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 8, padding: '14px 20px',
                  color: 'var(--white)', fontFamily: 'var(--body)', fontSize: 14,
                  outline: 'none', transition: 'border-color 0.2s',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(109,255,60,0.45)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  background: 'var(--lime)', color: 'var(--pitch)',
                  fontWeight: 600, fontSize: 14, padding: '14px 28px',
                  borderRadius: 8, border: 'none', cursor: 'pointer',
                  whiteSpace: 'nowrap', transition: 'background 0.2s, box-shadow 0.2s',
                  opacity: status === 'loading' ? 0.7 : 1,
                }}
                onMouseEnter={e => { if (status !== 'loading') { e.target.style.background = '#8fff60'; e.target.style.boxShadow = '0 0 28px rgba(109,255,60,0.35)'; }}}
                onMouseLeave={e => { e.target.style.background = 'var(--lime)'; e.target.style.boxShadow = 'none'; }}
              >
                {status === 'loading' ? 'Signing up…' : 'Sign Me Up'}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                marginTop: 32, padding: '20px 32px',
                background: 'rgba(109,255,60,0.08)',
                border: '1px solid rgba(109,255,60,0.25)',
                borderRadius: 10, display: 'inline-block',
                fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--lime)',
                letterSpacing: '0.04em',
              }}
            >
              ✓ You're in! We'll hit you when it drops.
            </motion.div>
          )}

          {status === 'error' && (
            <p style={{ marginTop: 12, color: '#ff6b6b', fontSize: 14 }}>
              Something went wrong — please try again.
            </p>
          )}

          <p style={{ marginTop: 24, fontSize: 12, color: 'rgba(244,239,230,0.3)', fontFamily: 'var(--mono)', letterSpacing: '0.06em' }}>
            Launching August 15, 2026 · No spam · Unsubscribe anytime
          </p>
        </div>
      </div>

      <style>{`
        .tt-nl-form {
          display: flex;
          gap: 12px;
          max-width: 480px;
          margin: 32px auto 0;
        }
        .tt-nl-form input::placeholder { color: rgba(244,239,230,0.35); }
        @media (max-width: 520px) {
          .tt-nl-form { flex-direction: column; }
          .tt-nl-form button { width: 100%; }
        }
      `}</style>
    </motion.section>
  );
};

export default Newsletter;