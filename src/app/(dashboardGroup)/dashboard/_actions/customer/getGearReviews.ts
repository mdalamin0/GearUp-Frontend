"use server";

import { api } from "@/services/api";

export const getGearReviews = async (gearId: string) => {
  const res = await fetch(`${api}/api/reviews/${gearId}`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["reviews"],
    },
  });

  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message || "Failed to fetch reviews.");
  }

  return data.data;
};
