"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function registerAction(_, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!name || !email || !password) {
    return {
      status: "error",
      message: "All fields are required",
    };
  }

  if (password.length < 6) {
    return {
      status: "error",
      message: "Password must be at least 6 characters",
    };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 13);
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      status: "success",
      message: "Register success, please login",
    };
  } catch (error) {
    console.log(error);

    return {
      status: "error",
      message: "Something went wrong",
    };
  }
}
