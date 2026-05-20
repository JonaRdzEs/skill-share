import { StatInfo } from "../components/index";

export function AppStats() {
  return (
    <section className="py-15  bg-white border-y border-gray-100">
      <div className="container mx-auto px-3 flex justify-around items-center flex-wrap">
        <StatInfo stat="500+" text="Expert Instructors" />
        <StatInfo stat="10,000+" text="Active Students" />
        <StatInfo stat="200+" text="Skill Categories" />
        <StatInfo stat="98%" text="Success Rate" />
      </div>
    </section>
  );
}
