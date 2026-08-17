import { Skill } from "../skills";

export interface Session {
  id: string;
  hostId: string;
  guestId: string;
  status: SessionStatus;
  scheduledAt: string;
  duration: number;
  location: string;
  message: string | null;
  createdAt: string;
  updatedAt: string;
  skillId: number;
}

export interface CreateSessionResponse {
  session: Session;
}

export interface SessionListInfo
  extends Omit<
    Session,
    "skillId" | "location" | "createdAt" | "updatedAt" | "message" | "guestId"
  > {
  skill: Skill | null;
  guest: {
    id: string;
    username: string;
  };
}

export interface SessionListResponse {
  totalCount: number;
  totalPages: number;
  sessions: SessionListInfo[];
}

export enum SessionStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  EXPIRED = "EXPIRED",
}
