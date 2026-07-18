import type { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export function SkillBadge({ className = "", children }: Props) {
  return (
    <span
      className={`flex justify-center items-center gap-2 bg-primary/70 text-white rounded-2xl text-sm w-auto py-1 px-3 ${className}`}
    >
      {children}
    </span>
  );
}
