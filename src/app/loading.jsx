
import React from "react";
import { Spinner, Card } from "@heroui/react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <Card className="p-8 flex flex-col items-center gap-4 shadow-lg">
        <Spinner size="lg" color="primary" />

        <p className="text-sm text-gray-500">Loading IdeaVault...</p>

        <div className="flex gap-1 text-blue-500 text-xl">
          <span className="animate-bounce">.</span>
          <span className="animate-bounce delay-150">.</span>
          <span className="animate-bounce delay-300">.</span>
        </div>
      </Card>
    </div>
  );
};

export default Loading;
