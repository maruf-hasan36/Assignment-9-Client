"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    badge: "Creative Innovation",
    title1: "Build The",
    title2: "Future Ideas",
    desc: "Discover startup concepts, collaborate with creators, and transform imagination into reality.",
    btn1: "Explore Ideas",
    btn2: "Start Journey",
  },

  {
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1600&auto=format&fit=crop",
    badge: "Next Generation Platform",
    title1: "Share Your",
    title2: "Big Vision",
    desc: "Connect with innovators worldwide and create impactful digital experiences together.",
    btn1: "Get Started",
    btn2: "Learn More",
  },

  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    badge: "AI & Technology",
    title1: "Turn Ideas",
    title2: "Into Reality",
    desc: "Explore powerful tools and modern technology to launch your next big startup idea.",
    btn1: "Explore Now",
    btn2: "View Projects",
  },
];

const Hero = () => {
  return (
    <div className="px-4 lg:px-8 pt-6">
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="rounded-[2rem] overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[520px] lg:h-[650px] w-full overflow-hidden rounded-[2rem]">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt="Hero Banner"
                fill
                priority
                className="object-cover scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/70 to-[#020617]/20" />

              {/* Glow Effects */}
              <div className="absolute left-10 top-16 h-52 w-52 rounded-full bg-cyan-500/20 blur-[120px]" />

              <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-violet-500/20 blur-[120px]" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-3xl px-6 lg:px-16">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

                    <span className="text-xs font-medium tracking-wide text-cyan-200 uppercase">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Heading */}
                  <h1 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] text-white">
                    {slide.title1}
                    <br />

                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                      {slide.title2}
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="mt-6 max-w-2xl text-sm md:text-base lg:text-lg leading-8 text-slate-300">
                    {slide.desc}
                  </p>

                  {/* Buttons */}
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link
                      href="/ideas"
                      className="rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105"
                    >
                      {slide.btn1}
                    </Link>

                    <Link
                      href="/add-idea"
                      className="rounded-2xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/10"
                    >
                      {slide.btn2}
                    </Link>
                  </div>

                  {/* Stats */}
                  <div className="mt-12 flex flex-wrap gap-8">
                    <div>
                      <h2 className="text-3xl font-black text-white">10K+</h2>
                      <p className="text-sm text-slate-400">Active Creators</p>
                    </div>

                    <div>
                      <h2 className="text-3xl font-black text-white">25K+</h2>
                      <p className="text-sm text-slate-400">Startup Ideas</p>
                    </div>

                    <div>
                      <h2 className="text-3xl font-black text-white">150+</h2>
                      <p className="text-sm text-slate-400">Global Partners</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Blur */}
              <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#020617] to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
