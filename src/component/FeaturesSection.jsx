"use client";

import React, { useState } from "react";
import {
  FiHeadphones,
  FiTrendingUp,
  FiGrid,
  FiMessageSquare,
  FiShield,
  FiPieChart,
} from "react-icons/fi";

const features = [
  {
    id: 1,
    title: "Support",
    icon: FiHeadphones,
    desc: "Get instant support and guidance from our expert innovation team.",
  },
  {
    id: 2,
    title: "Sales",
    icon: FiTrendingUp,
    desc: "Boost startup visibility and connect with potential investors.",
  },
  {
    id: 3,
    title: "Onboarding",
    icon: FiGrid,
    desc: "Simple onboarding experience for creators and innovators.",
  },
  {
    id: 4,
    title: "Product",
    icon: FiMessageSquare,
    desc: "Collaborate and improve your startup ideas with community feedback.",
  },
  {
    id: 5,
    title: "Quality",
    icon: FiShield,
    desc: "High-quality platform experience with secure idea management.",
  },
  {
    id: 6,
    title: "Result",
    icon: FiPieChart,
    desc: "Track engagement and measure the success of your startup ideas.",
  },
];

const FeatureCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#111628" : "#0d1020",
        padding: "2rem 1.5rem 1.75rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        transition: "background 0.25s",
        cursor: "default",
      }}
    >
      {/* Icon box */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: "rgba(126,200,255,0.08)",
          border: hovered
            ? "1px solid rgba(126,200,255,0.5)"
            : "1px solid rgba(126,200,255,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#7ec8ff",
          marginBottom: "1rem",
          transition: "box-shadow 0.25s, border-color 0.25s",
          boxShadow: hovered ? "0 0 18px 4px rgba(126,200,255,0.2)" : "none",
        }}
      >
        <Icon size={20} />
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          color: "#e8eeff",
          margin: "0 0 0.5rem",
        }}
      >
        {item.title}
      </h2>

      {/* Accent line */}
      <div
        style={{
          width: hovered ? 40 : 24,
          height: 2,
          borderRadius: 2,
          background: "linear-gradient(90deg, #7ec8ff, #a78bfa)",
          marginBottom: "0.8rem",
          transition: "width 0.3s",
        }}
      />

      {/* Description */}
      <p
        style={{
          color: "#7a85a0",
          fontSize: "0.875rem",
          lineHeight: 1.65,
          fontWeight: 300,
          margin: 0,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {item.desc}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [ghostHover, setGhostHover] = useState(false);

  return (
    <>
      {/* Font import via link tag approach — add to your _document.js or layout instead if preferred */}
      <section
        style={{
          background: "#06080f",
          padding: "5rem 1rem",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 999,
              border: "1px solid rgba(99,180,255,0.22)",
              background: "rgba(99,180,255,0.08)",
              padding: "5px 16px",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#7ec8ff",
                boxShadow: "0 0 7px 2px rgba(126,200,255,0.55)",
                display: "inline-block",
              }}
            />
            <span
              style={{
                color: "#7ec8ff",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 500,
              }}
            >
              Powered by intelligence
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
              lineHeight: 1.15,
              color: "#f0f4ff",
              margin: "0 0 1rem",
            }}
          >
            Turn every step into a{" "}
            <span
              style={{
                background: "linear-gradient(95deg, #7ec8ff 10%, #a78bfa 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              smarter experience
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "#8a96b0",
              fontWeight: 300,
              fontSize: "1rem",
              maxWidth: 420,
              margin: "0 auto 3.5rem",
              lineHeight: 1.7,
            }}
          >
            Make every interaction simple, fast, and meaningful — with AI
            working silently in the background.
          </p>
        </div>

        {/* Card Grid */}
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 18,
            overflow: "hidden",
          }}
        >
          {features.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginTop: "2.5rem",
          }}
        >
          <button
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              padding: "10px 24px",
              borderRadius: 999,
              border: "none",
              background: "linear-gradient(95deg, #7ec8ff, #a78bfa)",
              color: "#06080f",
              cursor: "pointer",
              opacity: primaryHover ? 0.85 : 1,
              transition: "opacity 0.2s",
            }}
          >
            Explore features →
          </button>
          <button
            onMouseEnter={() => setGhostHover(true)}
            onMouseLeave={() => setGhostHover(false)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              padding: "10px 24px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "transparent",
              color: "#aab3cc",
              cursor: "pointer",
              opacity: ghostHover ? 0.7 : 1,
              transition: "opacity 0.2s",
            }}
          >
            Watch demo
          </button>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
