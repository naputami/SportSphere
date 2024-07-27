import { prisma } from "@/utils/prisma";

export async function fetchUserEvents(userId) {
    const events = await prisma.event.findMany({
        where: {
            eventParticipants: {
                some: {
                    user_id: userId,
                },
            },
        },
        orderBy: {
            date: 'desc',
        },
        include: {
            eventParticipants: true,
        },
    });

    const now = new Date();
    const upcomingEvents = events.filter(event => new Date(event.endDate) > now);
    const pastEvents = events.filter(event => new Date(event.endDate) < now);

    return { upcomingEvents, pastEvents };
}