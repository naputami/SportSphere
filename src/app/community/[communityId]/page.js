import { PageTemplate } from "@/components/template/page-template";
import {
  getAllPublicCommunities,
  getCommunityDetailById,
} from "@/services/community.service";
import Image from "next/image";
import { serverAuth } from "@/libs/serverAuth";
import { getDisplayedSportType } from "@/libs/getDisplayedSportType";
import { CommunityEvent } from "./community-event";
import React from "react";
import { prisma } from "@/utils/prisma";
import Link from "next/link";

export const revalidate = 300;

export async function generateStaticParams() {
  const communities = await getAllPublicCommunities();

  return communities.map((community) => ({
    communityId: community.community_id,
  }));
}

export default async function Page({ params }) {
  const communityId = params.communityId;
  const user = serverAuth();
  const community = await getCommunityDetailById(communityId);
  const totalEvent = await prisma.event.count({
    where: {
      community_id: communityId,
    },
  });

  return (
    <PageTemplate>
      <main className="mt-6 container mx-auto px-6 md:px-16">
        <a className="btn btn-ghost" href="/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2592 14L10.6242 24.635M10.6242 24.635L23.2592 35.27M10.6242 24.635H38"
              stroke="#2B293D"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          Back to homepage
        </a>
        <div className="w-full h-[200px] md:h-[350px] mt-4">
          <Image
            src={`${process.env.R2_PUBLIC_URL}/communities/${communityId}/${community.community_image_profile}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              maxHeight: "350px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
            alt="Picture of the community"
          />
        </div>
        <div className="flex justify-between mt-6">
          <div className="space-y-2">
            <h1 className="font-bold text-2xl md:text-3xl">{community.name}</h1>
            <p className="text-bold text-lg md:text-xl">
              {getDisplayedSportType(community.sport_type)} | {community.city}
            </p>
          </div>
          {community.user_id === user?.id && (
            <Link
              href={`/community/${communityId}/createEvent`}
              className="btn bg-yellow-theme hover:bg-yellow-theme"
            >
              Create Event
            </Link>
          )}
        </div>
        <div className="mt-4 space-x-2">
          <div className="badge badge-outline badge-lg">
            {community.communityMembers.length} people has joined
          </div>
          <div className="badge badge-outline badge-lg">
            {totalEvent} events
          </div>
        </div>
        <section className="mt-10 space-y-2">
          <h2 className="font-bold text-md md:text-xl">
            Community Description
          </h2>
          <p className="text-base md:text-lg">{community.description}</p>
        </section>
        <React.Suspense fallback="Loading...">
          <CommunityEvent communityId={communityId} />
        </React.Suspense>
      </main>
    </PageTemplate>
  );
}
