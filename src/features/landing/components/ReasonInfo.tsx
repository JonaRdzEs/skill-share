interface Props {
  className?: string,
  icon: React.ReactNode,
  title: string;
  description: string;
}

export function ReasonInfo({ className = "", icon, title, description }: Props) {
  return (
    <div className={`flex justify-center items-stretch gap-4 ${className}`}>
      <div className="flex justify-center p-3 bg-primary/20 w-14 h-14 rounded-xl">
        {icon}
      </div>
      <div className="grow">
        <h5 className="font-bold text-lg text-primary-txt">
          {title}
        </h5>
        <p className="text-secondary-txt ">
          {description}
        </p>
      </div>
    </div>
  );
}
