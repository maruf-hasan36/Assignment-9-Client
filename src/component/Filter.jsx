"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Filter = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const updateURL = (s, c) => {
    const params = new URLSearchParams();

    if (s) params.set("search", s);
    if (c) params.set("category", c);

    const query = params.toString();
    router.push(query ? `/ideas?${query}` : `/ideas`);
  };

  return (
    <div className="flex gap-2 items-center">
      <input
        className="border px-3 py-2 rounded-md w-48"
        placeholder="Search ideas..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          updateURL(e.target.value, category);
        }}
      />

      <select
        className="border px-3 py-2 rounded-md"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          updateURL(search, e.target.value);
        }}
      >
        <option value="">All Ideas</option>
        <option value="Tech">Tech</option>
        <option value="AI">AI</option>
        <option value="Health">Health</option>
        <option value="Education">Education</option>
        <option value="Finance">Finance</option>
      </select>
    </div>
  );
};

export default Filter;
