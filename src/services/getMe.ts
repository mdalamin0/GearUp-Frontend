"use server";

import { cookies } from "next/headers";
import { api } from "./api";

export const getMe = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in! Please Login!",
    };
  }

  const res = await fetch(`${api}/api/auth/me`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-store",
  });

  const result =await res.json();
  return result;
};
