"use client";
import { FaCommentDots, FaRocket } from "react-icons/fa";
import InteractionCard from "@/component/InteractionCard";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const MyInteractions = () => {
  const [comments, setComments] = useState([]);

  const session = authClient.useSession?.();
  const user = session?.data?.user;

  useEffect(() => {
    const fetchComments = async () => {
      if (!user?.email) return;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/my-comments/${user.email}`,
      );

      const data = await res.json();
      setComments(data);
    };

    fetchComments();
  }, [user?.email]);

  return (
    <div className="space-y-4  min-h-screen bg-gradient-to-b from-[#050816] to-[#0B1120]  py-10">
      <h2 className="text-3xl font-bold text-center text-white">
        My Interactions
      </h2>

      {comments.length === 0 ? (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
          <div
            className="relative overflow-hidden max-w-2xl w-full rounded-[40px]
        border border-white/10 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]
        p-10 text-center shadow-2xl"
          >
            {/* Glow */}
            <div className="absolute -top-20 -left-20 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Icon */}
            <div
              className="mx-auto mb-6 flex h-24 w-24 items-center justify-center
          rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg"
            >
              <FaCommentDots className="text-4xl text-white" />
            </div>

            {/* Title */}
            <h1 className="text-4xl font-extrabold text-white mb-4">
              No Interactions Yet 💬
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto mb-8">
              You haven’t commented or interacted with any ideas yet. Explore
              projects, leave comments, and connect with creators.
            </p>

            {/* Button */}
            <Link href="/ideas">
              <button
                className="inline-flex items-center gap-3 rounded-full
            bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4
            text-lg font-semibold text-white shadow-lg transition-all
            duration-300 hover:scale-105 hover:shadow-cyan-500/40"
              >
                <FaRocket />
                Explore Ideas
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4 max-w-9/12 mx-auto">
          {comments.map((item) => (
            <InteractionCard key={item._id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInteractions;
