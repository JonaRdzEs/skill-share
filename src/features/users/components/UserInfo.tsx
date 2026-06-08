import { User } from "@/src/components/ui/icons";

interface Props {
  name: string;
  email: string;
  photoUrl?: string | null;
}

export async function UserInfo({ name, email, photoUrl }: Props) {
  
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="flex flex-col items-end">
        <p className="text-xs font-semibold text-primary-txt">{name}</p>
        <span className="text-xs text-secondary-txt capitalize">
          {email}
        </span>
      </div>
      {photoUrl ? (
        <span>userImg</span>
      ) : (
        <div className="w-9 h-9 rounded-full bg-gray-200 flex justify-center items-center">
          <User variant="filled" width={18} height={18} />
        </div>
      )}
    </div>
  );
}
