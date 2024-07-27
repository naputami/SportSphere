import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/libs/formatDate";
import { formatCurrency } from "@/libs/formatCurrency";
import { getTotalEventParticipantbyEventId } from "@/services/event.service";

export const EventListCard = async ({
  eventId,
  eventName,
  startDate,
  endDate,
  location,
  fee,
  event_image,
  quota,
}) => {
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);
  const totalParticipant = await getTotalEventParticipantbyEventId(eventId);

  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl static">
      <figure className="md:h-40 lg:h-48">
        <Image
          src={`${process.env.R2_PUBLIC_URL}/sport-sphere/events/${eventId}/${event_image}`}
          width={500}
          height={500}
          alt="Picture of event"
        />
      </figure>
      <div className="card-body gap-0">
        <Link href={`/event/${eventId}`}>
          <h2 className="card-title hover:underline">{eventName}</h2>
        </Link>
        <div className="space-y-1">
          <p>Start Date: {formattedStartDate}</p>
          <p>End Date: {formattedEndDate}</p>
          <p>
            Participants: {totalParticipant}/{quota}
          </p>
          <p>Location: {location}</p>
          <p>Fee: {fee === 0 ? "Gratis" : formatCurrency(fee)}</p>
        </div>
      </div>
    </div>
  );
};
