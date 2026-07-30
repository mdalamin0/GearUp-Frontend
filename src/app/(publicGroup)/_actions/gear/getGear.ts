"use server";

import { api } from "@/services/api";

export const getGears = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
  const params = new URLSearchParams();
  
  if (query && query.searchTerm) {
    params.set("searchTerm", query.searchTerm as string);
  }
  if (query && query.category) {
    params.set("category", query.category as string);
  }
 
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
