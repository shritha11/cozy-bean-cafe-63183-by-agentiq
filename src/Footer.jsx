import React from 'react';

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

export default function Footer() {
  return (
    <footer
      style={{
        background: C.bg,
        borderTop: `1px solid ${C.border}`,
        padding: "80px 80px 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "60px",
        }}
      >
        <div style={{ maxWidth: "240px" }}>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "-0.05em",
              background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Cozy Bean Cafe
          </div>
          <div
            style={{
              fontSize: "14px",
              color: C.textSubtle,
              marginTop: "8px",
            }}
          >
            Warm coffee, cozy vibes, and unforgettable moments.
          </div>
        </div>
        <div style={{ display: "flex", gap: "64px" }}>
          <div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Explore
            </div>
            <a
              href="#menu"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Menu
            </a>
            <a
              href="#about"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              About Us
            </a>
            <a
              href="#gallery"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Gallery
            </a>
            <a
              href="#blog"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Blog
            </a>
          </div>
          <div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Visit
            </div>
            <a
              href="#location"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Location
            </a>
            <a
              href="#hours"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Hours
            </a>
            <a
              href="#contact"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Contact
            </a>
            <a
              href="#reservations"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Reservations
            </a>
          </div>
          <div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Connect
            </div>
            <a
              href="#facebook"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Facebook
            </a>
            <a
              href="#instagram"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Instagram
            </a>
            <a
              href="#twitter"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid ${C.border}`,
          paddingTop: "32px",
          marginTop: "0",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            color: C.textSubtle,
          }}
        >
          © 2026 Cozy Bean Cafe. All rights reserved.
        </div>
        <div
          style={{
            fontSize: "13px",
            color: C.textSubtle,
          }}
        >
          Built with AgentIQ
        </div>
      </div>
    </footer>
  );
}