import { cookies } from "next/headers";
import { google } from "@/utils/arctic";
import { prisma } from "@/utils/prisma";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const codeVerifier = cookies().get("codeVerifier").value;

  const tokens = await google.validateAuthorizationCode(code, codeVerifier);

  const res = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: {
      Authorization: `Bearer ${tokens.accessToken}`,
    },
  });

  const user = await res.json();

  const findUser = await prisma.user.findFirst({
    where: {
      email: user.email,
    },
  });
  if (!findUser) {
    const newUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
      },
    });
    const payload = {
      id: newUser.user_id,
      name: newUser.name,
      email: newUser.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    cookies().set("token", token, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
    });

    redirect("/");
  }

  const payload = {
    id: findUser.user_id,
    name: findUser.name,
    email: findUser.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });

  cookies().set("token", token, {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });

  redirect("/");
}
