import { NoTeacherFound } from "./NoTeacherFound";
import { getTeacherById } from "../../services/getTeacherById";
import { Avatar } from "@/src/components/ui";
import { AcademicCapOff, MapPin, MessageOff } from "@/src/components/ui/icons";
import { TeacherInfoSection } from "./TeacherInfoSection";
import { SkillBadge } from "@/src/features/skills/components/SkillBadge";

interface Props {
  id: string;
}

export async function TeacherProfile({ id }: Props) {
  const resp = await getTeacherById(id);

  if (resp.error) {
    return <NoTeacherFound />;
  }

  const { name, email, photoUrl, location, bio, skills, targetReviews } = resp.teacher!;

  return (
    <div>
      <TeacherInfoSection className="my-5">
        <div className="flex justify-center items-center flex-col gap-4">
          <Avatar src={photoUrl ?? ""} size="xl" />
          <h4 className="text-xl font-semibold">{name}</h4>
          <p className="text-secondary-txt text-sm">{email}</p>
          {location && (
            <div className="flex justify-center items-center gap-1">
              <MapPin width={20} height={20} className="stroke-secondary-txt" />
              <p className="text-secondary-txt text-sm">{location}</p>
            </div>
          )}
          {bio && (
            <p className="text-secondary-txt text-xs text-center">
              {bio}
            </p>
          )}
        </div>
      </TeacherInfoSection>
      <div className="lg:flex lg:items-stretch lg:gap-4">
        <TeacherInfoSection className="lg:max-w-sm" title="Skills" description="Areas this teacher can help with" >
          {skills.length > 0 ? (
            <div className="mt-4 flex justify-start items-center gap-2 flex-wrap">
              {skills.map((userSkill) => (
                <SkillBadge key={userSkill.id}>{userSkill.skill.name}</SkillBadge>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2 flex-col mt-8">
              <AcademicCapOff className="stroke-primary-txt" />
              <p className=" text-primary-txt text-sm">This teacher has no skills yet </p>
            </div>
          )}
        </TeacherInfoSection>
        <TeacherInfoSection className="lg:order-first  lg:grow" title="Reviews" description="What students are saying about this teacher">
          {targetReviews.length > 0 ? (
            <div>
              teacher reviews
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2 flex-col mt-8">
              <MessageOff className="stroke-primary-txt" />
              <p className=" text-primary-txt text-sm">This teacher has no reviews yet</p>
            </div>
          )}
        </TeacherInfoSection>
      </div>
    </div>
  );
}
