import { serverAuth } from "@/libs/serverAuth";
import { getEventsByUserId } from "@/services/event.service";
import { EventListCard } from "@/components/card-event";

export default async function Page() {
  const { id } = serverAuth();
  const events = await getEventsByUserId(id);

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
}
