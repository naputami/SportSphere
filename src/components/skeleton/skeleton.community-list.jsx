import React from "react";

export const SkeletonCommunityList = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({length: 9}).map((_, key) => (
        <div className="skeleton h-72 w-full" key={key}></div>
      ))}
    </div>
  );
}
