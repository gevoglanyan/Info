import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  { icon: '🧠', title: 'BETA FEEDBACK OPEN',    desc: 'Collecting player feedback to refine real-life match logging, improve Elo matchmaking, and polish everything before full launch.' },
  { icon: '⚙️', title: 'PERFORMANCE FIXES',     desc: 'Enhanced stat tracking, smoother sync, and improved leaderboard calculations are now live in the latest build.' },
  { icon: '🚀', title: 'WEB VERSION LIVE',       desc: 'Two Touch is now live on the web. Log games, track stats, and see where you stand on the leaderboards from any device.' },
  { icon: '📊', title: 'LEADERBOARD UPDATE',     desc: 'Leaderboards now display streaks, wins, and Elo progression — helping you compare performance with friends and globally.' },
  { icon: '👥', title: 'FRIEND CHALLENGES',      desc: 'Challenge friends directly, track head-to-head results, and settle the debate of who\'s actually been putting in the work.' },
  { icon: '💡', title: 'TIPS & TUTORIALS',       desc: 'New guides covering how to improve your Elo, log stats effectively, and make the most of your real-life gameplay data.' },
];

const Blog = () => (
  <section id="updates" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(70px,10vw,110px) 24px' }}>

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
        What's New
        <span style={{ width: 24, height: 1, background: 'var(--lime)', opacity: 0.5, display: 'block' }} />
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(40px,7vw,72px)', letterSpacing: '0.02em', lineHeight: 0.95, marginBottom: 16 }}>
        UPDATES &amp; NEWS
      </h2>
      <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 'clamp(14px,2vw,17px)', fontWeight: 300, maxWidth: 440, margin: '0 auto' }}>
        We move fast. Here's what's been shipping.
      </p>
    </motion.div>

    <div className="tt-blog-grid">
      {posts.map((post, i) => (
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
          <span style={{ fontSize: 32, display: 'block', marginBottom: 16 }}>{post.icon}</span>
          <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(17px,2.2vw,21px)', letterSpacing: '0.04em', marginBottom: 10 }}>
            {post.title}
          </div>
          <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: 14, fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
            {post.desc}
          </p>
        </motion.div>
      ))}
    </div>

    <style>{`
      .tt-blog-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      @media (max-width: 860px) { .tt-blog-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 520px) { .tt-blog-grid { grid-template-columns: 1fr; } }
    `}</style>
  </section>
);

export default Blog;