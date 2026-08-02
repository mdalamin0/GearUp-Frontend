"use server";

import { cookies } from "next/headers";
import { api } from "@/services/api";

export const getAllUsers = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${api}/api/admin/users`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["admin-users"]
    }
  });

  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message || "Failed to fetch users.");
  }

  return data.data;
};
