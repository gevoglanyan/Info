import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'How It Works', id: 'how' },
  { label: 'Features',     id: 'features' },
  { label: 'Modes',        id: 'modes' },
  { label: 'About',        id: 'about' },
  { label: 'FAQ',          id: 'faq' },
];

const Header = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '18px 32px',
          background: scrolled ? 'rgba(11,28,12,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        <a href="#top" style={{ fontFamily: 'var(--display)', fontSize: 26, letterSpacing: '0.04em', color: 'var(--white)', textDecoration: 'none' }}>
          TWO <span style={{ color: 'var(--lime)' }}>TOUCH</span>
        </a>

        <nav style={{ display: 'flex', gap: 28, listStyle: 'none', alignItems: 'center' }} className="tt-desktop-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'rgba(244,239,230,0.5)', fontSize: 14, fontFamily: 'var(--body)',
                letterSpacing: '0.02em', transition: 'color 0.2s', padding: '4px 0',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--white)'}
              onMouseLeave={e => e.target.style.color = 'rgba(244,239,230,0.5)'}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={() => scrollTo('newsletter')}
            className="tt-desktop-nav"
            style={{
              background: 'var(--lime)', color: 'var(--pitch)', fontWeight: 600,
              fontSize: 13, padding: '9px 22px', borderRadius: 8, border: 'none',
              cursor: 'pointer', letterSpacing: '0.03em', whiteSpace: 'nowrap',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { e.target.style.background = '#8fff60'; e.target.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.target.style.background = 'var(--lime)'; e.target.style.transform = 'none'; }}
          >
            Join Waitlist
          </button>

          <button
            onClick={() => setMenuOpen(o => !o)}
            className="tt-mobile-nav"
            aria-label="Toggle menu"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: 5, padding: 4,
            }}
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0 ? { rotate: 45,  y: 6.5, opacity: 1 }
                    : i === 1 ? { opacity: 0 }
                    :           { rotate: -45, y: -6.5, opacity: 1 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                style={{
                  display: 'block', width: 22, height: 1.5,
                  background: 'var(--white)', borderRadius: 2,
                }}
              />
            ))}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 499,
              background: 'rgba(11,28,12,0.97)',
              backdropFilter: 'blur(24px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 32,
            }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--display)', fontSize: 'clamp(36px, 8vw, 52px)',
                  letterSpacing: '0.04em', color: 'var(--white)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--lime)'}
                onMouseLeave={e => e.target.style.color = 'var(--white)'}
              >
                {item.label.toUpperCase()}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.07 }}
              onClick={() => scrollTo('newsletter')}
              style={{
                marginTop: 8, background: 'var(--lime)', color: 'var(--pitch)',
                fontWeight: 600, fontSize: 15, padding: '14px 44px',
                borderRadius: 8, border: 'none', cursor: 'pointer',
              }}
            >
              Join Waitlist
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .tt-desktop-nav { display: flex !important; }
        .tt-mobile-nav  { display: none  !important; }
        @media (max-width: 860px) {
          .tt-desktop-nav { display: none  !important; }
          .tt-mobile-nav  { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Header;