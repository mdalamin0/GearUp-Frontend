"use server";

import { cookies } from "next/headers";
import { api } from "@/services/api";

export const getAllRentals = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${api}/api/admin/rentals`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });

  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message || "Failed to fetch rentals.");
  }

  return data.data;
};
