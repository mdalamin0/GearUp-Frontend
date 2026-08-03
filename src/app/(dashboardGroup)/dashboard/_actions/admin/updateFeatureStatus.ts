"use server";

import { api } from "@/services/api";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";



export const updateFeaturedStatus = async (
  gearId: string,
  isFeatured: boolean,
) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${api}/api/admin/gears/${gearId}/featured`, {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },

    body: JSON.stringify({
      isFeatured,
    }),
  });

  const result = await res.json();

  if (result.success) {
    revalidateTag("gears", {expire: 0});
    revalidateTag("featured-gears", { expire: 0 });
  }

  return result;
};
