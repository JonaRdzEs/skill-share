import { Avatar } from "@/src/components/ui";
import { MapPin } from "@/src/components/ui/icons";
import { PATHS } from "@/src/constants";
import { ScheduleSessionForm } from "@/src/features/sessions/components/ScheduleSessionForm";
import { getTeacherById } from "@/src/features/users/services/getTeacherById";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function BookSessionPage({ params }: Props) {
  const { id } = await params;
  const resp = await getTeacherById(id);

  if (!resp.isOk) redirect(PATHS.TEACHER_LIST());

  const { location, name, skills, photoUrl } = resp.data.teacher;

  return (
    <>
      <h1 className="text-primary-txt font-bold text-3xl">Book a session</h1>
      <p className="text-secondary-txt mt-3">
        Choose a time that works for you and schedule a personalized session
        with this teacher. Use this opportunity to ask questions, explore a
        specific topic, or get guidance tailored to your learning goals.
      </p>
      <div className="shadow-sm p-5 rounded-sm flex justify-start items-center gap-4 my-8 max-w-3xl mx-auto">
        <Avatar src={photoUrl} size="md" />
        <div className="flex justify-start items-start flex-col gap-1">
          <p className="font-semibold text-lg text-primary-txt">{name}</p>
          {location && (
            <p className="text-secondary-txt text-sm flex justify-start items-center gap-1">
              <MapPin width={16} height={16} />
              {location}
            </p>
          )}
        </div>
      </div>
      <ScheduleSessionForm teacherSkills={skills} />
    </>
  );
}
