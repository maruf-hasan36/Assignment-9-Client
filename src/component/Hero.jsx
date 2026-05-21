"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="px-4 pt-4 lg:px-8">
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="overflow-hidden rounded-2xl"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
            <Image
              src="https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fpc-setup&ved=0CBYQjRxqFwoTCMi8ldDgypQDFQAAAAAdAAAAABAF&opi=89978449"
              alt="Startup"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/95 via-[#050816]/70 to-transparent" />

            {/* Glow */}
            <div className="absolute left-10 top-10 h-44 w-44 rounded-full bg-violet-600/30 blur-[90px]" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl px-6 lg:px-14">
                <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-xs font-medium text-cyan-300 backdrop-blur-xl">
                  Startup Innovation
                </span>

                <h1 className="mt-4 text-3xl font-black leading-tight text-white lg:text-5xl">
                  Share Ideas.
                  <br />
                  Build The
                  <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    {" "}
                    Future
                  </span>
                </h1>

                <p className="mt-4 max-w-lg text-sm leading-7 text-gray-300 lg:text-base">
                  Discover innovative startup ideas and collaborate with
                  creators around the world.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <button className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105">
                    Explore Ideas
                  </button>

                  <button className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/10">
                    Submit Idea
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
            <Image
              src="https://cdn.pixabay.com/photo/2020/06/04/11/10/bulb-5258341_1280.jpg"
              alt="Ideas"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/95 via-[#050816]/70 to-transparent" />

            <div className="absolute left-10 top-10 h-44 w-44 rounded-full bg-cyan-500/30 blur-[90px]" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl px-6 lg:px-14">
                <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1 text-xs font-medium text-violet-300 backdrop-blur-xl">
                  Creative Concepts
                </span>

                <h1 className="mt-4 text-3xl font-black leading-tight text-white lg:text-5xl">
                  Transform Ideas
                  <br />
                  Into
                  <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    {" "}
                    Reality
                  </span>
                </h1>

                <p className="mt-4 max-w-lg text-sm leading-7 text-gray-300 lg:text-base">
                  Connect with innovators and build impactful startup projects
                  together.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105">
                    Get Started
                  </button>

                  <button className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/10">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
            <Image
              src="https://cdn.pixabay.com/photo/2017/07/07/16/49/share-2482016_1280.jpg"
              alt="AI"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/95 via-[#050816]/70 to-transparent" />

            <div className="absolute left-10 top-10 h-44 w-44 rounded-full bg-pink-500/30 blur-[90px]" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl px-6 lg:px-14">
                <span className="rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-1 text-xs font-medium text-pink-300 backdrop-blur-xl">
                  AI Innovation
                </span>

                <h1 className="mt-4 text-3xl font-black leading-tight text-white lg:text-5xl">
                  Discover The
                  <br />
                  Next Big
                  <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    {" "}
                    Startup
                  </span>
                </h1>

                <p className="mt-4 max-w-lg text-sm leading-7 text-gray-300 lg:text-base">
                  Explore trending startup concepts powered by creativity and
                  technology.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <button className="rounded-xl bg-gradient-to-r from-pink-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105">
                    Explore Now
                  </button>

                  <button className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/10">
                    View Ideas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
