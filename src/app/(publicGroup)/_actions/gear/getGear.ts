"use server";

import { api } from "@/services/api";

 const queryKeys = [
   "searchTerm",
   "category",
   "sortBy",
   "sortOrder",
   "brand",
   "minPrice",
   "maxPrice",
   "available",
   "page"
 ] as const;

export const getGears = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
  const params = new URLSearchParams();


  queryKeys.forEach((key) => {
    const value = query?.[key];

    if (value) {
      params.set(key, String(value));
    }
  });

  const res = await fetch(`${api}/api/gears?${params.toString()}`, {
    cache: "force-cache",
    next: {
      revalidate: 60,
      tags: ["gears"],
    },
  });
  const gears = await res.json();

  if (!gears.success) {
    throw new Error("Failed to fetch gears");
  }
  return gears;
};
