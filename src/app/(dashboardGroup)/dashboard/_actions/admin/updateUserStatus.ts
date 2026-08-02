"use server";

import { api } from "@/services/api";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const updateUserStatus = async (UserId: string, status: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${api}/api/admin/users/${UserId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify({ status }),
  });

  const data = await res.json();

  if(data.success){
    revalidateTag("admin-users", {expire: 0});
  }

  if (!data.success) {
    throw new Error(data.message || "Failed to update order");
  }

  return data;
};
