import CommentBox from '@/component/CommentBox';
import { getDetails } from '@/lib/allData';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRightFromBracket } from 'react-icons/fa6';

const IdeasDetis = async({params}) => {
    const {id}=await params

    const {token} =await auth.api.getToken({
        headers: await headers()
    })
    
    console.log(token)


    const idea = await getDetails(id, token);


 
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEFT SIDE (Main Content) */}
          <div className="md:col-span-2 space-y-6">
            {/* Image */}
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={idea.imageURL}
                alt={idea.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-800">{idea.title}</h1>

            {/* Description */}
            <p className="text-gray-600">{idea.shortDescription}</p>

            {/* Problem */}
            <div className="p-4 border rounded-xl bg-gray-50">
              <h3 className="font-semibold">Problem Statement</h3>
              <p className="text-gray-600 mt-2">{idea.problemStatement}</p>
            </div>

            {/* Buy Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl hover:scale-105 transition">
              Buy Now
            </button>
          </div>

          {/* RIGHT SIDE (Info + Comment) */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className="p-5 border rounded-xl shadow-sm space-y-3">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">Idea Info</h2>
                <Link href={"/ideas"}>
                  <Button
                    variant="outline"
                    className={"bg-black text-white font-bold"}
                  >
                    <FaRightFromBracket></FaRightFromBracket> Back Now
                  </Button>
                </Link>
              </div>

              <p>
                <span className="font-semibold">Category:</span> {idea.category}
              </p>
              <p>
                <span className="font-semibold">Budget:</span>{" "}
                {idea.estimatedBudget}৳
              </p>
              <p>
                <span className="font-semibold">Audience:</span>{" "}
                {idea.targetAudience}
              </p>
            </div>

            {/* Comment Box */}
            <CommentBox idea={idea}></CommentBox>
          </div>
        </div>
      </div>
    );
};

export default IdeasDetis;