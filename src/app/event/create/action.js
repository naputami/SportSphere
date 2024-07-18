"use server";

import { prisma } from "@/utils/prisma";
import { auth } from "@/lib/auth";

export async function createEventAction(_, formData) {
  const eventName = formData.get("eventName");
  const date = formData.get("date");
  const location = formData.get("location");
  const file = formData.get("file");
  const kuota = formData.get("kuota");
  const fee = formData.get("fee");

  const payload = await auth();

  if (!name || !description || !city || !isOnline || !location) {
    return {
      success: false,
      message: "Please fill all the fields",
    };
  }

  const event = await prisma.event.create({
    data: {
      name,
      description,
      city,
      location,
      isOnline: isOnline === "true",
      authorId: payload.id,
      image: file.name,
    },
  });

  await uploadFile({ key: file.name, body: file, folder: event.id });

  return {
    success: true,
    message: "Event created",
  };
}
