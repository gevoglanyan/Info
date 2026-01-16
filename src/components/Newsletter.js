import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // 'success', 'error', or ''

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mykkkgpk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          _subject: 'New Two Touch Waitlist Signup!',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail("");
        setTimeout(() => setStatus(''), 5000); // Clear message after 5 seconds
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
    }
  };

  return (
    <motion.section
      id="newsletter" 
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-textLight text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl sm:text-4xl font-heading mb-4 font-bold">Stay Updated</h2>
      <p className="mb-6 sm:mb-8 font-body text-base sm:text-lg px-4">Sign up to get notified when Two Touch launches.</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-xl mx-auto px-4"
      >
        <input
          type="email"
          placeholder="your.email@example.com"
          className="px-4 py-3 rounded-xl text-textDark flex-1 focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'success'}
        />
        <button
          type="submit"
          disabled={status === 'success'}
          className="bg-accent text-white font-bold px-6 sm:px-8 py-3 rounded-xl hover:bg-accentHover transition-all shadow-lg hover:shadow-glow transform hover:scale-105 duration-300 text-sm sm:text-base w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'success' ? '✓ Signed Up!' : 'Sign Up'}
        </button>
      </form>

      {/* Status Messages */}
      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-highlight font-body text-sm sm:text-base"
        >
          ✓ Thanks for signing up! We'll notify you at launch.
        </motion.p>
      )}
      
      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-red-400 font-body text-sm sm:text-base"
        >
          Oops! Something went wrong. Please try again.
        </motion.p>
      )}
    </motion.section>
  );
};

export default Newsletter;