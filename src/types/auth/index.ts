import type { BasicInfoUser } from "../users";

export interface SignUpData {
  username: string;
  email: string;
  password: string;
  confirmedPassword?: string;
}

export interface CreatedUserResponse {
  message: string;
  user: BasicInfoUser;
}
