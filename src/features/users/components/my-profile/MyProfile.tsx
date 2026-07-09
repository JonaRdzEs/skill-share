import Image from "next/image";
import { redirect } from "next/navigation";
import { User } from "@/src/components/ui/icons";
import { getLoggedUser } from "../../services/getLoggedUser";
import { PATHS } from "@/src/constants";
import { EditUserForm } from "./EditUserForm";
import { getSkillsByUser } from "@/src/features/skills/services/getSkillsByUser";

export async function MyProfile() {
  const [getUserResp, getUserSkillsResp] = await Promise.all([
    getLoggedUser(),
    getSkillsByUser("me"),
  ]);

  if (getUserResp.error) redirect(PATHS.HOME());

  const { name, email, photoUrl, bio, location, role } = getUserResp.user!;
  const skills = getUserSkillsResp.user?.skills ?? [];

  return (
    <div className="pt-10">
      <div className="w-full flex justify-center items-center flex-col gap-3 relative">
        <div className="w-28 h-28 border-4 border-primary rounded-full absolute -top-2" />
        {photoUrl ? (
          <Image
            className="w-24 h-24 rounded-full"
            width={84}
            height={84}
            src={photoUrl}
            alt={name}
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-200 flex justify-center items-center">
            <User variant="filled" width={60} height={60} />
          </div>
        )}
        <p className="font-semibold text-primary-txt text-lg text-center">
          {name}
        </p>
      </div>
      <EditUserForm {...{ name, email, bio, location, role, skills }} />
    </div>
  );
}
