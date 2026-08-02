"use server";

import { api } from "@/services/api";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const deleteGear = async (gearId: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${api}/api/provider/gear/${gearId}`, {
    method: "DELETE",
    headers: {
      Cookie: `accessToken=${accessToken}`,
    }
  });

  const data = await res.json();

  if(data.success){
    revalidateTag("gears", {expire: 0})
    revalidateTag("featured-gears", { expire: 0 });
    revalidateTag("provider-gears", { expire: 0 });
  }


  if (!data.success) {
    throw new Error(data.message || "Failed to update order");
  }

  return data;
};
