import { MyProfile } from "@/src/features/users/components/my-profile/MyProfile";
import { UserProfile } from "@/src/features/users/components/user-profile/UserProfile";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProfilePage({ params }: Props) {
  const { id } = await params;

  if (id === "me") {
    return <MyProfile />;
  }

  return <UserProfile userId={id} /> ;
}
