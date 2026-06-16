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

export interface LoginResponse {
  user: {
    id: BasicInfoUser["id"];
    username: BasicInfoUser["name"];
    email: BasicInfoUser["email"];
    bio: string | null;
    location: string | null;
    photoUrl: string | null;
  };
  accessToken: string;
  refreshToken: string;
}
