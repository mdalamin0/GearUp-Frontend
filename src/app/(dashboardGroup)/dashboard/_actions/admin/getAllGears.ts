"use server";

import { api } from "@/services/api";
import { cookies } from "next/headers";

const queryKeys = [
  "searchTerm",
  "category",
  "sortBy",
  "sortOrder",
  "brand",
  "minPrice",
  "maxPrice",
  "available",
  "page",
] as const;

export const getAllGears = async ({
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

  const res = await fetch(`${api}/api/admin/gears?${params.toString()}`, {
    headers: {
      Cookie: `accessToken=${accessToken}`
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["gears"],
    },
  });
  const gears = await res.json();

  if (!gears.success) {
    throw new Error("Failed to fetch gears");
  }
  return gears;
};
