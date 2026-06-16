import { NextRequest, NextResponse } from "next/server";
import { API_BASE_URL, APP_ENV } from "@/src/constants";
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

    const { user, accessToken, refreshToken } = parsedResponse as LoginResponse;
    const nextResponse = NextResponse.json({ user }, { status: resp.status });

    const cookieOptions = {
      httpOnly: true,
      secure: APP_ENV === "production",
      sameSite: "lax" as boolean | "lax" | "strict" | "none" | undefined,
    };

    nextResponse.cookies.set("access_token", accessToken, {
      ...cookieOptions,
      maxAge: 20 * 60 * 1000, // 20 minutes,
    });

    nextResponse.cookies.set("refresh_token", refreshToken, {
      ...cookieOptions,
      maxAge: 10 * 60 * 60 * 60 * 1000, // 10 days
    });

    return nextResponse;
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
