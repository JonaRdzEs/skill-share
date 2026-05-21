interface Props {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export function SignInCardInfo({ icon, text, title }: Props) {
  return (
    <div className="flex justify-start items-center gap-4">
      <div className="w-10 h-10 bg-primary rounded-full flex justify-center p-2">
        {icon}
      </div>
      <div>
        <p className="font-bold text-white">{title}</p>
        <p className="text-gray-300 text-sm">{text}</p>
      </div>
    </div>
  );
}
