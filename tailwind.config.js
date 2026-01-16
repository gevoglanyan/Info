module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",      // Deep slate
        secondary: "#1E293B",    // Dark slate
        accent: "#06B6D4",       // Cyan
        accentHover: "#0891B2",  // Darker cyan
        highlight: "#10B981",    // Emerald green
        textLight: "#F8FAFC",    // Almost white
        textDark: "#0F172A",     // Dark slate
        cardBg: "#FFFFFF",       // White cards
        gradientStart: "#0F172A",
        gradientMid: "#1E293B",
        gradientEnd: "#334155",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Urbanist", "sans-serif"],
      },
      boxShadow: {
        'card': '0 10px 40px rgba(6, 182, 212, 0.15)',
        'card-hover': '0 20px 60px rgba(6, 182, 212, 0.25)',
        'glow': '0 0 30px rgba(6, 182, 212, 0.3)',
      },
    },
  },
  plugins: [],
};