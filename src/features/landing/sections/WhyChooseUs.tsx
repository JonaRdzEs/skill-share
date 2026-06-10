import Image from "next/image";
import { Section, ReasonInfo } from "../components";
import {
  Award,
  Certificate,
  Clock,
  Shield,
  UsersGroup,
} from "@/src/components/ui/icons";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Verified Instructors",
      description:
        "All our instructors are vetted professionals with proven expertise in their fields.",
      icon: (
        <Shield
          width={30}
          height={30}
          strokeWidth={2}
          className="text-primary"
        />
      ),
    },
    {
      title: "Flexible Scheduling",
      description:
        "Learn at your own pace with sessions that fit your busy lifestyle.",
      icon: (
        <Clock
          width={30}
          height={30}
          strokeWidth={2}
          className="text-primary"
        />
      ),
    },
    {
      title: "Earn Certificates",
      description:
        "Get recognized for your achievements with industry-recognized certificates.",
      icon: (
        <Certificate
          width={30}
          height={30}
          strokeWidth={2}
          className="text-primary"
        />
      ),
    },
    {
      title: "Community Support",
      description:
        "Join a vibrant community of learners and experts who support each other.",
      icon: (
        <UsersGroup
          width={30}
          height={30}
          strokeWidth={2}
          className="text-primary"
        />
      ),
    },
  ];

  return (
    <Section
      id="why-choose-us"
      title="Why Choose SkillShare?"
      description="Experience the future of learning and teaching"
      className="py-20 bg-white"
      contentClassName=" container mx-auto px-3"
    >
      <div className="md:flex md:items-center md:gap-8">
        <div className="relative mt-5 mb-16">
          <Image
            className="rounded-xl object-cover h-100 w-full"
            src="/certification-section.jpg"
            alt="Diverse team collaboration"
            width={500}
            height={500}
          />
          <div className="absolute right-0 -bottom-6 flex justify-center items-center gap-3 bg-white rounded-lg shadow-md py-5 px-7 md:-right-4">
            <Award width={40} height={40} className="text-yellow-500" />
            <div className="flex justify-start items-start gap-1 flex-col">
              <span className="font-bold text-primary-txt">
                Certified Skills
              </span>
              <span className="text-secondary-txt text-sm">Get recognized</span>
            </div>
          </div>
        </div>
        <div>
          {reasons.map((reason, idx) => (
            <ReasonInfo
              key={`${reason.title}-${idx}`}
              className="my-4"
              {...reason}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
