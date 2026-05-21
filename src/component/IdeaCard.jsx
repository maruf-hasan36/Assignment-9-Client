import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRobot, FaMoneyBillWave, FaUsers } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const IdeaCard = ({ data }) => {
  return (
    <div className="max-w-sm w-full rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={data.imageURL}
          alt={data.title}
          fill
          className="object-cover"
        />

        <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 z-10">
          <FaRobot /> {data.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-gray-800">{data.title}</h2>

        <p className="text-gray-600 text-sm">{data.shortDescription}</p>

        <p className="text-gray-500 text-sm line-clamp-2">
          {data.problemStatement}
        </p>

        {/* Info Row */}
        <div className="flex justify-between text-sm text-gray-600 pt-2">
          <div className="flex items-center gap-1">
            <FaMoneyBillWave /> {data.estimatedBudget}৳
          </div>

          <div className="flex items-center gap-1">
            <FaUsers /> Students
          </div>
        </div>

        {/* Button */}
        <Link href={`/ideas/${data._id}`}>
          <button className="cursor-pointer mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white py-2 rounded-xl hover:scale-105 transition">
            View Details <HiOutlineArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IdeaCard;
