"use client";

import { useEffect, useRef, useState } from "react";
import {
  IconBolt,
  IconShieldLock,
  IconTrendingUp,
  IconCpu,
  IconChartDots,
  IconApi,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconBolt,
    title: "Lightning Fast",
    desc: "Optimized performance with sub-second load times and seamless user experiences.",
    accent: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/20",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    borderHover: "hover:border-cyan-500/40",
  },
  {
    icon: IconShieldLock,
    title: "Enterprise Security",
    desc: "Bank-grade encryption and zero-trust architecture to protect your data at all times.",
    accent: "from-violet-400 to-purple-600",
    glow: "shadow-violet-500/20",
    border: "border-violet-500/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    borderHover: "hover:border-violet-500/40",
  },
  {
    icon: IconTrendingUp,
    title: "Infinite Scaling",
    desc: "Auto-scales to millions of users without breaking a sweat or your budget.",
    accent: "from-emerald-400 to-teal-500",
    glow: "shadow-emerald-500/20",
    border: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    borderHover: "hover:border-emerald-500/40",
  },
  {
    icon: IconCpu,
    title: "AI-Powered",
    desc: "Built-in intelligence that learns from your users and continuously improves.",
    accent: "from-pink-400 to-rose-500",
    glow: "shadow-pink-500/20",
    border: "border-pink-500/20",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
    borderHover: "hover:border-pink-500/40",
  },
  {
    icon: IconChartDots,
    title: "Deep Analytics",
    desc: "Real-time dashboards and predictive insights to drive smarter decisions.",
    accent: "from-amber-400 to-orange-500",
    glow: "shadow-amber-500/20",
    border: "border-amber-500/20",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    borderHover: "hover:border-amber-500/40",
  },
  {
    icon: IconApi,
    title: "Developer-First API",
    desc: "Clean REST & GraphQL APIs with SDKs in 12+ languages and zero friction.",
    accent: "from-sky-400 to-indigo-500",
    glow: "shadow-sky-500/20",
    border: "border-sky-500/20",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
    borderHover: "hover:border-sky-500/40",
  },
];

function FeatureCard({ item, index }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const Icon = item.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 100);
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
      }}
      className={`
        relative group p-6 rounded-2xl
        bg-[#0d0d18] border ${item.border} ${item.borderHover}
        ${hovered ? `shadow-xl ${item.glow}` : "shadow-none"}
        transition-all duration-300 cursor-default overflow-hidden
      `}
    >
      {/* top gradient line on hover */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.accent}
          transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
      />

      {/* ambient blob */}
      <div
        className={`absolute -top-10 -right-10 w-36 h-36 rounded-full bg-gradient-to-br ${item.accent}
          opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
      />

      {/* number badge */}
      <span
        className={`absolute top-5 right-5 text-[10px] font-mono font-semibold
        bg-gradient-to-r ${item.accent} bg-clip-text text-transparent opacity-30`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* icon box */}
      <div
        className={`${item.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-5
          border ${item.border} transition-transform duration-300 ${hovered ? "scale-110" : "scale-100"}`}
      >
        <Icon size={24} className={item.iconColor} strokeWidth={1.5} />
      </div>

      <h3 className="text-white text-[15px] font-semibold mb-2 tracking-tight">
        {item.title}
      </h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>

      {/* learn more link */}
      <div
        className={`mt-5 flex items-center gap-1.5 text-xs font-medium
          bg-gradient-to-r ${item.accent} bg-clip-text text-transparent
          transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
      >
        Learn more →
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="relative py-28 px-6 bg-[#06060c] overflow-hidden">
      {/* grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* center radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-[10px] tracking-[0.25em] uppercase font-mono
            text-indigo-400 mb-4 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5"
          >
            ✦ What we offer
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Future Ready{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-zinc-500 mt-4 text-lg max-w-xl mx-auto leading-relaxed">
            Build scalable and modern applications with powerful tools built for
            tomorrow.
          </p>
        </div>

        {/* cards grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {features.map((item, i) => (
            <FeatureCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            className="
            inline-flex items-center gap-3 px-8 py-3.5 rounded-full
            text-sm font-semibold text-white
            bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500
            hover:opacity-90 active:scale-95 transition-all duration-200
            shadow-lg shadow-indigo-500/30
          "
          >
            Explore all features
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
