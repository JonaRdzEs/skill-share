import { redirect } from "next/navigation";
import { Link, Pagination } from "@/src/components/ui";
import { getUserSessions } from "../../users/services/getUserSessions";
import { PATHS } from "@/src/constants";
import { SessionCard } from "./SessionCard";

interface Props {
  page?: number;
}

export async function SessionsList({ page = 1 }: Props) {
  const resp = await getUserSessions({ page, take: 20 });

  if (!resp.isOk) redirect(PATHS.HOME());

  const { sessions, totalCount, totalPages } = resp.data;

  if (totalCount === 0) {
    return (
      <div className="flex justify-center items-center gap-5 flex-col min-h-190">
        <h2 className="text-primary-txt font-semibold text-2xl text-center">
          Ready to Learn Something New?
        </h2>
        <p className="text-secondary-txt text-lg text-center w-10/12">
          You haven&apos;t scheduled any sessions yet. Find a teacher, explore
          their expertise, and book a session that fits your schedule. Your next
          learning opportunity is just a few clicks away!
        </p>
        <Link
          variant="unstyled"
          href={PATHS.TEACHER_LIST()}
          className="flex justify-center items-center gap-2 py-3 px-6 my-10 rounded-lg w-full max-w-md bg-primary text-white font-semibold hover:bg-blue-600"
        >
          Explore Teachers
        </Link>
      </div>
    );
  }

  return (
    <>
      <ul className="mt-12 md:flex md:flex-wrap md:gap-4 ">
        {sessions.map((session) => (
          <li key={session.id} className="w-full lg:max-w-86">
            <SessionCard {...session} />
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} />
    </>
  );
}
