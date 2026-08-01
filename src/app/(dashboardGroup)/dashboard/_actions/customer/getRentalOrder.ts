"use server";

import { api } from "@/services/api";
import { cookies } from "next/headers";
import { IRental } from "../../types/type";

export const getRentalOrders = async (): Promise<IRental[]> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${api}/api/rentals`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-store",
  });

  const data = await res.json();
  if (!data.success) {
    throw new Error("Failed to fetch rentals.");
  }

  return data.data;
};


