"use server";

import { api } from "@/services/api";

export const getGears = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
  const params = new URLSearchParams();
  console.log("query", query);
  console.log(params, "params");

  if (query && query.searchTerm) {
    params.set("searchTerm", query.searchTerm as string);
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
