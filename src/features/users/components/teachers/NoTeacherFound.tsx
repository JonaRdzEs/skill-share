import { Link } from "@/src/components/ui";
import { BoardTeacher } from "@/src/components/ui/icons";
import { PATHS } from "@/src/constants";

export function NoTeacherFound() {
  return (
    <div className="flex h-full flex-col justify-center items-center gap-4">
      <BoardTeacher className="stroke-primary-txt" width={80} height={80} />
      <h2 className="text-3xl font-semibold text-primary-txt">
        Teacher Not Found
      </h2>
      <p className="text-center text-secondary-txt">
        The teacher you&apos;re looking for doesn&apos;t exist or may no longer
        be available. Please check the URL or return to the teachers list to
        explore other profiles.
      </p>
      <Link
        variant="unstyled"
        className="mt-10 flex justify-center px-5 py-3 rounded-lg w-full max-w-3xs bg-primary text-white  hover:bg-blue-600"
        href={PATHS.SEARCH_TEACHERS()}
      >
        Go back to teacher list
      </Link>
    </div>
  );
}
