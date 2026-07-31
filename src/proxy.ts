import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtUtils } from "./utils/jwt";
import { JwtPayload } from "jsonwebtoken";

const AUTH_ROUTES = ["/auth/login", "/auth/register"];
const PUBLIC_ROUTES = ["/", "/gear"];

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  const decodedAccessToken = accessToken
    ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string)
    : null;

  const decodedRefreshToken = refreshToken
    ? jwtUtils.verifyToken(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as string,
      )
    : null;

  let role = null;

  if (!decodedAccessToken?.success) {
    //token has expired or is invalid, clear the cookies
    cookieStore.delete("accessToken");
  }

  if (decodedAccessToken?.success && decodedAccessToken.data) {
    role = (decodedAccessToken.data as JwtPayload).role;
  }

  if (accessToken && AUTH_ROUTES.includes(pathname)) {
    if (role === "CUSTOMER") {
      return NextResponse.redirect(new URL("/dashboard/customer", request.url));
    } else if (role === "PROVIDER") {
      return NextResponse.redirect(new URL("/dashboard/provider", request.url));
    } else if (role === "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard/admin", request.url));
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  if (!accessToken && !isPublicRoute && !isAuthRoute) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Authorization : Role based access control
  if (pathname === "/dashboard/customer" && role !== "CUSTOMER") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  } else if (pathname === "/dashboard/provider" && role !== "PROVIDER") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  } else if (pathname === "/dashboard/admin" && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)"],
};
