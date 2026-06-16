import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { API_BASE_URL } from "./constants";

interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export async function proxy(request: NextRequest) {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get("access_token")?.value;
  const refreshToken = cookiesStore.get("refresh_token")?.value;
  const { pathname } = request.nextUrl;

  // To avoid an authenticated user to visit public auth pages
  if (
    (pathname === "/signin" || pathname === "/signup") &&
    (accessToken || refreshToken)
  ) {
    return NextResponse.redirect(new URL("/dashboard/home", request.url));
  }

  // if session expires go back to sign in form
  if (pathname.startsWith("/dashboard") && !accessToken && !refreshToken) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // to get a new access token and keep a user logged in
  if (pathname.startsWith("/dashboard") && !accessToken && refreshToken) {
    try {
      const backendResponse = await fetch(
        `${API_BASE_URL}/auth/refresh-token`,
        {
          method: "POST",
          headers: {
            Cookie: `refresh_token=${refreshToken}`,
          },
        }
      );

      if (!backendResponse.ok) throw new Error("Error refreshing token");

      const nextResponse = NextResponse.next();
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        (await backendResponse.json()) as RefreshTokenResponse;
      
      // Sync new cookies with client cookies
      if (newAccessToken) {
        cookiesStore.set("access_token", newAccessToken);
      }

      if (newRefreshToken) {
        cookiesStore.set("refresh_token", newRefreshToken);
      }

      nextResponse.headers.set("cookie", request.cookies.toString());

      return nextResponse;
    } catch {
      const signInResponse = NextResponse.redirect(
        new URL("/signin", request.url)
      );
      signInResponse.cookies.delete("access_token");
      signInResponse.cookies.delete("refresh_token");
      return signInResponse;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/signup", "/dashboard/:path*"],
};
