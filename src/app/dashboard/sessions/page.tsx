import { SessionsList } from "@/src/features/sessions/components/SessionList";

interface Props {
  searchParams?: Promise<{ page?: string }>
}

export default async function SessionsPage(props: Props) {
  const searchParams = await props.searchParams;

  const pageParam = parseInt(searchParams?.page ?? "");
  const page = isNaN(pageParam) ? 1 : pageParam;

  return (
    <>
      <h1 className="text-primary-txt font-bold text-3xl">My Sessions</h1>
      <p className="text-secondary-txt mt-3">
        Keep track of your upcoming and past sessions all in one place. View
        your scheduled sessions, check their status, review the details, and
        stay organized so you never miss an opportunity to learn.
      </p>
      <SessionsList page={page} />
    </>
  );
}
