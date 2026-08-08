"use server";

import { api } from "@/services/api";
import { cookies } from "next/headers";

export const googleLogin = async (idToken: string) => {
  try {
    const res = await fetch(`${api}/api/auth/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken,
      }),
    });

    const result = await res.json();

    if (result.success) {
      const cookieStore = await cookies();

      cookieStore.set("accessToken", result.data.accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
      });
    }

    return result;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
};
