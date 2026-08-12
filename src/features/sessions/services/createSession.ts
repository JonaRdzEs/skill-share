import { clientApiFetch } from "@/src/lib/api-client";
import { CreateSessionResponse } from "@/src/types/sessions";

interface Body {
  teacherId: string;
  scheduledAt: Date;
  duration: number;
  location: string;
  message?: string;
  skillId?: number;
}

export function createSession(body: Body) {
  const { teacherId, scheduledAt, ...rest } = body;
  
  return clientApiFetch<CreateSessionResponse>({
    path: "/sessions",
    useProxy: true,
    method: "post",
    body: JSON.stringify({
      guestId: teacherId,
      scheduledAt: scheduledAt.toISOString(),
      ...rest,
    }),
  });
}
