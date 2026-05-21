import MyIdeaCard from "@/component/MyIdeaCard";
import { getMyIdeas } from "@/lib/allData";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import { FaLightbulb } from "react-icons/fa6";

const MyIdeasPage = async () => {
  const headerList = await headers();

  const session = await auth.api.getSession({
    headers: headerList,
  });
     
  const {token} =await auth.api.getToken({
          headers: await headers()
      })
  
      console.log(token)

  const email = session?.user?.email;

  if (!email) {
    return <p className="text-white">Not logged in</p>;
  }

  const ideas = await getMyIdeas(email ,token);

  console.log(ideas);

  return (
    <div className="p-8 text-white min-h-screen bg-gradient-to-br from-[#050816] via-[#0f172a] to-[#020617]">
      <h1 className="text-3xl font-bold mb-8 tracking-wide text-center">
        My Ideas Dashboard
      </h1>

      {ideas?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {ideas.map((idea) => (
            <MyIdeaCard key={idea._id} idea={idea} />
          ))}
        </div>
      ) : (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
          <div
            className="relative overflow-hidden max-w-2xl w-full rounded-[40px]
        border border-white/10 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]
        p-10 text-center shadow-2xl"
          >
            {/* Glow Effect */}
            <div className="absolute -top-20 -left-20 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-purple-500/20 blur-3xl" />

            {/* Icon */}
            <div
              className="mx-auto mb-6 flex h-24 w-24 items-center justify-center
          rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg"
            >
              <FaLightbulb className="text-4xl text-white" />
            </div>

            {/* Title */}
            <h1 className="text-4xl font-extrabold text-white mb-4">
              No Ideas Yet 
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto mb-8">
              You haven’t added any project ideas yet. Start building your dream
              project today and inspire others with your creativity.
            </p>

            {/* Button */}
            <Link href="/add-idea">
              <button
                className="inline-flex items-center gap-3 rounded-full
            bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4
            text-lg font-semibold text-white shadow-lg transition-all
            duration-300 hover:scale-105 hover:shadow-blue-500/40"
              >
                
                Create Your First Idea
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyIdeasPage;
