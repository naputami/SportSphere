"use client";
import { useState } from "react";
import { CommunityCard } from "@/components/cards/card.community";

export const MyCommunity = ({ userId, data }) => {
  const [isFiltered, setIsFiltered] = useState(false);

  const handleClick = () => {
    setIsFiltered(!isFiltered);
  };

  return (
    <>
      <div className="space-x-4">
        <button
          className={`btn ${
            !isFiltered ? "bg-dark-navy-theme text-white" : ""
          }`}
          onClick={handleClick}
        >
          All
        </button>
        <button
          className={`btn ${isFiltered ? "bg-dark-navy-theme text-white" : ""}`}
          onClick={handleClick}
        >
          Created Communities
        </button>
      </div>
      {data.length == 0 && <p className="mt-6 font-bold text-lg md:text-xl">No Community Found</p>}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isFiltered && data.length != 0 &&
          data
            .filter(({ community }) => community.user_id == userId)
            .map(({ community }) => (
              <CommunityCard
                key={community.community_id}
                communityId={community.community_id}
                name={community.name}
                city={community.city}
                imageTitle={community.community_image_profile}
                sportType={community.sport_type}
              />
            ))}
        {!isFiltered && data.length != 0 &&
          data.map(({ community }) => (
            <CommunityCard
              key={community.community_id}
              communityId={community.community_id}
              name={community.name}
              city={community.city}
              imageTitle={community.community_image_profile}
              sportType={community.sport_type}
            />
          ))}
      </div>
    </>
  );
};
