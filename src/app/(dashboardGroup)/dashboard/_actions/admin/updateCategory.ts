"use server";

import { api } from "@/services/api";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";


type TCategoryData = {
  name: string;
};

export const updateCategory = async (id: string, data: TCategoryData) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${api}/api/categories/${id}`, {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },

    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (result.success) {
    revalidateTag("categories", {expire: 0});
    revalidateTag("gears", {expire: 0});
  }

  return result;
};
