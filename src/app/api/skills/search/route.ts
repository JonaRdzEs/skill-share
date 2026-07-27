import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { API_BASE_URL } from "@/src/constants";
import { ServerErrorResponse } from "@/src/types/http";
import { SearchSkillsResponse } from "@/src/types/skills";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  try {
    const cookiesStore = await cookies();
    const resp = await fetch(
      `${API_BASE_URL}/skills/search?${searchParams.toString()}`,
      {
        headers: {
          Cookie: `access_token=${cookiesStore.get("access_token")?.value}`,
        },
      }
    );
    const parsedResponse = await resp.json();

    if (!resp.ok) {
      const errorResponse = parsedResponse as ServerErrorResponse;
      return NextResponse.json(
        { ...errorResponse },
        { status: resp.status, statusText: resp.statusText }
      );
    }

    const { skills } = parsedResponse as SearchSkillsResponse;

    return NextResponse.json({ skills }, { status: resp.status });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
