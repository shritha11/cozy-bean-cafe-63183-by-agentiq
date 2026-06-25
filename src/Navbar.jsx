import React from 'react';
import { Zap } from 'lucide-react';

const C = {
  bg: "#0f0a06",
  bgAlt: "#1c140e",
  surface: "rgba(255,255,255,0.04)",
  surfaceHover: "rgba(255,255,255,0.07)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(255,255,255,0.18)",
  primary: "#d4a373",
  primaryGlow: "rgba(212,163,115,0.25)",
  secondary: "#f5ebe0",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.5)",
  textSubtle: "rgba(255,255,255,0.25)",
  heroSize: "clamp(48px, 8vw, 96px)",
  h2Size: "clamp(32px, 5vw, 56px)",
  heroWeight: 700,
  heroTracking: "-0.05em",
  heroLH: 1,
  font: "'Playfair Display', serif",
  sectionPad: "120px 60px",
  maxW: "1200px",
  cardPad: "24px",
  gap: "16px",
  cardR: "12px",
  btnR: "8px",
  shadow: "0 2px 20px rgba(0,0,0,0.2)",
  glow: "0 0 40px rgba(212,163,115,0.25)",
  btnShadow: "0 4px 16px rgba(212,163,115,0.35)",
  ease: "0.3s ease",
  lift: "translateY(-2px)",
};

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = React.useState(null);
  const navLinks = ["Home", "Menu", "Blog", "Gallery", "Contact"];

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        height: "68px",
        backgroundColor: C.bg,
        boxShadow: C.shadow,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Zap size={24} color={C.primary} />
        <span
          style={{
            fontSize: "20px",
            fontWeight: 800,
            color: C.text,
            fontFamily: C.font,
          }}
        >
          Cozy Bean Cafe
        </span>
      </div>
      <div style={{ display: "flex", gap: "32px" }}>
        {navLinks.map((link) => (
          <a
            key={link}
            onMouseEnter={() => setHoveredLink(link)}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              fontSize: "14px",
              cursor: "pointer",
              textDecoration: "none",
              color: hoveredLink === link ? C.text : C.textMuted,
              transition: C.ease,
            }}
          >
            {link}
          </a>
        ))}
      </div>
      <button
        style={{
          background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
          padding: "9px 22px",
          borderRadius: C.btnR,
          border: "none",
          color: "#fff",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: C.btnShadow,
          transition: C.ease,
        }}
        onMouseEnter={(e) => {
          e.target.style.opacity = 0.9;
          e.target.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.opacity = 1;
          e.target.style.transform = "translateY(0)";
        }}
      >
        Order Online
      </button>
    </div>
  );
}