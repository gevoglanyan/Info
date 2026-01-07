import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! Updates will be sent to ${email}`);
    setEmail("");
  };

  return (
    <motion.section
      id="newsletter" 
      className="py-20 px-4 text-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-heading mb-4">Stay Updated</h2>
      <p className="mb-6 font-body">Sign up to get notified when Two Touch launches.</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="info@touchtouchgame.com"
          className="px-4 py-3 rounded-xl text-gray-800 flex-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-gray-200 transition shadow-lg"
        >
          Sign Up
        </button>
      </form>
    </motion.section>
  );
};

export default Newsletter;
