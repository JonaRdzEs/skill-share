import type { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export function PageTitle({ className = "", children }: Props) {
  return (
    <h1 className={`text-primary-txt font-bold text-3xl ${className}`}>
      {children}
    </h1>
  );
}
