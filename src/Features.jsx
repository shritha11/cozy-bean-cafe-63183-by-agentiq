import React from 'react';
import { Heart, Zap, Globe, TrendingUp, Star, Users } from 'lucide-react';

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

export default function Features() {
  const cards = [
    { icon: Heart, title: "Warm Atmosphere", body: "A cozy space to relax and connect." },
    { icon: Zap, title: "Fresh Brews", body: "Carefully crafted coffee and tea." },
    { icon: Globe, title: "Community Updates", body: "Stay informed with our new blog." },
    { icon: TrendingUp, title: "Seasonal Specials", body: "Discover our rotating menu items." },
    { icon: Star, title: "Local Ingredients", body: "We source from nearby farms and vendors." },
    { icon: Users, title: "Friendly Staff", body: "Always here to make your day better." },
  ];

  return (
    <section
      style={{
        backgroundColor: C.bgAlt,
        color: C.text,
        padding: C.sectionPad,
        fontFamily: C.font,
      }}
    >
      <div
        style={{
          maxWidth: C.maxW,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: C.textMuted,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: C.gap,
          }}
        >
          Why Cozy Bean
        </div>
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            marginBottom: C.gap,
          }}
        >
          What makes us special
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: C.gap,
            marginTop: C.gap,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                backgroundColor: C.surface,
                borderRadius: C.cardR,
                padding: C.cardPad,
                boxShadow: C.shadow,
                transition: C.ease,
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = C.surfaceHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = C.surface)
              }
            >
              <card.icon
                size={48}
                style={{
                  color: C.primary,
                  marginBottom: C.gap,
                }}
              />
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: C.gap,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  color: C.textMuted,
                  lineHeight: "1.6",
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}