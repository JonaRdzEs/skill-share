import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { API_BASE_URL } from "@/src/constants";
import { ServerErrorResponse } from "@/src/types/http";
import { AddedUserSkillsResponse } from "@/src/types/users";

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  try {
    const body = await request.json();    
    const resp = await fetch(`${API_BASE_URL}/users/me/skills`, {
      method: "POST",
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

    const { skills } = parsedResponse as AddedUserSkillsResponse;
    const nextResponse = NextResponse.json({ skills }, { status: resp.status });

    return nextResponse;
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
