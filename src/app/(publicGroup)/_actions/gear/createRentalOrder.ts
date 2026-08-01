"use server";

import { cookies } from "next/headers";
import { api } from "@/services/api";
import { revalidateTag } from "next/cache";

type TRentalPayload = {
  gearItemId: string;
  quantity: number;
  startDate: string;
  endDate: string;
};

export const createRentalOrder = async (payload: TRentalPayload) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${api}/api/rentals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if(data.success){
    revalidateTag("rental-orders", {
      expire: 0
    })
  }

  if (!data.success) {
    throw new Error(data.message || "Failed to create rental order.");
  }

  return data.data;
};
