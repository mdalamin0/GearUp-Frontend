/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { api } from "@/services/api";
import { TRegisterPayload } from "../types/type";

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

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
