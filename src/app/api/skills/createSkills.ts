import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { API_BASE_URL } from "@/src/constants";
import { ServerErrorResponse } from "@/src/types/http";
import { CreateSkillsResponse } from "@/src/types/skills";

export async function POST(request: NextRequest) {
  try {
    const cookiesStore = await cookies();
    const body = await request.json();

    const resp = await fetch(`${API_BASE_URL}/skills`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `access_token=${cookiesStore.get("access_token")?.value}`,
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

    const { skills } = parsedResponse as CreateSkillsResponse;

    return NextResponse.json({ skills }, { status: resp.status });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
