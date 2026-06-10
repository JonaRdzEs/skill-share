"use client";

import { useRouter } from "next/navigation";
import { Logout } from "./icons/Logout";
import { logout } from "@/src/features/auth/services/logout";

export function LogoutButton() {
  const router = useRouter();
  const handleClick = async () => {
    const resp = await logout();

    if(resp?.error) return;
    router.refresh();
  };

  return (
    <button
      className="bg-transparent flex justify-center items-center gap-2 py-4 w-full text-gray-600 hover:cursor-pointer hover:bg-primary/5"
      onClick={handleClick} 
    >
      <Logout width={20} height={20} />
      Log out
    </button>
  );
}
