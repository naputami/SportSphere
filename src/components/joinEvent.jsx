"use client";

import { joinNewEventAction } from "@/app/event/[eventId]/action";
import toast from "react-hot-toast";
import { useEffect, useActionState } from "react";
import { useRouter } from "next/navigation";

export const JoinEventButton = ({
  userId,
  eventId,
  communityId,
  isParticipant,
}) => {
  const [state, formAction, pending] = useActionState(joinNewEventAction, null);
  const router = useRouter();
  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state?.message);
      router.push(`/event/${eventId}`);
    } else if (state?.status === "error") {
      toast.error(state?.message);
    }
  }, [state]);
  return (
    <form action={formAction}>
      <input type="hidden" value={userId} name="userId" />
      <input type="hidden" value={eventId} name="eventId" />
      <input type="hidden" value={communityId} name="communityId" />
      <button
        className="btn bg-yellow-theme hover:bg-yellow-theme"
        disabled={pending || isParticipant}
      >
        {pending && <span className="loading loading-spinner"></span>}
        Join Event
      </button>
    </form>
  );
};
