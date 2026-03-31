import React from 'react';

const links = [
  { label: 'How It Works', id: 'how' },
  { label: 'Features',     id: 'features' },
  { label: 'Modes',        id: 'modes' },
  { label: 'FAQ',          id: 'faq' },
  { label: 'Legal',        id: 'legal' },
];

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: 'clamp(36px,6vw,56px) 24px',
      textAlign: 'center',
    }}>
      <div style={{
        fontFamily: 'var(--display)', fontSize: 'clamp(28px,5vw,36px)',
        letterSpacing: '0.04em', marginBottom: 8,
      }}>
        TWO <span style={{ color: 'var(--lime)' }}>TOUCH</span>
      </div>

      <p style={{ color: 'rgba(244,239,230,0.4)', fontSize: 13, marginBottom: 28 }}>
        The IRL Soccer Companion App · Launching 2026
      </p>

      <ul style={{
        display: 'flex', gap: 'clamp(12px,3vw,28px)', listStyle: 'none',
        justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28,
      }}>
        {links.map(link => (
          <li key={link.id}>
            <button
              onClick={() => scrollTo(link.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'rgba(244,239,230,0.4)', fontSize: 13,
                fontFamily: 'var(--body)', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--white)'}
              onMouseLeave={e => e.target.style.color = 'rgba(244,239,230,0.4)'}
            >
              {link.label}
            </button>
          </li>
        ))}
        <li>
          <a
            href="mailto:support@twotouchgame.com"
            style={{ color: 'rgba(244,239,230,0.4)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(244,239,230,0.4)'}
          >
            Contact
          </a>
        </li>
      </ul>

      <div style={{ marginBottom: 28 }}>
        <a
          href="https://www.instagram.com/twotouchgame"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: 'rgba(244,239,230,0.4)', textDecoration: 'none',
            fontSize: 14, transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--lime)'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(244,239,230,0.4)'}
        >
          <svg width="16" height="16" viewBox="0 0 496 512" fill="currentColor">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.8 0 184.8 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.8-1.7 67.6-9.9 93.9-36.1s34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
          </svg>
          twotouchgame
        </a>
      </div>

      <p style={{ color: 'rgba(244,239,230,0.25)', fontSize: 12, fontFamily: 'var(--mono)', letterSpacing: '0.04em' }}>
        © 2026 Two Touch · All Rights Reserved <br /> <br />Created by{' '}
        <a
          href="https://gevoglanyan.com"
          target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--lime)', textDecoration: 'none' }}
        >
          Harry Gevoglanyan
        </a>
      </p>
    </footer>
  );
};

export default Footer;