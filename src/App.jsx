import React from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Features from './Features.jsx';
import Menu from './Menu.jsx';
import Blog from './Blog.jsx'; // Added Blog section
import Gallery from './Gallery.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

// ─── DESIGN TOKENS — use these exact values everywhere. Never invent hex colors. ───
const C = {
  bg:           "#0f0a06",
  bgAlt:        "#1c140e",
  surface:      "rgba(255,255,255,0.04)",
  surfaceHover: "rgba(255,255,255,0.07)",
  border:       "rgba(255,255,255,0.08)",
  borderHover:  "rgba(255,255,255,0.18)",
  primary:      "#d4a373",
  primaryGlow:  "rgba(212,163,115,0.25)",
  secondary:    "#f5ebe0",
  text:         "#ffffff",
  textMuted:    "rgba(255,255,255,0.5)",
  textSubtle:   "rgba(255,255,255,0.25)",
  heroSize:     "clamp(48px, 8vw, 96px)",
  h2Size:       "clamp(32px, 5vw, 56px)",
  heroWeight:   700,
  heroTracking: "-0.05em",
  heroLH:       1,
  font:         "'Playfair Display', serif",
  sectionPad:   "120px 60px",
  maxW:         "1200px",
  cardPad:      "24px",
  gap:          "16px",
  cardR:        "12px",
  btnR:         "8px",
  shadow:       "0 2px 20px rgba(0,0,0,0.2)",
  glow:         "0 0 40px rgba(212,163,115,0.25)",
  btnShadow:    "0 4px 16px rgba(212,163,115,0.35)",
  ease:         "0.3s ease",
  lift:         "translateY(-2px)",
};

export default function App() {
  return (
    <div style={{
      background: "#0f0a06",
      minHeight: "100vh",
      fontFamily: "'Playfair Display', serif",
      color: "#ffffff",
      overflowX: "hidden"
    }}>
      {/* Render all components in order */}
      <Navbar />
      <Hero />
      <Features />
      <Menu />
      <Blog /> {/* Added Blog component */}
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}