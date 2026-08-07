"use server";

import { cookies } from "next/headers";
import { api } from "@/services/api";
import { redirect } from "next/navigation";

type TRentalPayload = {
  gearItemId: string;
  quantity: number;
  startDate: string;
  endDate: string;
};

export const createRentalOrder = async (payload: TRentalPayload) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
    if (!accessToken) {
      return {
        success: false,
        message: "You are not logged in. Please login first.",
        unauthenticated: true,
      };
    }

  const res = await fetch(`${api}/api/rentals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

 

  if (!data.success) {
    throw new Error(data.message || "Failed to create rental order.");
  }

  return data.data;
};
