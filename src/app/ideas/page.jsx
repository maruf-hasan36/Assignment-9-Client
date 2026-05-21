import Filter from "@/component/Filter";
import IdeaCard from "@/component/IdeaCard";
import { getData } from "@/lib/allData";
import React from "react";

const ALLIdeasPage = async ({searchParams }) => {
  const searchData =await searchParams
    const data = await getData(searchData?.search, searchData?.category);
  return (
    <div className="max-w-11/12 mx-auto mb-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 my-5">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center md:text-left">
          ALL Ideas
        </h2>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          {/* Filter Dropdown */}
          <Filter/>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3">
        {data.map((data) => (
          <IdeaCard key={data._id} data={data}></IdeaCard>
        ))}
      </div>
    </div>
  );
};

export default ALLIdeasPage;
