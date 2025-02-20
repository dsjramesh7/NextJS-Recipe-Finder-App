import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full bg-gray-400 min-h-screen">
      <Skeleton />
    </div>
  );
};

export default Loading;
