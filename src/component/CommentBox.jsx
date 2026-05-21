"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const CommentBox = ({ idea }) => {
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(false);

  const session = authClient.useSession?.();
  const user = session?.data?.user;

  const handleCommentSubmit = async () => {
    if (!commentText.trim()) return;

    try {
      setLoading(true);

      const { data: tokenData } = await authClient.token();

      const token = tokenData?.token; // ✅ IMPORTANT FIX
console.log(token)
      const comment = {
        imageURL: idea?.imageURL,
        estimatedBudget: idea?.estimatedBudget,
        title: idea?.title,
        ideaId: idea._id,
        text: commentText,
        userEmail: user.email,
        userName: user.name,
        createdAt: new Date(),
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`, // ✅ now correct
        },
        body: JSON.stringify(comment),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Comment added successfully");
        setCommentText("");
      } else {
        toast.error(data.message || "Failed to add comment");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <textarea
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring"
        rows={4}
        placeholder="Write your comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />

      <button
        onClick={handleCommentSubmit}
        disabled={loading}
        className="w-full bg-black text-white py-2 rounded-lg disabled:opacity-50"
      >
        {loading ? "Posting..." : "Submit"}
      </button>
    </div>
  );
};

export default CommentBox;
