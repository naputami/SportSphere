import React from "react";
import { getEventListByCommunityId} from "@/services/event.service";
import { CommunityEventListCard } from "@/components/cards/card.community-eventList";

export const CommunityEvent = async ({ communityId, user }) => {
  const eventList = await getEventListByCommunityId(communityId);
  const upComingEvents = eventList.filter((event) => event.start_time > new Date());
  const pastEvents = eventList.filter((event) => event.start_time < new Date());

  return (
    <section className="mt-10">
      <h2 className="font-bold text-md md:text-xl">Community Event</h2>
      <div className="mt-4">
        <h3 className="font-bold text-sm md:text-base">Upcoming Events</h3>
        {upComingEvents.length == 0 && <p className="text-sm md:text-base mt-2">This community does not have any upcoming event.</p>}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {upComingEvents.map((event) => (
            <CommunityEventListCard
              key={event.event_id}
              eventId={event.event_id}
              eventName={event.name}
              startTime={event.start_time}
              endTime={event.end_time}
              registrationDeadline={event.registration_deadline}
              location={event.location}
              fee={event.fee}
              imageTitle={event.event_image}
              communityId={communityId}
              quota={event.quota}
              participantCount={event.eventParticipants.length}
              userId={user?.id}
            />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="font-bold text-sm md:text-base">Past Events</h3>
        {pastEvents.length == 0 && <p className="text-sm md:text-base mt-2">This community does not have any past event.</p>}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pastEvents.map((event) => (
            <CommunityEventListCard
              key={event.event_id}
              eventId={event.event_id}
              eventName={event.name}
              startTime={event.start_time}
              endTime={event.end_time}
              registrationDeadline={event.registration_deadline}
              location={event.location}
              fee={event.fee}
              imageTitle={event.event_image}
              communityId={communityId}
              quota={event.quota}
              participantCount={event.eventParticipants.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
