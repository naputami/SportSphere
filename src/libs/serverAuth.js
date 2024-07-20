import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export function serverAuth() {
  const token = cookies().get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
}
