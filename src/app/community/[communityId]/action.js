"use server"
import { addEventParticipant } from "@/services/event.service"
import { redirect } from "next/navigation";

export async function joinEventAction(_, formData){
    const userId = formData.get("userId");
    const eventId = formData.get("eventId");

    if(!userId){
        redirect("/login");
    }

    try {
        await addEventParticipant(eventId, userId);
        return {
            status: "success",
            message: "Join event success"
        }
    } catch(e) {
        return {
            status: "error",
            message: `${e.message}`
        }
    }




}