"use server";

import { api } from "@/services/api";

export const getGears = async () => {
  const res = await fetch(`${api}/api/gears`, {
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
