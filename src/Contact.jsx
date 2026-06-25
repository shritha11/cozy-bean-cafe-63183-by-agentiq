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

export default function Contact() {
  return (
    <section
      style={{
        backgroundColor: C.bgAlt,
        color: C.text,
        padding: C.sectionPad,
        fontFamily: C.font,
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: C.maxW,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            marginBottom: "24px",
          }}
        >
          Contact Us
        </h2>
        <p
          style={{
            color: C.textMuted,
            marginBottom: "40px",
            lineHeight: "1.6",
          }}
        >
          We'd love to hear from you! Whether you have a question about our menu,
          want to book a table, or just want to say hello, feel free to get in
          touch.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: C.gap,
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: C.surface,
              padding: C.cardPad,
              borderRadius: C.cardR,
              boxShadow: C.shadow,
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <p
              style={{
                color: C.textMuted,
                marginBottom: "8px",
              }}
            >
              Email us at:
            </p>
            <a
              href="mailto:contact@cozybeancafe.com"
              style={{
                color: C.primary,
                textDecoration: "none",
              }}
            >
              contact@cozybeancafe.com
            </a>
          </div>
          <div
            style={{
              background: C.surface,
              padding: C.cardPad,
              borderRadius: C.cardR,
              boxShadow: C.shadow,
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <p
              style={{
                color: C.textMuted,
                marginBottom: "8px",
              }}
            >
              Call us at:
            </p>
            <a
              href="tel:+1234567890"
              style={{
                color: C.primary,
                textDecoration: "none",
              }}
            >
              +1 (234) 567-890
            </a>
          </div>
          <div
            style={{
              background: C.surface,
              padding: C.cardPad,
              borderRadius: C.cardR,
              boxShadow: C.shadow,
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <p
              style={{
                color: C.textMuted,
                marginBottom: "8px",
              }}
            >
              Visit us at:
            </p>
            <p
              style={{
                color: C.text,
              }}
            >
              123 Cozy Bean Lane, Warmtown, CA 90210
            </p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1605088576635-db443afdcab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwxfHxjYWZlJTIwd2Vic2l0ZSUwRCUwQVVzZXIlMjBkaXJlY3Rpb24lM0ElMjBjb3p5fGVufDB8fHx8MTc4MjQwNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cozy Bean Cafe"
          style={{
            marginTop: "40px",
            borderRadius: C.cardR,
            boxShadow: C.shadow,
            width: "100%",
            maxWidth: "800px",
          }}
        />
      </div>
    </section>
  );
}