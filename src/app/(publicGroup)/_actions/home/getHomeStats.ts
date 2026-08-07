"use server";

import { api } from "@/services/api";


export const getHomeStats = async () => {
  const res = await fetch(`${api}/api/home/stats`);

  if (!res.ok) {
    throw new Error("Failed to fetch home statistics.");
  }

  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message || "Failed to fetch home statistics.");
  }

  return data.data;
};
