"use client";
import Image from "next/image";
import { getDisplayedSportType } from "@/libs/getDisplayedSportType";
import { getDisplayedCityName } from "@/libs/getDisplayedCityName";
import Link from "next/link";
import { useCommunityContext } from "@/context/community-context";

export const CommunityCard = ({
  name,
  city,
  sportType,
  isPrivate,
  imageTitle,
  communityId,
}) => {
  const { setCopiedCommunityId } = useCommunityContext();
  const handleShareButtonClick = () => {
    setCopiedCommunityId(communityId);
    document.getElementById('share-link').showModal()
  };
  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl static">
      <figure className="md:h-40 lg:h-48">
        <Image
          src={`${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/sport-sphere/communities/${communityId}/${imageTitle}`}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </figure>
      <div className="card-body gap-0">
        <div className="flex justify-between">
          <Link
            href={`/community/${communityId}`}
            className="card-title m-0 hover:underline"
          >
            {name}
          </Link>
          <button
            className="btn btn-circle btn-ghost btn-sm"
            onClick={handleShareButtonClick}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 28.16C28.48 28.16 27.12 28.76 26.08 29.7L11.82 21.4C11.92 20.94 12 20.48 12 20C12 19.52 11.92 19.06 11.82 18.6L25.92 10.38C27 11.38 28.42 12 30 12C33.32 12 36 9.32 36 6C36 2.68 33.32 0 30 0C26.68 0 24 2.68 24 6C24 6.48 24.08 6.94 24.18 7.4L10.08 15.62C9 14.62 7.58 14 6 14C2.68 14 0 16.68 0 20C0 23.32 2.68 26 6 26C7.58 26 9 25.38 10.08 24.38L24.32 32.7C24.22 33.12 24.16 33.56 24.16 34C24.16 37.22 26.78 39.84 30 39.84C33.22 39.84 35.84 37.22 35.84 34C35.84 30.78 33.22 28.16 30 28.16Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-between mt-1">
          <p className="w-fit">
            {getDisplayedSportType(sportType)} | {getDisplayedCityName(city)}
          </p>
          {isPrivate && <div className="badge badge-outline">Private</div>}
        </div>
      </div>
    </div>
  );
};
