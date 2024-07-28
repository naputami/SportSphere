import { PageTemplate } from "@/components/template/page-template";
import Image from "next/image";
import { formatDate } from "@/libs/formatDate";
import { formatCurrency } from "@/libs/formatCurrency";
import {
  getTotalEventParticipantbyEventId,
  getEventDetailByEventId,
  getComunittyIdbyEventId,
  checkEventParticipantbyEventandUserId,
} from "@/services/event.service";
import { JoinEventButton } from "@/components/joinEvent";
import Link from "next/link";
import { serverAuth } from "@/libs/serverAuth";
import { redirect } from "next/navigation";
import { checkStringUrl } from "@/libs/checkStringUrl";

export const revalidate = 300;

export default async function Page({ params }) {
  const user = serverAuth();
  if (!user) {
    redirect("/login");
  }
  const { id } = user;
  const eventId = params.eventId;
  const event = await getEventDetailByEventId(eventId);
  const totalParticipiant = await getTotalEventParticipantbyEventId(eventId);
  const communityId = await getComunittyIdbyEventId(eventId);
  const isEventParticipant = await checkEventParticipantbyEventandUserId(
    eventId,
    id
  );

  return (
    <PageTemplate>
      <main className="mt-6 container mx-auto px-6 md:px-16">
        <Link
          className="btn btn-ghost"
          href={`/community/${event.community_id}`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2592 14L10.6242 24.635M10.6242 24.635L23.2592 35.27M10.6242 24.635H38"
              stroke="#2B293D"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          Back to community
        </Link>
        <div className="w-full h-[200px] md:h-[350px] mt-4">
          <Image
            src={`${process.env.R2_PUBLIC_URL}/sport-sphere/events/${params.eventId}/${event.event_image}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              maxHeight: "350px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
            alt="Picture of the event"
          />
        </div>
        <h1 className="font-bold text-6xl mt-6 space-y-4">{event.name}</h1>
        <div className="badge text-lg font-semibold mt-6 space-y-4">
          {totalParticipiant} / {event.quota} people has joined
        </div>

        <div className="flex justify-between mt-8">
          <div className="space-y-4">
            <div className="font-bold text-md md:text-xl">
              Date and time
              <h4 className="text-lg font-normal">
                {formatDate(event.start_time)} - {formatDate(event.end_time)}
              </h4>
            </div>
            <div className="font-bold text-md md:text-xl">
              {" "}
              Location
              <h4 className="text-lg font-normal">
                {event.location} |{" "}
                {checkStringUrl(event.gmap_link) ? (
                  <a
                    href={event.gmap_link}
                    className="text-blue-500 hover:pointer hover:underline"
                  >
                    {event.gmap_link}
                  </a>
                ) : (
                  <p className="text-dark-navy-theme">{event.gmap_link}</p>
                )}
              </h4>
            </div>
            <div>
              <h2 className="font-bold text-md md:text-xl">
                Community Description
              </h2>
              <p className="text-base md:text-lg">{event.additional_note}</p>
            </div>
          </div>
          <div className="text-right font-medium text-lg space-y-2">
            <h4>
              Registration deadline: {formatDate(event.registration_deadline)}
            </h4>
            <h4>Fee: {formatCurrency(event.fee)}</h4>
          </div>
        </div>
        <div className="flex justify-end">
          <JoinEventButton
            userId={id}
            eventId={eventId}
            communityId={communityId.community_id}
            isParticipant={isEventParticipant}
          />
        </div>
      </main>
    </PageTemplate>
  );
}
