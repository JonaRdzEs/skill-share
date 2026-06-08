import { UserInfo } from "@/src/features/users/components/UserInfo";
import { HomeLink } from "./HomeLink";

interface Props {
  user: {
    name: string;
    email: string;
    photoUrl?: string | null;
  };
}

export function TopBar({ user }: Props) {
  return (
    <nav className="w-full flex justify-between items-center h-14 px-10 border-b border-gray-200 bg-white">
      <HomeLink />
      <UserInfo {...user} />
    </nav>
  );
}
