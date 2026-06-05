import { UserInfo } from "@/src/features/users/components/UserInfo";
import { HomeLink } from "./HomeLink";

export function TopBar() {
  return (
    <nav className="w-full flex justify-between items-center h-14 px-10 border-b border-gray-200 bg-white">
      <HomeLink />
      <UserInfo  />
    </nav>
  );
}
