import { prisma } from "@/utils/prisma";

export const getAllPublicCommunities = async (sportType, city) => {
  if (sportType) {
    const communities = await prisma.community.findMany({
      where: {
        sport_type: {
          equals: sportType ?? "",
          mode: "insensitive",
        },
      },
      select: {
        community_id: true,
        name: true,
        city: true,
        sport_type: true,
        is_private: true,
        community_image_profile: true
      },
    });

    return communities;
  }

  if (city) {
    const communities = await prisma.community.findMany({
      where: {
        city: {
          contains: city ?? "",
          mode: "insensitive",
        },
      },
      select: {
        community_id: true,
        name: true,
        city: true,
        sport_type: true,
        is_private: true,
        community_image_profile: true
      },
    });

    return communities;
  }

  if (sportType && city) {
    const communities = await prisma.community.findMany({
      where: {
        AND: [
          {
            sport_type: {
              equals: sportType ?? "",
              mode: "insensitive",
            },
          },
          {
            city: {
              contains: city ?? "",
              mode: "insensitive",
            },
          },
        ],
      },
      select: {
        community_id: true,
        name: true,
        city: true,
        sport_type: true,
        is_private: true,
        community_image_profile: true
      },
    });
    return communities;
  }

  const communities = await prisma.community.findMany({
    select: {
      community_id: true,
      name: true,
      city: true,
      sport_type: true,
      is_private: true,
      community_image_profile: true
    },
  });

  return communities;
};
