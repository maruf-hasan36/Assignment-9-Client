import React from "react";
import Image from "next/image";
import {
  FaUser,
  FaEnvelope,
  FaMoneyBillWave,
  FaLightbulb,
  FaRocket,
  FaInfo,
} from "react-icons/fa";
import Link from "next/link";
import { Button } from "@heroui/react";
import DeleteIdea from "./DeleteIdea";
import EditIdea from "./EditIdea";

const MyIdeaCard = ({ idea }) => {
  return (
    <div
      className="group relative rounded-3xl overflow-hidden 
    bg-gradient-to-br from-white/10 via-white/5 to-transparent
    border border-white/10 backdrop-blur-2xl
    shadow-lg hover:shadow-violet-500/30
    transition-all duration-500 hover:-translate-y-3"
    >
      <div className="absolute top-3 right-3 flex gap-2 z-20">
        <EditIdea idea={idea}></EditIdea>

        <DeleteIdea idea={idea}></DeleteIdea>
      </div>
      {/* Glow layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-blue-500/10 opacity-70" />

      {/* IMAGE */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={idea?.imageURL}
          alt={idea?.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Dark premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 text-[11px] tracking-wide rounded-full 
          bg-violet-500/70 text-white backdrop-blur-md border border-white/10"
          >
            {idea?.category}
          </span>
        </div>

        {/* Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FaLightbulb className="text-yellow-400" />
            {idea?.title}
          </h2>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-5 text-white">
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
          {idea?.shortDescription}
        </p>

        {/* Problem */}
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-gray-300 leading-relaxed">
          <span className="text-red-400 font-semibold">Problem:</span>{" "}
          {idea?.problemStatement}
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition">
            <FaMoneyBillWave className="text-green-400" />
            <span className="font-medium">${idea?.estimatedBudget}</span>
          </div>

          <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition">
            <FaRocket className="text-cyan-400" />
            <span>Startup Idea</span>
          </div>

          <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl col-span-2 hover:bg-white/10 transition">
            <FaUser className="text-violet-400" />
            <span className="text-sm">{idea?.userName}</span>
          </div>

          <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl col-span-2 hover:bg-white/10 transition">
            <FaEnvelope className="text-pink-400" />
            <span className="text-xs text-gray-300 truncate">
              {idea?.userEmail}
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="pt-2">
          <Link href={`/ideas/${idea?._id}`}>
            <Button
              variant="outline"
              className={"rounded-none text-white font-bold"}
            >
              <FaInfo></FaInfo> View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyIdeaCard;
