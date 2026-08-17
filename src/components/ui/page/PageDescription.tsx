import type { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export function PageDescription({ className = "", children }: Props) {
  return (
    <p className={`text-secondary-txt mt-3 ${className}`}>
      {children}
    </p>
  );
}
