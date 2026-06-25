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

export default function Gallery() {
  return (
    <section
      style={{
        backgroundColor: C.bgAlt,
        padding: C.sectionPad,
        color: C.text,
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
            lineHeight: C.heroLH,
            marginBottom: C.gap,
          }}
        >
          Gallery
        </h2>
        <p
          style={{
            color: C.textMuted,
            marginBottom: C.gap,
          }}
        >
          A glimpse into the cozy ambiance and delightful offerings at Cozy Bean Cafe.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: C.gap,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1605088576635-db443afdcab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwxfHxjYWZlJTIwd2Vic2l0ZSUwRCUwQVVzZXIlMjBkaXJlY3Rpb24lM0ElMjBjb3p5fGVufDB8fHx8MTc4MjQwNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cozy cafe interior"
            style={{
              width: "100%",
              borderRadius: C.cardR,
              boxShadow: C.shadow,
              transition: C.ease,
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1691067987594-b1b7f84ba55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwyfHxjYWZlJTIwd2Vic2l0ZSUwRCUwQVVzZXIlMjBkaXJlY3Rpb24lM0ElMjBjb3p5fGVufDB8fHx8MTc4MjQwNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cafe pastries"
            style={{
              width: "100%",
              borderRadius: C.cardR,
              boxShadow: C.shadow,
              transition: C.ease,
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1608128492618-74077a0f9d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwzfHxjYWZlJTIwd2Vic2l0ZSUwRCUwQVVzZXIlMjBkaXJlY3Rpb24lM0ElMjBjb3p5fGVufDB8fHx8MTc4MjQwNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Barista pouring coffee"
            style={{
              width: "100%",
              borderRadius: C.cardR,
              boxShadow: C.shadow,
              transition: C.ease,
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1719581228610-b04fa23d3d26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw0fHxjYWZlJTIwd2Vic2l0ZSUwRCUwQVVzZXIlMjBkaXJlY3Rpb24lM0ElMjBjb3p5fGVufDB8fHx8MTc4MjQwNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cozy seating area"
            style={{
              width: "100%",
              borderRadius: C.cardR,
              boxShadow: C.shadow,
              transition: C.ease,
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1736772424997-d060a145965d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw1fHxjYWZlJTIwd2Vic2l0ZSUwRCUwQVVzZXIlMjBkaXJlY3Rpb24lM0ElMjBjb3p5fGVufDB8fHx8MTc4MjQwNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Freshly brewed coffee"
            style={{
              width: "100%",
              borderRadius: C.cardR,
              boxShadow: C.shadow,
              transition: C.ease,
            }}
          />
        </div>
      </div>
    </section>
  );
}