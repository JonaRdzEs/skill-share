import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { API_BASE_URL } from "@/src/constants";
import { ServerErrorResponse } from "@/src/types/http";

export async function DELETE(request: NextRequest) {
  const cookieStore = await cookies();
  try {
    const body = await request.json();
    const resp = await fetch(`${API_BASE_URL}/users/me/skills`, {
      method: "DELETE",
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

    const { message } = parsedResponse as { message: string };
    const nextResponse = NextResponse.json({ message }, { status: resp.status });

    return nextResponse;
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
