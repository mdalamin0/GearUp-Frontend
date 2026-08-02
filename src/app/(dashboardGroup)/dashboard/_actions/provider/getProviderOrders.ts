"use server";

import { api } from "@/services/api";
import { cookies } from "next/headers";
import { IProviderOrder } from "../../types/type";

export const getProviderOrders = async (): Promise<IProviderOrder[]> => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${api}/api/provider/orders`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });

  const data = await res.json();

  if (!data.success) {
    return [];
  }

  return data.data;
};
