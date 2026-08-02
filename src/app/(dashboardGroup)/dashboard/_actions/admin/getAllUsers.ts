"use server";

import { cookies } from "next/headers";
import { api } from "@/services/api";

const queryKeys = [
  "searchTerm",
  "role",
  "status",
  "sortBy",
  "sortOrder",
  "page",
  "limit",
] as const;

export const getAllUsers = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
} = {}) => {
  const params = new URLSearchParams();

  queryKeys.forEach((key) => {
    const value = query?.[key];

    if (value) {
      params.set(key, String(value));
    }
  });

  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${api}/api/admin/users?${params.toString()}`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["admin-users"],
    },
  });

  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message || "Failed to fetch users.");
  }

  return data;
};
