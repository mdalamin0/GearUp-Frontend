"use server"
import { api } from "@/services/api";

export const getGearDetails = async (id: string) => {
  const res = await fetch(`${api}/api/gears/${id}`);

  const data = await res.json();
   if (!data.success) {
     throw new Error("Failed to fetch brands.");
   }

  return data.data;
};
