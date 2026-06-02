export interface BasicInfoUser {
  id: string;
  name: string;
  email: string;
}

export interface UserInfo extends BasicInfoUser {
  bio: string | null;
  location: string | null;
  photoUrl: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}
