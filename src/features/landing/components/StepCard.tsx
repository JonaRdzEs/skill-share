import { Card } from "@/src/components/ui";

interface Props {
  className?: string;
  step: number,
  icon: React.ReactNode;
  title: string;
  text: string;
}

export function StepCard({ className = "", step, title, text, icon }: Props) {
  return (
    <Card className={`relative sm:max-w-68 md:max-w-85 ${className}`}>
      <span className="absolute flex justify-center w-11 h-11 -top-5 -left-2 sm:-left-5 p-2.5 rounded-xl bg-primary text-white font-bold">
        {step >= 1 || step < 10 ? `0${step}` : step}
      </span>
      <div className="mt-10 bg-primary/30 w-14 h-14 rounded-xl flex justify-center items-center">
        {icon}
      </div>
      <h4 className="font-bold text-primary-txt text-xl my-3">{title}</h4>
      <p className="text-secondary-txt">{text}</p>
    </Card>
  );
}
