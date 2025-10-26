import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 text-white text-center">
      <p>© 2025 Two Touch. All Rights Reserved.</p>
      <p className="mt-6">
        Created by{" "}
        <a
          href="https://gevoglanyan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
        >
          Harutyun Gevoglanyan
        </a>
      </p>
    </footer>
  );
};

export default Footer;
