"use server";

import { cookies } from "next/headers";

export async function logoutAction() {
  try {
    cookies().delete("token");
    console.log("ini logout")
    return {
      status: "success",
      message: "Berhasil logout",
    };
  } catch (error) {
    return {
      statu: "error",
      message: "Logout gagal. Silakan coba kembali.",
    };
  }
}
