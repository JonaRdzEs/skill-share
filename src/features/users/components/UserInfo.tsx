import { User } from "@/src/components/ui/icons";
import { getLoggedUser } from "../services/getLoggedUser";
import type { UserInfo as IUserInfo } from "@/src/types/users";

export async function UserInfo() {
  const { user } = await new Promise<IUserInfo>((resolve) => {
    getLoggedUser({
      onSuccess: (data) => {
        resolve(data);
      },
    });
  });

  return (
    <div className="flex justify-center items-center gap-2">
      <div className="flex flex-col items-end">
        <p className="text-xs font-semibold text-primary-txt">{user.name}</p>
        <span className="text-xs text-secondary-txt capitalize">
          {user.email}
        </span>
      </div>
      {user.photoUrl ? (
        <span>userImg</span>
      ) : (
        <div className="w-9 h-9 rounded-full bg-gray-200 flex justify-center items-center">
          <User variant="filled" width={18} height={18} />
        </div>
      )}
    </div>
  );
}
