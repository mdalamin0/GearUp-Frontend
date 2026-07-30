"use server"
import { api } from "@/services/api";

export const getBrands = async () => {
  const res = await fetch(`${api}/api/gears/brands`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["brands"]
    },
  });

  const data = await res.json();
   if (!data.success) {
     throw new Error("Failed to fetch brands.");
   }

  return data.data;
};
