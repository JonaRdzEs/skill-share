import { Link } from "@/src/components/ui";

interface Props {
  path: string;
  text: string;
}

export function FooterLink({ path, text }: Props) {
  return (
    <Link href={path} className="flex text-gray-300 hover:text-white">{text}</Link>
  )
}