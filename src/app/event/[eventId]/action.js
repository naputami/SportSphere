"use server";

import { addEventParticipant } from "@/services/event.service";
import {
  addCommunityMember,
  checkCommunityMember,
} from "@/services/community.service";
import { redirect } from "next/navigation";

export async function joinNewEventAction(_, formData) {
  const userId = formData.get("userId");
  const eventId = formData.get("eventId");
  const communityId = formData.get("communityId");

  const isCommunityMember = await checkCommunityMember(userId, communityId);

  if (!userId) {
    redirect("/login");
  }

  try {
    if (!isCommunityMember) {
      await addCommunityMember(userId, communityId);
      await addEventParticipant(eventId, userId);
      return {
        status: "success",
        message: "Join event and community success",
      };
    }
    await addEventParticipant(eventId, userId);
    return {
      status: "success",
      message: "Join event success",
    };
  } catch (e) {
    console.log(e.message);

    return {
      status: "error",
      message: `${e.message}`,
    };
  }
}
