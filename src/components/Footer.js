import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 md:py-12 text-textLight text-center border-t border-gray-700 px-4">
      <p className="font-body text-sm sm:text-base">© 2026 Two Touch. All Rights Reserved.</p>
      <p className="mt-4 sm:mt-6 font-body text-sm sm:text-base">
        Created by{" "}
        <a
          href="https://gevoglanyan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accentHover hover:underline transition-colors font-medium"
        >
          Harry Gevoglanyan
        </a>
      </p>
    </footer>
  );
};

export default Footer;