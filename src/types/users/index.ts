export interface BasicInfoUser {
  id: string;
  name: string;
  email: string;
}

export interface UserInfo {
  user: {
    id: BasicInfoUser["id"];
    name: BasicInfoUser["name"];
    email: BasicInfoUser["email"];
    bio: string | null;
    role: "student" | "teacher";
    location: string | null;
    photoUrl: string | null;
    createdAt: string;
    updatedAt: string;
  };
}

export interface UpdatedUserResponse {
  user: {
    id: string;
    photoUrl: string | undefined;
    username?: string;
    bio?: string;
    location: string;
  };
}

export interface UserSkill {
  id: number;
  description: string | null;
  createdAt: Date;
  skill_id: number;
}

export interface UserSkillsResponse {
  user: {
    id: string;
    skills: UserSkill[];
  };
}
