import { Skill } from "../skills";

export interface BasicInfoUser {
  id: string;
  name: string;
  email: string;
}

export interface TeacherCardInfo {
  photoUrl: string | null;
  skills: string[];
  id: string;
  bio: string | null;
  name: string;
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
  skill: Skill;
}

export interface UserSkillsResponse {
  user: {
    id: string;
    skills: UserSkill[];
  };
}

export interface AddedUserSkillsResponse {
  skills: {
    userSkillId: number;
    description: string | null;
    name: string;
    createdAt: Date;
  }[];
}

export interface GetTeachersResponse {
  teachers: TeacherCardInfo[];
  totalCount: number;
  totalPages: number;
}
