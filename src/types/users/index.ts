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
    location: string | null;
    photoUrl: string | null;
    createdAt: string;
    updatedAt: string;
  };
}
