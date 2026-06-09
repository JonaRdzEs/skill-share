import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("access_token");

  const { pathname } = new URL(request.url);

  if (
    (pathname === "/signin" || pathname === "/signup") &&
    accessToken?.value
  ) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (pathname === "/home" && !accessToken?.value) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/signup", "/home"],
};
