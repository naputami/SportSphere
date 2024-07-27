import { PageTemplate } from "@/components/template/page-template";
import Image from "next/image";
import { formatDate } from "@/libs/formatDate";
import { formatCurrency } from "@/libs/formatCurrency";
import {
  getTotalEventParticipantbyEventId,
  getEventDetailByEventId,
} from "@/services/event.service";
import { Button } from "@/components/button";
import React from "react";
import Link from "next/link";

export const revalidate = 300;

export default async function Page({ params }) {
  const eventId = params.eventId;
  const event = await getEventDetailByEventId(eventId);
  const totalParticipiant = await getTotalEventParticipantbyEventId(eventId);

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
              stroke-width="3"
              stroke-linecap="round"
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
        <div className="flex justify-between mt-6">
          <div className="space-y-2">
            <h1 className="font-bold text-2xl md:text-3xl">{event.name}</h1>
            <h4 className="text-lg">
              {event.location} | {event.gmap_link}
            </h4>
            <div className="text-lg">
              {totalParticipiant} / {event.quota} people has joined
            </div>
          </div>
          <div className="text-right font-medium text-lg space-y-2">
            <h4>
              Start Date: {formatDate(event.start_time)} | End Date:{" "}
              {formatDate(event.end_time)}
            </h4>
            <h4>
              Registration deadline: {formatDate(event.registration_deadline)}
            </h4>
            <h4>Fee: {formatCurrency(event.fee)}</h4>
          </div>
        </div>
        <section className="mt-10 space-y-2">
          <h2 className="font-bold text-md md:text-xl">
            Community Description
          </h2>
          <p className="text-base md:text-lg">{event.additional_note}</p>
        </section>
        <div className="flex justify-end">
          <Button>Join Event</Button>
        </div>
      </main>
    </PageTemplate>
  );
}
