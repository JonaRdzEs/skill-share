import { Link } from "@/src/components/ui";
import { Clock } from "@/src/components/ui/icons";
import { PATHS } from "@/src/constants";
import { SessionListInfo } from "@/src/types/sessions";

export function SessionCard({
  id,
  duration,
  guest,
  scheduledAt,
  skill,
  status,
}: SessionListInfo) {
  const scheduledAtDate = new Date(scheduledAt);
  const [, month, day] = scheduledAtDate.toDateString().split(" ");
  const finishedAt = new Date(scheduledAtDate.getTime() + 1000 * 60 * duration);

  const statusStyles = {
    PENDING: "bg-amber-50 text-amber-700 border-amber-200",
    ACCEPTED: "bg-emerald-50 text-emerald-700 border-emerald-200",
    REJECTED: "bg-red-50 text-red-700 border-red-200",
    COMPLETED: "bg-blue-50 text-blue-700 border-blue-200",
    CANCELLED: "bg-slate-100 text-slate-600 border-slate-200",
    EXPIRED: "bg-violet-50 text-violet-700 border-violet-200",
  };

  return (
    <Link
      variant="unstyled"
      href={PATHS.SESSION_INFO(id)}
      className="flex gap-3 min-h-30 h-full shadow-sm rounded-md my-3 px-5 py-3 hover:bg-background"
    >
      <div className="rounded-lg flex justify-center items-center gap-2 flex-col bg-primary/80 text-white px-3">
        <span className="uppercase text-xs">{month}</span>
        <span className="font-semibold text-2xl">{day}</span>
      </div>
      <div className="grow relative">
        <div className="text-lg text-primary-txt font-semibold ">
          {skill?.name && (
            <span className="capitalize">{skill.name} With </span>
          )}
          <span>{guest.username}</span>
        </div>
        <p className="text-secondary-txt text-sm my-2 flex gap-1 items-center">
          <Clock width={18} height={18} />
          {new Date(scheduledAt).toTimeString().match(/\d\d:\d\d/)![0]} -{" "}
          {finishedAt.toTimeString().match(/\d\d:\d\d/)![0]}
        </p>

        <span
          className={`absolute right-2 bottom-2 rounded-lg border px-2.5 py-1 text-xs font-medium capitalize ${statusStyles[status]}`}
        >
          {status.toLowerCase()}
        </span>
      </div>
    </Link>
  );
}
