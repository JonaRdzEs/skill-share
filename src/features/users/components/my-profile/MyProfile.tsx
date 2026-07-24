import { redirect } from "next/navigation";
import { getLoggedUser } from "../../services/getLoggedUser";
import { PATHS } from "@/src/constants";
import { EditUserForm } from "./EditUserForm";
import { getSkillsByUser } from "@/src/features/skills/services/getSkillsByUser";
import { Avatar } from "@/src/components/ui";

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
        <Avatar src={photoUrl} size="xl" />
        <p className="font-semibold text-primary-txt text-lg text-center">
          {name}
        </p>
      </div>
      <EditUserForm {...{ name, email, bio, location, role, skills }} />
    </div>
  );
}
