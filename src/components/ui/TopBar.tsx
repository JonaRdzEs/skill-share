import { UserInfo } from "@/src/features/users/components/UserInfo";
import { HomeLink } from "./HomeLink";
import { PATHS } from "@/src/constants";

interface Props {
  className?: string;
  user: {
    name: string;
    role: "student" | "teacher";
    photoUrl: string | null;

  }
}

export function TopBar({ className = "", user }: Props) {
  return (
    <nav className={`w-full flex justify-between items-center h-14 px-3 sm:px-10 border-b border-gray-200 bg-white ${className}`}>
      <HomeLink className="[&_span:first-of-type]:text-sm sm:[&_span:first-of-type]:text-lg"  path={PATHS.HOME()} />
      <UserInfo className="hidden sm:flex" {...user} />
    </nav>
  );
}
