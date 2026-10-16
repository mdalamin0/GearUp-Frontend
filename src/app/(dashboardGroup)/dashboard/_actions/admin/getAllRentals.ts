"use server";

import { cookies } from "next/headers";
import { api } from "@/services/api";

const queryKeys = [
  "searchTerm",
  "category",
  "sortBy",
  "sortOrder",
  "page",
] as const;

export const getAllRentals = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
} = {}) => {
  const params = new URLSearchParams();
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

    queryKeys.forEach((key) => {
      const value = query?.[key];

      if (value) {
        params.set(key, String(value));
      }
    });

  const res = await fetch(`${api}/api/admin/rentals?${params.toString()}`, {
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
