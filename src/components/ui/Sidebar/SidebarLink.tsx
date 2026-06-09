"use client";

import { usePathname } from "next/navigation";
import { Link } from "../Link";

export interface Props {
  icon?: React.ReactNode;
  title: string;
  path: string;
}

export function SidebarLink({ icon, title, path }: Props) {
  const pathname = usePathname();

  return (
    <Link
      className={`flex justify-center items-center gap-2 h-10 rounded-md my-2 ${
        pathname === path
          ? "bg-primary/10 text-primary"
          : "hover:bg-primary/5 text-gray-600"
      }`}
      href={path}
    >
      {icon}
      {title}
    </Link>
  );
}
