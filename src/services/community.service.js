import { prisma } from "@/utils/prisma";

export const getAllPublicCommunities = async (sportType, city) => {
  if (sportType) {
    const communities = await prisma.community.findMany({
      where: {
        sport_type: {
          equals: sportType ?? "",
          mode: "insensitive",
        },
        is_private: {
          equals: false,
        },
      },
      select: {
        community_id: true,
        name: true,
        city: true,
        sport_type: true,
        is_private: true,
        community_image_profile: true,
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
        is_private: {
          equals: false,
        },
      },
      select: {
        community_id: true,
        name: true,
        city: true,
        sport_type: true,
        is_private: true,
        community_image_profile: true,
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
          {
            is_private: {
              equals: false,
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
        community_image_profile: true,
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
      community_image_profile: true,
    },
    where: {
      is_private: {
        equals: false,
      },
    },
  });

  return communities;
};

export const getCommunityDetailById = async (communityId) => {
  const community = await prisma.community.findFirst({
    where: {
      community_id: communityId,
    },
    include: {
      communityMembers: {
        select: {
          user_id: true,
        },
      },
    },
  });

  return community;
};

export const addCommunityMember = async (userId, communityId) => {
  await prisma.communityMember.create({
    data: {
      user_id: userId,
      community_id: communityId,
    },
  });
};

export const checkCommunityMember = async (userId, communityId) => {
  const member = await prisma.communityMember.findFirst({
    where: {
      AND: [
        {
          user_id: {
            equals: userId,
          },
        },
        {
          community_id: {
            equals: communityId,
          },
        },
      ],
    },
  });

  if (member) {
    return true;
  }

  return false;
};

export const getCommunityByUserId = async (userId) => {
  const result = await prisma.community.findMany({
    where: {
      user_id: userId,
    },
    select: {
      community_id: true,
      name: true,
      sport_type: true,
      city: true,
      is_private: true,
      community_image_profile: true,
    },
  });
  return result;
};

export const getMyCommunityByUserId = async (userId) => {
  const result = await prisma.communityMember.findMany({
    where: {
      user_id: userId,
    },
    select: {
      community: {
        select: {
          name: true,
          community_id: true,
          city: true,
          sport_type: true,
          user_id: true,
          community_image_profile: true,
          is_private: true
        },
      },
    },
  });

  return result;
};
