"use server";

import { revalidateTag } from "next/cache";
import { api } from "@/services/api";
import { cookies } from "next/headers";
import { TGearPayload } from "../../types/type";


export const updateGear = async (gearId: string, payload: TGearPayload) => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${api}/api/provider/gear/${gearId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },

      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      revalidateTag("provider-gears", { expire: 0 });
      revalidateTag("gears", { expire: 0 });
      revalidateTag("featured-gears", { expire: 0 });
    }

    return data;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
};
