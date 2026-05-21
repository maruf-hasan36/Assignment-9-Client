import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaComment, FaTrash, FaArrowRight } from "react-icons/fa";

const InteractionCard = ({ data }) => {
    console.log(data)
  return (
    <div className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0B1120] p-4 transition duration-300 hover:border-cyan-500/40 hover:bg-[#111827]">
      {/* Left Side */}
      <div className="md:flex items-center gap-4">
        {/* Image */}
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={data?.imageURL || "/placeholder.png"}
            alt={data?.title || "idea"}
            fill
            className="object-cover transition duration-300 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div>
          {/* Title */}
          <h2 className="line-clamp-1 text-base font-bold text-white">
            {data?.title}
          </h2>

          {/* Comment Box */}
          <div className="mt-3 flex items-start gap-3 rounded-xl border border-cyan-500/10 bg-cyan-500/5 px-3 py-3">
            {/* Icon */}
            <div className="mt-1 text-cyan-400">
              <FaComment size={13} />
            </div>

            {/* Text */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
                Your Comment
              </p>

              <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-300">
                {data?.text}
              </p>
            </div>
          </div>

          {/* Date */}
          <p className="mt-3 text-xs text-gray-500">
            {new Date(data?.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* View Button */}
        <Link href={`/ideas/${data?.ideaId}`}>
          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-xs font-semibold text-white transition duration-300 hover:scale-105">
            View
            <FaArrowRight size={10} />
          </button>
        </Link>

        {/* Delete Button */}
        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 transition duration-300 hover:scale-110 hover:bg-red-500/20">
          <FaTrash size={13} />
        </button>
      </div>
    </div>
  );
};

export default InteractionCard;
