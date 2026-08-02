/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { api } from "@/services/api";
import { TRegisterPayload } from "../types/type";
import { revalidateTag } from "next/cache";

export const registerUser = async (payload: TRegisterPayload) => {
  try {
    const res = await fetch(`${api}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    if (result.success) {
      revalidateTag("admin-users", { expire: 0 });
    }

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
