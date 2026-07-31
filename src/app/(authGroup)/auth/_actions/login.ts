"use server";

import { api } from "@/services/api";
import { TLoginPayload } from "../types/type";
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redirect } from "next/navigation";

export const loginUser = async ( payload: TLoginPayload) => {
  try {
    const res = await fetch(`${api}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (result.success) {
      const cookieStore = await cookies();
      cookieStore.set("accessToken", result.data.accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
      });
      cookieStore.set("refreshToken", result.data.refreshToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "lax",
      });

      const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;
      // if (
      //   redirectTo &&
      //   typeof redirectTo === "string" &&
      //   redirectTo.startsWith("/") &&
      //   !redirectTo.startsWith("//")
      // ) {
      //   redirect(redirectTo);
      // }

      // if (decodedToken.role === "CUSTOMER") {
      //   redirect("/dashboard/customer");
      // } else if (decodedToken.role === "ADMIN") {
      //   redirect("/dashboard/admin");
      // } else if (decodedToken.role === "PROVIDER") {
      //   redirect("/dashboard/provider");
      // }
    }
console.log(result);
    return result;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
};
