import { Avatar } from "@/src/components/ui";

interface Props {
  className?: string;
  name: string;
  role: "student" | "teacher";
   photoUrl: string | null;
}

export function UserInfo({ className = "", name, role, photoUrl }: Props) {
  return (
    <div className={`flex justify-center items-center gap-2 ${className}`}>
      <div className="flex flex-col items-end">
        <p className="text-xs font-semibold text-primary-txt">{name}</p>
        <span className="text-xs text-secondary-txt capitalize">{role}</span>
      </div>
      <Avatar src={photoUrl} size="sm" />
    </div>
  );
}
