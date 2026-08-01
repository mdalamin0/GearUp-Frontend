"use server";

import { cookies } from "next/headers";
import { api } from "@/services/api";
import { TReviewPayload } from "../../types/type";
import { revalidateTag } from "next/cache";

export const createReview = async (payload: TReviewPayload) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${api}/api/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (data.success) {
    revalidateTag("reviews", { expire: 0 });
  }

  if (!data.success) {
    throw new Error(data.message || "Failed to submit review.");
  }

  return data;
};
