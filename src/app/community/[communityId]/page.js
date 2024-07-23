import { PageTemplate } from "@/components/template/page-template";
import { getCommunityDetailById } from "@/services/community.service";
import { getEventListByCommunityId } from "@/services/event.service";
import Image from "next/image";
import { CommunityEventListCard } from "@/components/cards/card.community-eventList";
import { serverAuth } from "@/libs/serverAuth";
import { getDisplayedSportType } from "@/libs/getDisplayedSportType";

export default async function Page({ params }) {
  const communityId = params.communityId;
  const user = serverAuth();
  const community = await getCommunityDetailById(communityId);
  const eventList = await getEventListByCommunityId(communityId);
  const upComingEvents = eventList.filter(
    (event) => event.start_time > new Date()
  );
  const pastEvents = eventList.filter((event) => event.start_time < new Date());

  return (
    <PageTemplate>
      <main className="mt-6 container mx-auto px-6 md:px-16">
        <a className="btn btn-ghost" href="/">
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
          Back to homepage
        </a>
        <div className="w-full h-[200px] md:h-[350px] mt-4">
          <Image
            src={`${process.env.R2_PUBLIC_URL}/communities/${communityId}/${community.community_image_profile}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              maxHeight: "350px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
            alt="Picture of the community"
          />
        </div>
        <div className="flex justify-between mt-6">
          <div className="space-y-2">
            <h1 className="font-bold text-2xl md:text-3xl">{community.name}</h1>
            <p className="text-bold text-lg md:text-xl">
              {getDisplayedSportType(community.sport_type)} | {community.city}
            </p>
          </div>
          {community.user_id === user?.id && (
            <a
              href={`/community/${communityId}/createEvent`}
              className="btn bg-yellow-theme hover:bg-yellow-theme"
            >
              Create Event
            </a>
          )}
        </div>
        <div className="mt-4 space-x-2">
          <div className="badge badge-outline badge-lg">
            {community.communityMembers.length} people has joined
          </div>
          <div className="badge badge-outline badge-lg">
            {eventList.length} events
          </div>
        </div>
        <section className="mt-10 space-y-2">
          <h2 className="font-bold text-md md:text-xl">
            Community Description
          </h2>
          <p className="text-base md:text-lg">{community.description}</p>
        </section>
        <section className="mt-10">
          <h2 className="font-bold text-md md:text-xl">Community Event</h2>
          <div className="mt-4">
            <h3 className="font-bold text-sm md:text-base">Upcoming Events</h3>
            {upComingEvents.length == 0 && (
              <p className="text-sm md:text-base mt-2">
                This community does not have any upcoming event.
              </p>
            )}
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
            {pastEvents.length == 0 && (
              <p className="text-sm md:text-base mt-2">
                This community does not have any past event.
              </p>
            )}
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
      </main>
    </PageTemplate>
  );
}
