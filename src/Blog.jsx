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

export default function Blog() {
  const posts = [
    {
      title: "Our Autumn Specials Are Here!",
      date: "October 1, 2023",
      image:
        "https://images.unsplash.com/photo-1691067987594-b1b7f84ba55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwyfHxjYWZlJTIwd2Vic2l0ZSUwRCUwQVVzZXIlMjBkaXJlY3Rpb24lM0ElMjBjb3p5fGVufDB8fHx8MTc4MjQwNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      content:
        "Leaves are falling, and so are our new seasonal specials! Warm up with our pumpkin spice latte or indulge in our freshly baked apple cinnamon scones. Come visit us and taste the flavors of autumn.",
    },
    {
      title: "Meet Our New Barista!",
      date: "September 15, 2023",
      image:
        "https://images.unsplash.com/photo-1608128492618-74077a0f9d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwzfHxjYWZlJTIwd2Vic2l0ZSUwRCUwQVVzZXIlMjBkaXJlY3Rpb24lM0ElMjBjb3p5fGVufDB8fHx8MTc4MjQwNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      content:
        "We’re thrilled to welcome Alex to the Cozy Bean team! Alex brings years of experience and a passion for crafting the perfect cup of coffee. Stop by and say hello!",
    },
    {
      title: "Sustainability at Cozy Bean",
      date: "August 28, 2023",
      image:
        "https://images.unsplash.com/photo-1719581228610-b04fa23d3d26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw0fHxjYWZlJTIwd2Vic2l0ZSUwRCUwQVVzZXIlMjBkaXJlY3Rpb24lM0ElMjBjb3p5fGVufDB8fHx8MTc4MjQwNzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      content:
        "At Cozy Bean, we care about the planet. We’ve introduced compostable cups and locally sourced ingredients to make your coffee experience as eco-friendly as possible. Learn more about our initiatives here.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: C.bgAlt,
        padding: C.sectionPad,
        color: C.text,
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
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            marginBottom: C.gap,
          }}
        >
          Cozy Bean Blog
        </h2>
        <p
          style={{
            color: C.textMuted,
            marginBottom: C.gap,
          }}
        >
          Stay updated with the latest news, specials, and stories from Cozy
          Bean Cafe.
        </p>
        <div
          style={{
            display: "grid",
            gap: C.gap,
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {posts.map((post, index) => (
            <div
              key={index}
              style={{
                backgroundColor: C.surface,
                borderRadius: C.cardR,
                overflow: "hidden",
                boxShadow: C.shadow,
                transition: C.ease,
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  padding: C.cardPad,
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    color: C.textSubtle,
                    fontSize: "14px",
                    marginBottom: "16px",
                  }}
                >
                  {post.date}
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                  }}
                >
                  {post.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}