import { prisma } from "@/utils/prisma";

export const getEventListByCommunityId = async (communityId) => {
  const result = await prisma.event.findMany({
    where: {
      community_id: communityId,
    },
    select: {
      event_id: true,
      name: true,
      start_time: true,
      end_time: true,
      registration_deadline: true,
      fee: true,
      quota: true,
      location: true,
      event_image: true,
      eventParticipants: true,
    },
    orderBy: {
      start_time: "desc",
    },
  });

  return result;
};

export const addEventParticipant = async (eventId, userId) => {
  const checkParticipant = await prisma.eventParticipant.findFirst({
    where: {
      AND: [
        {
          event_id: {
            equals: eventId,
          },
        },
        {
          user_id: {
            equals: userId,
          },
        },
      ],
    },
  });

  if (checkParticipant) {
    throw new Error("You've already joined this event");
  }


  await prisma.eventParticipant.create({
    data: {
      event_id: eventId,
      user_id: userId,
    },
  });
};
