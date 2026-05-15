import { Section } from "../Section";
import { StepCard } from "../StepCard";
import { Book, UsersGroup, TrendingUp } from "../../common/icons";

export function HowItWorks() {
  const steps = [
    {
      title: "Choose Your Skill",
      text: "Browse through hundreds of categories and find the perfect skill to learn or teach.",
      icon: (
        <Book width={32} height={32} strokeWidth={2} className="text-primary" />
      ),
    },
    {
      title: "Connect & Learn",
      text: "Match with expert instructors or eager students based on your interests and schedule.",
      icon: (
        <UsersGroup
          width={32}
          height={32}
          strokeWidth={2}
          className="text-primary"
        />
      ),
    },
    {
      title: "Grow Together",
      text: "Start your learning journey or share your expertise through live sessions and workshops.",
      icon: (
        <TrendingUp
          width={32}
          height={32}
          strokeWidth={2}
          className="text-primary"
        />
      ),
    },
  ];
  
  return (
    <Section
      id="how-it-works"
      title="How It Works"
      description="Get started in three simple steps"
      className="py-20 bg-gray-50"
      contentClassName=" container mx-auto px-3"
    >
      <div className="flex flex-col justify-center items-stretch gap-8 sm:flex-row sm:flex-wrap">
        {steps.map((step, index) => (
          <StepCard key={index} className="mt-4" step={index + 1} {...step} />
        ))}
      </div>
    </Section>
  );
}
