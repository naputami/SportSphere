"use server";

import { prisma } from "@/utils/prisma";
import { uploadFile } from "@/libs/uploadFile";
import { addCommunityMember } from "@/services/community.service";

export async function CreateCommunity(_, formData) {
  const communityName = formData.get("communityName");
  const sportType = formData.get("sportType");
  const city = formData.get("city");
  const file = formData.get("file");
  const setPrivate = formData.get("setPrivate");
  const communityDescription = formData.get("communityDescription");
  const userId = formData.get("userId");

  if (
    !communityName ||
    !sportType ||
    !city ||
    !file ||
    !setPrivate ||
    !communityDescription
  ) {
    return {
      status: "error",
      message: "All fields are required",
    };
  }

  if (
    file.type !== "image/jpg" &&
    file.type !== "image/png" &&
    file.type !== "image/jpeg"
  ) {
    return {
      status: "error",
      message: "File extension is not allowed",
    };
  }

  const community = await prisma.community.create({
    data: {
      name: communityName,
      sport_type: sportType,
      city: city,
      community_image_profile: file.name,
      is_private: setPrivate === "yes",
      description: communityDescription,
      user_id: userId,
    },
  });

  await addCommunityMember(userId, community.community_id);

  await uploadFile({
    key: file.name,
    body: file,
    folder: `communities/${community.community_id}`,
  });

  return {
    status: "success",
    message: `Community is successfully created as ${
      setPrivate === "yes" ? "private" : "public"
    }`,
  };
}
