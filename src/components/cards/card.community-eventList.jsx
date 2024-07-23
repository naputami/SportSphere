"use client";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/libs/formatDate";
import { formatCurrency } from "@/libs/formatCurrency";
import { useActionState, useEffect } from "react";
import { joinEventAction } from "@/app/community/[communityId]/action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const CommunityEventListCard = ({
  eventId,
  participantCount,
  quota,
  eventName,
  startTime,
  registrationDeadline,
  endTime,
  location,
  fee,
  communityId,
  imageTitle,
  userId,
}) => {
  const [state, formAction, pending] = useActionState(joinEventAction, null);
  const router = useRouter();
  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state?.message);
      router.push(`/community/${communityId}`);
    } else if (state?.status === "error") {
      toast.error(state?.message);
    }
  }, [state]);
  const formattedStartTime = formatDate(startTime);
  const formattedEndTime = formatDate(endTime);
  const formattedRegistrationDeadline = formatDate(registrationDeadline);
  const checkRegistrationDeadline = (registrationDeadline) => {
    if (!registrationDeadline) {
      return false;
    }
    const today = new Date();
    const isRegistration = today > registrationDeadline;
    return isRegistration;
  };
  const disableButton = () => {
    if (checkRegistrationDeadline(registrationDeadline)) {
      return true;
    }

    if (state?.status === "success") {
      return true;
    }

    if (pending) {
      return true;
    }

    if (participantCount == quota) {
      return true;
    }

    return false;
  };
  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl static">
      <figure className="md:h-40 lg:h-48">
        <Image
          src={`${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/events/${communityId}/${eventId}/${imageTitle}`}
          width={500}
          height={500}
          alt="Picture of event community"
        />
      </figure>
      <div className="card-body gap-0">
        <Link href={`/event/${eventId}`}>
          <h2 className="card-title hover:underline">{eventName}</h2>
        </Link>
        <div className="space-y-1">
          <p>Start Time: {formattedStartTime}</p>
          <p>End Time: {formattedEndTime}</p>
          <p>Registration Deadline: {formattedRegistrationDeadline}</p>
          <p>
            Participant: {participantCount}/{quota}
          </p>
          <p>Location: {location}</p>
          <p>Fee: {fee === 0 ? "Gratis" : formatCurrency(fee)}</p>
        </div>
        <div className="card-actions justify-end">
          <form action={formAction}>
            <input type="hidden" value={userId} name="userId" />
            <input type="hidden" value={eventId} name="eventId" />
            <input type="hidden" value={communityId} name="communityId" />
            <button className="btn bg-yellow-theme hover:bg-yellow-theme" disabled={disableButton()}>
              {pending && <span className="loading loading-spinner"></span>}
              Join Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
