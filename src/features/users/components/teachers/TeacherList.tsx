import { redirect } from "next/navigation";
import { getTeachers } from "../../services/getTeachers";
import { PATHS } from "@/src/constants";
import { TeacherCard } from "./TeacherCard";
import { Pagination } from "@/src/components/ui";

interface Props {
  query: string;
}

export async function TeacherList({ query }: Props) {
  const resp = await getTeachers({ name: query,  limit: 12 });

  if (resp.error) redirect(PATHS.HOME());

  const { teachers = [], totalCount = 0, totalPages = 0 } = resp;

  if (query && totalCount === 0) {
    return (
      <div className="flex justify-center items-center gap-5 flex-col min-h-[600px]">
        <h2 className="text-primary-txt font-semibold text-2xl text-center">
          No Teachers Found
        </h2>
        <p className="text-secondary-txt text-lg text-center">
          We couldn&apos;t find a teacher with that name. Check the spelling or
          try searching for a different name.
        </p>
      </div>
    );
  }
  
  return (
    <>
      <ul className="mt-12 flex flex-wrap justify-center items-stretch gap-4">
        {teachers.map((teacher) => (
          <li key={teacher.id} className="w-full lg:max-w-sm xl:max-w-md">
            <TeacherCard {...teacher} />
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} />
    </>
  );
}
