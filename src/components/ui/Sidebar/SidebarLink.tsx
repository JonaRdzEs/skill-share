"use client";

import { usePathname } from "next/navigation";
import { Link } from "../Link";

export interface Props {
  className?: string;
  icon?: React.ReactNode;
  title: string;
  path: string;
}

export function SidebarLink({ className = "", icon, title, path }: Props) {
  const pathname = usePathname();

  return (
    <Link
      className={`flex justify-center items-center gap-2 h-10 ${
        pathname.startsWith(path)
          ? "bg-primary/10 text-primary"
          : "hover:bg-primary/5 text-gray-600"
      } ${className}`}
      href={path}
    >
      {icon}
      {title}
    </Link>
  );
}
