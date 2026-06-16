import { NextResponse } from "next/server";
import { API_BASE_URL } from "@/src/constants";
import { ServerErrorResponse } from "@/src/types/http";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookiesStore = await cookies();
    const accessToken = cookiesStore.get("access_token")?.value;

    const resp = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: "POST",
      headers: {
        Cookie: `access_token=${accessToken}`,
      },
    });

    const parsedResponse = await resp.json();

    if (!resp.ok) {
      const errorServerResp = parsedResponse as ServerErrorResponse;
      return NextResponse.json(
        { ...errorServerResp },
        { status: resp.status, statusText: resp.statusText }
      );
    }

    if (cookiesStore.has("access_token")) {
      cookiesStore.delete("access_token");
    }

    if (cookiesStore.has("refresh_token")) {
      cookiesStore.delete("refresh_token");
    }

    const successResponse = parsedResponse as { message: string };

    const nextResponse = NextResponse.json(
      { ...successResponse },
      { status: resp.status }
    );
    nextResponse.cookies.delete("access_token");
    nextResponse.cookies.delete("refresh_token");
    return nextResponse;
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
