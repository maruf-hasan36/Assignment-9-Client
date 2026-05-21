"use client";

import Image from "next/image";
import { FaUser, FaEnvelope, FaEdit } from "react-icons/fa";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";


const ProfilePage = () => {
  const { data: session } = authClient.useSession?.() || {};
  const user = session?.user;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl p-8 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/20 blur-3xl rounded-full" />

        {/* Profile */}
        <div className="flex flex-col items-center text-center relative z-10">
          <Image
            src={user.image || "https://i.pravatar.cc/150"}
            width={120}
            height={120}
            alt="profile"
            className="rounded-full border-4 border-white/20 shadow-lg"
          />

          <h1 className="text-3xl font-bold text-white mt-4 flex items-center gap-2">
            <FaUser /> {user.name}
          </h1>

          <p className="text-gray-400 flex items-center gap-2 mt-1">
            <FaEnvelope /> {user.email}
          </p>

          <span className="mt-2 px-4 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
            {user.role || "User"}
          </span>
        </div>

        {/* Bio (optional if exists) */}
        <div className="mt-8 text-center text-gray-300 relative z-10">
          <p>{user.bio || "No bio added yet."}</p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex justify-center relative z-10">
          <Button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 transition">
            <FaEdit />
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
