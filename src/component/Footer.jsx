import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative  overflow-hidden border border-white/10 bg-[#050816] px-6 py-14 text-white lg:px-16">
      {/* Glow Effect */}
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="relative z-10 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        {/* Logo */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500">
              <span className="text-xl font-bold">I</span>
            </div>

            <h1 className="text-2xl font-bold">IdeaVault</h1>
          </div>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            Empowering innovators to share ideas and build the future together.
          </p>
        </div>

        {/* Platform */}
        <div>
          <h2 className="mb-5 text-lg font-semibold">Platform</h2>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="transition hover:text-cyan-400 cursor-pointer">
              Ideas
            </li>

            <li className="transition hover:text-cyan-400 cursor-pointer">
              Categories
            </li>

            <li className="transition hover:text-cyan-400 cursor-pointer">
              Top Innovators
            </li>

            <li className="transition hover:text-cyan-400 cursor-pointer">
              Trending
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="mb-5 text-lg font-semibold">Company</h2>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="transition hover:text-cyan-400 cursor-pointer">
              About Us
            </li>

            <li className="transition hover:text-cyan-400 cursor-pointer">
              Contact
            </li>

            <li className="transition hover:text-cyan-400 cursor-pointer">
              Privacy Policy
            </li>

            <li className="transition hover:text-cyan-400 cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="lg:col-span-2">
          <h2 className="mb-5 text-lg font-semibold">Follow Us</h2>

          {/* Icons */}
          <div className="flex gap-4">
            <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-white transition duration-300 hover:scale-110 hover:border-violet-500 hover:bg-violet-500/10">
              <FaGithub />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-white transition duration-300 hover:scale-110 hover:border-cyan-500 hover:bg-cyan-500/10">
              <FaLinkedinIn />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-white transition duration-300 hover:scale-110 hover:border-white hover:bg-white/10">
              <FaXTwitter />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-white transition duration-300 hover:scale-110 hover:border-pink-500 hover:bg-pink-500/10">
              <FaInstagram />
            </button>
          </div>

          {/* Newsletter */}
          <div className="mt-8">
            <h3 className="mb-4 text-sm text-gray-300">
              Subscribe to our newsletter
            </h3>

            <div className="flex max-w-md items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none placeholder:text-gray-500 backdrop-blur-xl"
              />

              <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-14 border-t border-white/10 pt-6 text-sm text-gray-500">
        © 2026 IdeaVault. All rights reserved.
      </div>

      {/* Astronaut Image */}
      <Image
        src="/fo.png"
        alt="fo"
        width={600}
        height={300}
        className="absolute bottom-20 right-0 hidden opacity-90 lg:block"
      />
    </footer>
  );
};

export default Footer;
