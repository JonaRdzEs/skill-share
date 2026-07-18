import { redirect } from "next/navigation";
import { getTeachers } from "../../services/getTeachers";
import { PATHS } from "@/src/constants";
import { TeacherCard } from "./TeacherCard";

export async function PopularTeacherList() {
  const resp = await getTeachers();

  if (resp.error) redirect(PATHS.HOME());

  const { teachers = [] } = resp;

  return (
    <ul className="mt-12 flex flex-wrap justify-center items-stretch gap-4">
      {teachers.map((teacher) => (
        <li key={teacher.id} className="w-full lg:max-w-sm xl:max-w-md">
          <TeacherCard {...teacher} />
        </li>
      ))}
    </ul>
  );
}
