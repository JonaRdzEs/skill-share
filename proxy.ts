import { NextRequest, NextResponse } from "next/server";
import { API_BASE_URL } from "./src/constants";

export async function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  const refreshToken = request.cookies.get("refresh_token")?.value;

  const { pathname } = request.nextUrl;

  // To avoid an authenticated user to visit auth pages
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

      const setCookieHeaders = backendResponse.headers.getSetCookie();

      if (setCookieHeaders.length > 0) {
        // Append backend cookies to the response
        setCookieHeaders.forEach((cookie) => {
          nextResponse.headers.append("Set-Cookie", cookie);
        });

        const newAccessToken = setCookieHeaders.find((value) =>
          value.startsWith("access_token=")
        );
        const newRefreshToken = setCookieHeaders.find((value) =>
          value.startsWith("refresh_token=")
        );

        // Sync new cookies with client cookies
        if (newAccessToken) {
          request.cookies.set("access_token", newAccessToken.split("=")[1]);
        }

        if (newRefreshToken) {
          request.cookies.set("refresh_token", newRefreshToken.split("=")[1]);
        }

        nextResponse.headers.set("cookie", request.cookies.toString());
      }
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
