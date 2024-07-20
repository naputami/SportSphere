"use server";
import { generateState, generateCodeVerifier } from "arctic";
import { cookies } from "next/headers";
import { google } from "@/utils/arctic";
import { redirect } from "next/navigation";

export async function loginWithGoogleAction() {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();

  cookies().set("codeVerifier", codeVerifier);

  const url = await google.createAuthorizationURL(state, codeVerifier, {
    scopes: ["email", "profile"],
  });
  redirect(url.href);
}
