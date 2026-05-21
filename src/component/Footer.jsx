"use client";

import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#060a18] px-12 pt-16 pb-8 text-white">
      {/* Ambient Glow — top left */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-violet-600/15 blur-[100px]" />

      {/* Ambient Glow — bottom right */}
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-[90px]" />

      {/* Main Grid */}
      <div className="relative z-10 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.8fr]">
        {/* Brand */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 text-lg font-black">
              I
            </div>
            <h1
              className="text-2xl font-bold"
              style={{
                background: "linear-gradient(90deg, #a78bfa, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              IdeaVault
            </h1>
          </div>
          <p className="max-w-[220px] text-[13px] leading-7 text-slate-500">
            Empowering innovators to share ideas and build the future —
            together.
          </p>
        </div>

        {/* Platform */}
        <div>
          <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
            Platform
          </h2>
          <ul className="space-y-3 text-sm text-slate-500">
            {["Ideas", "Categories", "Top Innovators", "Trending"].map(
              (item) => (
                <li
                  key={item}
                  className="group flex cursor-pointer items-center gap-2 transition-colors duration-200 hover:text-violet-400"
                >
                  <span className="h-0 w-0 border-y-[3px] border-l-[4px] border-y-transparent border-l-violet-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
            Company
          </h2>
          <ul className="space-y-3 text-sm text-slate-500">
            {["About Us", "Contact", "Privacy Policy", "Terms of Service"].map(
              (item) => (
                <li
                  key={item}
                  className="group flex cursor-pointer items-center gap-2 transition-colors duration-200 hover:text-violet-400"
                >
                  <span className="h-0 w-0 border-y-[3px] border-l-[4px] border-y-transparent border-l-violet-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
            Follow Us
          </h2>

          {/* Social Icons */}
          <div className="mb-7 flex gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/4 text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/8 hover:text-white">
              <FaGithub size={15} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/4 text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400">
              <FaLinkedinIn size={15} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/4 text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8 hover:text-slate-200">
              <FaXTwitter size={15} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/4 text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-pink-400">
              <FaInstagram size={15} />
            </button>
          </div>

          {/* Newsletter */}
          <p className="mb-3 text-[12px] font-medium tracking-wide text-slate-500">
            Stay in the loop — subscribe
          </p>
          <div className="flex max-w-sm gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-xl border border-white/8 bg-white/4 px-4 py-2.5 text-[13px] text-white outline-none placeholder:text-slate-600 transition-colors duration-200 focus:border-violet-500/50"
            />
            <button className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 active:scale-95 whitespace-nowrap">
              Subscribe →
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="relative z-10 my-10"
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent)",
        }}
      />

      {/* Bottom Bar */}
      <div className="relative z-10 flex items-center justify-between">
        <p className="text-[12px] text-slate-600">
          © 2026{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 500,
            }}
          >
            IdeaVault
          </span>
          . All rights reserved.
        </p>
        <span className="rounded-full border border-white/5 bg-white/3 px-3 py-1 text-[11px] tracking-wide text-slate-600">
          Built for innovators ✦
        </span>
      </div>
    </footer>
  );
};

export default Footer;
