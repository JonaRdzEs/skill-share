import { NoTeacherFound } from "./NoTeacherFound";
import { getTeacherById } from "../../services/getTeacherById";
import { Avatar, Link } from "@/src/components/ui";
import { AcademicCapOff, CalendarPlus, MapPin, MessageOff } from "@/src/components/ui/icons";
import { TeacherInfoSection } from "./TeacherInfoSection";
import { SkillBadge } from "@/src/features/skills/components/SkillBadge";
import { PATHS } from "@/src/constants";

interface Props {
  id: string;
}

export async function TeacherProfile({ id }: Props) {
  const resp = await getTeacherById(id);

  if (!resp.isOk) {
    return <NoTeacherFound />;
  }

  const { name, email, photoUrl, location, bio, skills, targetReviews } =
    resp.data.teacher;

  return (
    <div className="max-w-6xl mt-10 mx-auto">
      <TeacherInfoSection className="my-5 relative">
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
            <p className="text-secondary-txt text-xs text-center">{bio}</p>
          )}
        </div>
        <Link
          href={PATHS.BOOK_SESSION(id)}
          className="text-sm p-2 sm:max-w-46 m-0 absolute right-3 lg:right-10 top-6 bg-primary text-white font-semibold hover:bg-blue-600 flex justify-center items-center gap-2 lg:py-3 lg:px-6 rounded-lg"
          variant="unstyled"
        >
          <CalendarPlus className="w-6 h-6 sm:w-4 sm:h-4"  />
          <span className="hidden sm:block">Book Session</span>
        </Link>
      </TeacherInfoSection>
      <div className="lg:flex lg:items-stretch lg:gap-4">
        <TeacherInfoSection
          className="lg:max-w-sm"
          title="Skills"
          description="Areas this teacher can help with"
        >
          {skills.length > 0 ? (
            <div className="mt-4 flex justify-start items-center gap-2 flex-wrap">
              {skills.map((userSkill) => (
                <SkillBadge key={userSkill.id}>
                  {userSkill.skill.name}
                </SkillBadge>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2 flex-col mt-8">
              <AcademicCapOff className="stroke-primary-txt" />
              <p className=" text-primary-txt text-sm">
                This teacher has no skills yet{" "}
              </p>
            </div>
          )}
        </TeacherInfoSection>
        <TeacherInfoSection
          className="lg:order-first  lg:grow"
          title="Reviews"
          description="What students are saying about this teacher"
        >
          {targetReviews.length > 0 ? (
            <div>teacher reviews</div>
          ) : (
            <div className="flex justify-center items-center gap-2 flex-col mt-8">
              <MessageOff className="stroke-primary-txt" />
              <p className=" text-primary-txt text-sm">
                This teacher has no reviews yet
              </p>
            </div>
          )}
        </TeacherInfoSection>
      </div>
    </div>
  );
}
