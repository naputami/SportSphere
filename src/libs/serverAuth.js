import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

export function serverAuth() {
  const token = cookies().get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return { user: payload };
  } catch (error) {
    redirect("/login");
  }
}
