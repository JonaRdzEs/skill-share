import { UserInfo } from "@/src/features/users/components/UserInfo";
import { HomeLink } from "./HomeLink";

interface Props {
  className?: string;
  user: {
    name: string;
    email: string;
    photoUrl?: string | null;
  };
}

export function TopBar({ className = "", user }: Props) {
  return (
    <nav className={`w-full flex justify-between items-center h-14 px-10 border-b border-gray-200 bg-white ${className}`}>
      <HomeLink path="/home" />
      <UserInfo {...user} />
    </nav>
  );
}
