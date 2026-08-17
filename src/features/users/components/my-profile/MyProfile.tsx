import { redirect } from "next/navigation";
import { getLoggedUser } from "../../services/getLoggedUser";
import { PATHS } from "@/src/constants";
import { EditUserForm } from "./EditUserForm";
import { getSkillsByUser } from "@/src/features/skills/services/getSkillsByUser";
import { Avatar, PageDescription, PageTitle } from "@/src/components/ui";

export async function MyProfile() {
  const [getUserResp, getUserSkillsResp] = await Promise.all([
    getLoggedUser(),
    getSkillsByUser("me"),
  ]);

  if (!getUserResp.isOk) redirect(PATHS.HOME());

  const { name, email, photoUrl, bio, location, role } = getUserResp.data.user;
  const skills = getUserSkillsResp.isOk
    ? getUserSkillsResp.data.user.skills
    : [];

  return (
    <>
      <PageTitle>My Profile</PageTitle>
      <PageDescription>
        Manage your personal information and keep your profile up to date. You
        can also become a teacher and start sharing your knowledge, skills, and
        experience with other students.
      </PageDescription>
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
    </>
  );
}
