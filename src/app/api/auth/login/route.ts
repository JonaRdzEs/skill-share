import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { API_BASE_URL, REFRESH_TOKEN_MAX_AGE, ACCESS_TOKEN_MAX_AGE, cookieOptions } from "@/src/constants";
import { ServerErrorResponse } from "@/src/types/http";
import { LoginResponse } from "@/src/types/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const resp = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const parsedResponse = await resp.json();
    
    if (!resp.ok) {
      const errorServerResp = parsedResponse as ServerErrorResponse;
      return NextResponse.json(
        { ...errorServerResp },
        { status: resp.status, statusText: resp.statusText }
      );
    }

    const cookieStore = await cookies(); 
    const { user, accessToken, refreshToken } = parsedResponse as LoginResponse;
    const nextResponse = NextResponse.json({ user }, { status: resp.status });


    nextResponse.cookies.set("access_token", accessToken, {
      ...cookieOptions,
      maxAge: ACCESS_TOKEN_MAX_AGE,
    });

    nextResponse.cookies.set("refresh_token", refreshToken, {
      ...cookieOptions,
      maxAge: REFRESH_TOKEN_MAX_AGE,
    });

    // Sync new cookies with client cookies
    cookieStore.set("access_token", accessToken, {
      ...cookieOptions,
      maxAge: ACCESS_TOKEN_MAX_AGE,
    });

    cookieStore.set("refresh_token", refreshToken, {
      ...cookieOptions,
      maxAge: REFRESH_TOKEN_MAX_AGE,
    })
    return nextResponse;
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
