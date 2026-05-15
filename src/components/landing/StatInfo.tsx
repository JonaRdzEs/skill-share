interface Props {
  stat: string;
  text: string;
}

export function StatInfo({ stat, text }: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 m-1.5">
      <span className="font-bold text-primary text-3xl md:text-4xl">{stat}</span>
      <p className="text-primary-txt">{text}</p>
    </div>
  );
}
