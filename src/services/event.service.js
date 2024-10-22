import { prisma } from "@/utils/prisma";
import { fetchExternalImage } from "next/dist/server/image-optimizer";

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

export const getEventsByUserId = async (userId) => {
  const result = await prisma.eventParticipant.findMany({
    where: {
      user_id: userId,
    },
    select: {
      event: {
        select: {
          event_id: true,
          event_image: true,
          name: true,
          start_time: true,
          quota: true,
          location: true,
          end_time: true,
          fee: true,
        },
      },
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

export const getEventDetailByEventId = async (eventId) => {
  const result = await prisma.event.findFirst({
    where: {
      event_id: {
        equals: eventId,
      },
    },
    select: {
      event_id: true,
      name: true,
      start_time: true,
      end_time: true,
      registration_deadline: true,
      location: true,
      gmap_link: true,
      quota: true,
      fee: true,
      event_image: true,
      additional_note: true,
      community_id: true,
    },
  });
  return result;
};

export const getTotalEventParticipantbyEventId = async (eventId) => {
  const result = await prisma.eventParticipant.count({
    where: {
      event_id: {
        equals: eventId,
      },
    },
  });
  return result;
};
export const getComunittyIdbyEventId = async (eventId) => {
  const result = await prisma.event.findFirst({
    where: {
      event_id: eventId,
    },
    select: {
      community_id: true,
    },
  });
  return result;
};
export const checkEventParticipantbyEventandUserId = async (
  eventId,
  userId
) => {
  const eventParticipant = await prisma.eventParticipant.findFirst({
    where: {
      AND: [
        {
          user_id: {
            equals: userId,
          },
        },
        {
          event_id: {
            equals: eventId,
          },
        },
      ],
    },
  });
  if (eventParticipant) {
    return true;
  }
  return false;
};
