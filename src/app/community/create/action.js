"use server";

import { prisma } from "@/utils/prisma";
import { uploadFile } from "@/libs/uploadFile";

export async function CreateCommunity(formData) {
    const communityName = formData.get("communityName");
    const sportType = formData.get("sportType");
    const city = formData.get("city");
    const file = formData.get("file");
    const setPrivate = formData.get("setPrivate");
    const communityDescription = formData.get("communityDescription");

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
            image: file.name,
            is_private: setPrivate === "yes",
            description: communityDescription,
        },
    });

    await uploadFile({
        key: file.name,
        body: file,
        folder: `communities/${community.community_id}`,
    });

    return {
        status: "success",
        message: `Community is successfully created as ${setPrivate === "yes" ? "private" : "public"
            }`,
    };
}
