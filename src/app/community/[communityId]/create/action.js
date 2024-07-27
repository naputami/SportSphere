"use server";

import { prisma } from "@/utils/prisma";
import { uploadFile } from "@/libs/uploadFile";

export async function CreateEventAction(_, formData) {
  const eventName = formData.get("eventName");
  const startDate = formData.get("startDate");
  const endDate = formData.get("endDate");
  const registrationDeadline = formData.get("registrationDeadline");
  const location = formData.get("location");
  const url = formData.get("url");
  const file = formData.get("file");
  const quota = formData.get("quota");
  const fee = formData.get("fee");
  const communityId = formData.get("communityId");
  const note = formData.get("note");

  if (
    !eventName ||
    !startDate ||
    !endDate ||
    !registrationDeadline ||
    !location ||
    !url ||
    !file ||
    !quota ||
    !fee ||
    !communityId ||
    !note
  ) {
    return {
      status: "error",
      message: "All fields are required",
    };
  }

  if (
    file.type != "image/jpg" &&
    file.type != "image/png" &&
    file.type != "image/jpeg"
  ) {
    return {
      status: "error",
      message: "File extention is not allowed",
    };
  }

  const event = await prisma.event.create({
    data: {
      name: eventName,
      start_time: new Date(startDate).toISOString(),
      end_time: new Date(endDate).toISOString(),
      registration_deadline: new Date(registrationDeadline).toISOString(),
      location: location,
      gmap_link: url,
      event_image: file.name,
      quota: Number(quota),
      fee: Number(fee),
      community_id: communityId,
      additional_note: note,
    },
  });

  await uploadFile({
    key: file.name,
    body: file,
    folder: `events/${event.event_id}`,
  });

  return {
    status: "success",
    message: "Event is successfully created",
  };
}
