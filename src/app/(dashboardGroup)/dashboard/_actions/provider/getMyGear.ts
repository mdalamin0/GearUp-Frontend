"use server";

import { cookies } from "next/headers";
import { api } from "@/services/api";

export const getMyGear = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${api}/api/provider/gear`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["provider-gears"]
    }
  });

  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message || "Failed to fetch gears.");
  }

  return data.data;
};
