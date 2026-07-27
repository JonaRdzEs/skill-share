import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { API_BASE_URL } from "@/src/constants";
import { ServerErrorResponse } from "@/src/types/http";
import { UpdatedUserResponse } from "@/src/types/users";

export async function PUT(request: NextRequest) {
  const cookieStore = await cookies();
  try {
    const body = await request.json();
    const resp = await fetch(`${API_BASE_URL}/users/me`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Cookie": `access_token=${cookieStore.get("access_token")?.value}`,
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

    const { user } = parsedResponse as UpdatedUserResponse;
    const nextResponse = NextResponse.json({ user }, { status: resp.status });

    return nextResponse;
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}