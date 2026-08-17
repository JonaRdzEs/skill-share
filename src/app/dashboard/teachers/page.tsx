import { PageTitle, PageDescription } from "@/src/components/ui";
import { TeacherList } from "@/src/features/users/components/teachers/TeacherList";
import { SearchTeacherInput } from "@/src/features/users/components/teachers/SearchTeacherInput";

interface PageSearchParams {
  name?: string;
  page?: string;
}

interface Props {
  searchParams?: Promise<PageSearchParams>;
}

export default async function TeachersPage(props: Props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.name || "";
  const pageParam = parseInt(searchParams?.page ?? "");
  const page = isNaN(pageParam) ? 1 : pageParam;

  return (
    <>
      <PageTitle>Find a Teacher</PageTitle>
      <PageDescription>
        Connect with skilled mentors and learn something new today.
      </PageDescription>
      <SearchTeacherInput />
      <TeacherList query={query} page={page} />
    </>
  );
}
