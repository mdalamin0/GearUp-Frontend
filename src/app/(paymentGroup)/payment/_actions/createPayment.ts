"use server";

import { cookies } from "next/headers";
import { api } from "@/services/api";

export const createPayment = async (orderId: string) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${api}/api/payment/create/${orderId}`,
    {
      method: "POST",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    }
  );

  const data = await res.json();

 

  if (!data.success) {
    throw new Error(data.message);
  }

  return data.data;
};