import { User } from "@/src/components/ui/icons";

interface Props {
  className?: string;
  content: string;
  user: {
    image?: string;
    name: string;
    title?: string;
  };
}

export function TestimonialCard({ className = "", content, user }: Props) {
  return (
    <div className={`bg-white shadow-md rounded-lg p-6 md:max-w-80 ${className}`}>
      <p className="font-thin">{`"${content}"`}</p>
      <div className="flex justify-start items-center gap-4 mt-5">
        {!user.image && (
          <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
            <User />
          </div>
        )}
        <div className="flex flex-col">
          <span className="font-bold text-sm text-primary-txt">
            {user.name}
          </span>
          {user.title && (
            <span className="text-sm text-primary-txt">{user.title}</span>
          )}
        </div>
      </div>
    </div>
  );
}
