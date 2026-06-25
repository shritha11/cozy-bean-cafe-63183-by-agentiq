import React from 'react';

import { Zap, Globe, Shield } from 'lucide-react';

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

export default function Hero() {
  const [hoverPrimary, setHoverPrimary] = React.useState(false);
  const gradientWords = ["Coffee", "Stories"];
  const headline = "Coffee, Community, and Stories";

  return (
    <section
      style={{
        backgroundColor: C.bg,
        padding: C.sectionPad,
        textAlign: "center",
        position: "relative",
        color: C.text,
        fontFamily: C.font,
      }}
    >
      <div
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: `radial-gradient(ellipse, ${C.primaryGlow} 0%, transparent 65%)`,
          filter: "blur(60px)",
        }}
      ></div>
      <div
        style={{
          maxWidth: C.maxW,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: C.primary,
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          WELCOME TO COZY BEAN
        </div>
        <h1
          style={{
            fontSize: C.heroSize,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            marginBottom: "24px",
          }}
        >
          {headline.split(" ").map((word, index) =>
            gradientWords.includes(word) ? (
              <span
                key={index}
                style={{
                  background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline",
                }}
              >
                {word}
              </span>
            ) : (
              <span key={index} style={{ color: C.text, display: "inline" }}>
                {word}
              </span>
            )
          )}
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: C.textMuted,
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 auto 40px",
          }}
        >
          Your neighborhood cafe with updates and more.
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onMouseEnter={() => setHoverPrimary(true)}
            onMouseLeave={() => setHoverPrimary(false)}
            style={{
              background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
              padding: "14px 32px",
              borderRadius: C.btnR,
              border: "none",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: hoverPrimary ? C.glow : C.btnShadow,
              transform: hoverPrimary ? C.lift : "none",
              transition: C.ease,
            }}
          >
            Explore our blog
          </button>
          <button
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "14px 32px",
              borderRadius: C.btnR,
              color: C.text,
              cursor: "pointer",
              transition: C.ease,
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = C.surfaceHover)
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "transparent")
            }
          >
            View our menu →
          </button>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1605088576635-db443afdcab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwxfHxjYWZlJTIwd2Vic2l0ZSUwRCUwQVVzZXIlMjBkaXJlY3Rpb24lM0ElMjBjb3p5fGVufDB8fHx8MTc4MjQwNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Cozy Cafe"
        style={{
          width: "100%",
          maxWidth: "1200px",
          borderRadius: C.cardR,
          marginTop: "40px",
          boxShadow: C.shadow,
        }}
      />
    </section>
  );
}