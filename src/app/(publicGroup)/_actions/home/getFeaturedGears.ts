"use server";

import { api } from "@/services/api";

export const getFeaturedGears = async () => {
  const res = await fetch(`${api}/api/gears?isFeatured=true&limit=6`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["featured-gears"],
    },
  });
  const gears = await res.json();

  if (!gears.success) {
    throw new Error("Failed to fetch featured gears");
  }
  return gears;
};
