"use server";

import { api } from "@/services/api";
import { cookies } from "next/headers";

export const updateOrderStatus = async (orderId: string, status: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${api}/api/provider/orders/${orderId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify({ status }),
  });

  const data = await res.json();


  if (!data.success) {
    throw new Error(data.message || "Failed to update order");
  }

  return data;
};
