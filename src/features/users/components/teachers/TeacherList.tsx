import { redirect } from "next/navigation";
import { getTeachers } from "../../services/getTeachers";
import { PATHS } from "@/src/constants";
import { TeacherCard } from "./TeacherCard";
import { Pagination } from "@/src/components/ui";

interface Props {
  query: string;
  page?: number
}

export async function TeacherList({ query, page }: Props) {
  const resp = await getTeachers({ name: query, limit: 12, page });

  if (!resp.isOk) redirect(PATHS.HOME());

  const { teachers, totalCount, totalPages } = resp.data;

  if (totalCount === 0) {
    return (
      <div className="flex justify-center items-center gap-5 flex-col min-h-[600px]">
        <h2 className="text-primary-txt font-semibold text-2xl text-center">
          No Teachers Found
        </h2>
        <p className="text-secondary-txt text-lg text-center">
          {query
            ? "We couldn't find a teacher with that name. Check the spelling or try searching for a different name."
            : "There are no teachers in the platform yet"
          }
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
