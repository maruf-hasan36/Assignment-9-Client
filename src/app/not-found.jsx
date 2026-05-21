import React from "react";
import Link from "next/link";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-6">
      <div className="text-center max-w-xl">
        <div className="flex justify-center mb-6">
          <div className="bg-red-500/20 p-6 rounded-full border border-red-500/30 shadow-lg">
            <FaExclamationTriangle className="text-red-500 text-6xl animate-bounce" />
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-extrabold text-white mb-4">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-lg mb-8">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
              <FaHome />
              Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
