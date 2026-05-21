"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import {
  FaLightbulb,
  FaImage,
  FaMoneyBillWave,
  FaRobot,
  FaFileAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const AddIdea = () => {
      const { data: session } = authClient.useSession?.() || {};
      const user = session?.user;

    const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const ideaNew = Object.fromEntries(formData.entries());
    ideaNew.estimatedBudget = parseFloat(ideaNew.estimatedBudget) || 0;

    // user info
    ideaNew.userName = user?.name;
    ideaNew.userEmail = user?.email;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/ideas`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(ideaNew),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Idea Added Successfully");
        router.push("/ideas");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020817] via-[#0f172a] to-[#111827] py-14 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black text-white mb-3">
            Submit Your Startup Idea
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Share your innovative startup concept with the world and inspire
            future entrepreneurs
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Title */}
            <div className="space-y-2">
              <label className="text-white font-semibold flex items-center gap-2">
                <FaLightbulb className="text-yellow-400" />
                Idea Title
              </label>

              <input
                type="text"
                name="title"
                placeholder="Enter your startup idea title"
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 outline-none focus:border-violet-500"
                required
              />
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <label className="text-white font-semibold flex items-center gap-2">
                <FaImage className="text-pink-400" />
                Image URL
              </label>

              <input
                type="text"
                name="imageURL"
                placeholder="Paste image URL"
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 outline-none focus:border-pink-500"
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-white font-semibold flex items-center gap-2">
                <FaRobot className="text-cyan-400" />
                Category
              </label>

              <select
                name="category"
                className="w-full bg-[#111827] border border-white/10 text-white rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
                required
              >
                <option value="">Select Category</option>
                <option value="AI">AI</option>
                <option value="EdTech">EdTech</option>
                <option value="Health">Health</option>
                <option value="FinTech">FinTech</option>
                <option value="Agriculture">Agriculture</option>
              </select>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="text-white font-semibold flex items-center gap-2">
                <FaMoneyBillWave className="text-green-400" />
                Estimated Budget
              </label>

              <input
                type="number"
                name="estimatedBudget"
                placeholder="Budget amount"
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 outline-none focus:border-green-500"
                required
              />
            </div>

            {/* Short Description */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-white font-semibold flex items-center gap-2">
                <FaFileAlt className="text-blue-400" />
                Short Description
              </label>

              <textarea
                name="shortDescription"
                rows="3"
                placeholder="Write a short description..."
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>

            {/* Problem Statement */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-white font-semibold flex items-center gap-2">
                <FaExclamationTriangle className="text-red-400" />
                Problem Statement
              </label>

              <textarea
                name="problemStatement"
                rows="4"
                placeholder="What problem does your startup solve?"
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 outline-none focus:border-red-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="cursor-pointer w-full py-4 rounded-2xl bg-gradient-to-r from-violet-700 to-blue-700 text-white font-bold text-lg hover:scale-[1.02] transition duration-300 shadow-lg shadow-violet-500/20"
              >
                Submit Startup Idea
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddIdea;
