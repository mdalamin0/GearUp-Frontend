"use server";

import { api } from "@/services/api";
import { cookies } from "next/headers";

export const getPayments = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${api}/api/payment`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["payments"],
    },
  });

  const data = await res.json();
  if (!data.success) {
    throw new Error("Failed to fetch payments-history.");
  }

  return data.data;
};


