import { gettendingData } from '@/lib/allData';
import React from 'react';
import IdeaCard from './IdeaCard';
import { Button } from '@heroui/react';
import Link from 'next/link';

const TrendingIdea = async() => {
    const data = await gettendingData()
    return (
      <div className="max-w-11/12 mx-auto">
        <div className="flex justify-between items-center p-4">
          <h2 className="font-bold text-3xl"> Trending Idea</h2>
          <Link href={"/ideas"}>
            <Button variant="outline" className={"rounded-none font-bold"}>
              view ALL
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3">
          {data.map((data) => (
            <IdeaCard key={data._id} data={data}></IdeaCard>
          ))}
        </div>
      </div>
    );
};

export default TrendingIdea;