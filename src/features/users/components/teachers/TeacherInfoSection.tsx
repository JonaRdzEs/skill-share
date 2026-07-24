import type { ReactNode } from "react";

interface Props {
  className?: string;
  title?: string;
  description?: string;
  children: ReactNode;
}

export function TeacherInfoSection({ className = "", title, description, children }: Props) {
  return (
    <div className={`shadow-sm px-6 py-5 rounded-sm ${className}`}>
      {title && (
        <h6 className="text-primary-txt font-semibold text-lg">{title}</h6>
      )}
      {description && (
        <p className="text-secondary-txt/80 text-sm">{description}</p>
      )}
      {children}
    </div>
  );
}
