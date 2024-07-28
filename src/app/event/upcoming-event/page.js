import React from 'react';
import { getEventsByUserId } from '@/services/event.service';
import { EventListCard } from '@/components/cards/card.eventList';
import { serverAuth } from '@/libs/serverAuth';

export default async function Page() {
  const { id } = serverAuth();
  const events = await getEventsByUserId(id);
  console.log(events)
  const now = new Date();
  const upComingEvents = events.filter(({event}) => new Date(event.start_time) > now);
  const pastEvents = events.filter(({event}) => new Date(event.start_time) < now);

  return (
    <section className="mt-10">
      <div className="mt-4">
        <h3 className="font-bold text-sm md:text-base">Upcoming Events</h3>
        {upComingEvents.length == 0 && <p className="text-sm md:text-base mt-2">You don't have any upcoming event.</p>}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map(({ event }) => (
            <EventListCard
              eventId={event.event_id}
              eventName={event.name}
              quota={event.quota}
              location={event.location}
              event_image={event.event_image}
              startDate={event.start_time}
              endDate={event.end_time}
              fee={event.fee}
              key={event.event_id}
            />
          ))}
        </div>
       </div>   
        <div className="mt-8">
        <h3 className="font-bold text-sm md:text-base">Past Events</h3>
        {pastEvents.length == 0 && <p className="text-sm md:text-base mt-2">You don't have any past event.</p>}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pastEvents.map(({event}) => (
            <EventListCard
              eventId={event.event_id}
              eventName={event.name}
              quota={event.quota}
              location={event.location}
              event_image={event.event_image}
              startDate={event.start_time}
              endDate={event.end_time}
              fee={event.fee}
              key={event.event_id}
            />
            ))}
          </div>
        </div>
    </section>
  );
};
