"use client";

import React, { useEffect, useState } from "react";

const ComentHistor = ({ idea }) => {
  console.log(idea);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      if (!idea) return;

      try {
        setLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/comments/${idea}`,
        );

        const data = await res.json();
        setComments(data || []);
      } catch (error) {
        console.log("Comment fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [idea]);

  return (
    <div className="space-y-3">
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : comments.length === 0 ? (
        <p className="text-gray-500">No comments yet</p>
      ) : (
        comments.map((comment) => (
          <div
            key={comment._id}
            className="p-3 border rounded-lg bg-white shadow-sm"
          >
            <p className="text-gray-800">{comment.text}</p>

            {comment.createdAt && (
              <p className="text-xs text-black mt-1">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ComentHistor;
