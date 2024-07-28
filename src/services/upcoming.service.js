import { prisma } from "@/utils/prisma";

export const getEventsByUserId = async (userId) => {
    const result = await prisma.eventParticipant.findMany({
        where: {
            user_id: userId
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
                    fee: true
                }
            }
        },
        orderBy: {
            event: {
                start_time: "desc"
            }
        }
    });

    return result;
};