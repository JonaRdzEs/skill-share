export interface CreateSessionResponse {
  session: {
    hostId: string;
    guestId: string;
    skillId: number;
    id: string;
    status: SessionStatus;
    scheduledAt: string;
    duration: number;
    location: string;
    message: string | null;
    createdAt: string;
    updatedAt: string;
  };
}

export enum SessionStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}
