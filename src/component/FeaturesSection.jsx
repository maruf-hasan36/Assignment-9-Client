import React from "react";

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
    icon: <FiHeadphones size={38} />,
    desc: "Get instant support and guidance from our expert innovation team.",
  },

  {
    id: 2,
    title: "Sales",
    icon: <FiTrendingUp size={38} />,
    desc: "Boost startup visibility and connect with potential investors.",
  },

  {
    id: 3,
    title: "Onboarding",
    icon: <FiGrid size={38} />,
    desc: "Simple onboarding experience for creators and innovators.",
  },

  {
    id: 4,
    title: "Product",
    icon: <FiMessageSquare size={38} />,
    desc: "Collaborate and improve your startup ideas with community feedback.",
  },

  {
    id: 5,
    title: "Quality",
    icon: <FiShield size={38} />,
    desc: "High-quality platform experience with secure idea management.",
  },

  {
    id: 6,
    title: "Result",
    icon: <FiPieChart size={38} />,
    desc: "Track engagement and measure the success of your startup ideas.",
  },
];

const FeaturesSection = () => {
  return (
    <section className=" py-20">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 lg:text-5xl">
          Turn every step into a smarter experience
        </h1>

        <p className="mt-5 text-gray-500">
          Make every interaction simple, fast, and meaningful
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 border border-gray-200 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center border border-gray-200 px-10 py-16 text-center transition duration-300 hover:bg-gray-50"
          >
            {/* Icon */}
            <div className="text-gray-700">{item.icon}</div>

            {/* Title */}
            <h2 className="mt-6 text-xl font-bold text-gray-900">
              {item.title}
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm leading-7 text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
