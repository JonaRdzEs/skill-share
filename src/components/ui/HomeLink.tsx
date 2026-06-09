import { Book } from "./icons";
import { Link } from "./Link";

interface Props {
  className?: string;
  path?: string;
}

export function HomeLink({ className = "", path = "/" }: Props) {
  return (
    <Link href={path} className={`inline-flex justify-start items-center gap-1.5 ${className}`}>
      <Book width={26} height={26} strokeWidth={2} className="text-primary" />
      <span className="font-bold text-lg text-primary-txt">Skill Share</span>
    </Link>
  );
}
