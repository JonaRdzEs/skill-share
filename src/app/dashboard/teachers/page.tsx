import { TeacherList } from "@/src/features/users/components/teachers/TeacherList";
import { SearchTeacherInput } from "@/src/features/users/components/teachers/SearchTeacherInput";

interface PageSearchParams {
  name?: string;
}

interface Props {
  searchParams?: Promise<PageSearchParams>
}

export default async function TeachersPage(props: Props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.name|| "";

  return (
    <>
      <h1 className="text-primary-txt font-bold text-3xl">Find a Teacher</h1>
      <p className="text-secondary-txt mt-3">Connect with skilled mentors and learn something new today.</p>
      <SearchTeacherInput />
      <TeacherList query={query} />
    </>
  );
}
