"use server";

import { revalidateTag } from "next/cache";
import { api } from "@/services/api";
import { cookies } from "next/headers";

export const createGear = async (payload: {
  title: string;
  description: string;
  brand: string;
  rentalPrice: number;
  stock: number;
  image: string;
  categoryId: string;
  specifications: {
    length: string;
    maxLoad: string;
    material: string;
    weight: string;
  };
}) => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${api}/api/provider/gear`, {
      method: "POST",

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
