"use server";

import { api } from "@/services/api";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";



export const deleteCategory = async (id: string) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${api}/api/categories/${id}`, {
    method: "DELETE",

    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });

  const result = await res.json();

  if (result.success) {
    revalidateTag("categories", {expire: 0});
    revalidateTag("gears", {expire: 0});
  }

  return result;
};
