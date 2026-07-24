import { Avatar, Link } from "@/src/components/ui";
import { SkillBadge } from "@/src/features/skills/components/SkillBadge";

interface Props {
  id: string;
  bio: string | null;
  name: string;
  photoUrl: string | null;
  skills: string[];
}

const MIN_SKILLS_LENGTH = 3;

export function TeacherCard({ id, name, photoUrl, bio, skills }: Props) {
  return (
    <Link
      variant="unstyled"
      href={`/dashboard/teachers/${id}`}
      className="flex gap-3 min-h-32 h-full shadow-sm rounded-md px-5 py-3 hover:bg-background"
    >
      <Avatar src={photoUrl} size="md" />
      <div className="flex justify-start items-baseline flex-col gap-2">
        <h5 className="text-primary-txt font-semibold text-lg">{name}</h5>
        {bio && <p className="text-secondary-txt text-sm">{bio}</p>}
        {skills.length > 0 && (
          <div className="flex justify-start items-center gap-1 flex-wrap">
            {skills.slice(0, MIN_SKILLS_LENGTH).map((s, index) => (
              <SkillBadge key={`${s}-${index}`} className="text-xs bg-primary/10">{s}</SkillBadge>
            ))}
            {skills.length > MIN_SKILLS_LENGTH && (
              <span className="text-primary-txt text-xs">+{skills.length - MIN_SKILLS_LENGTH} more</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
