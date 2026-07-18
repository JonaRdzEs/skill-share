import { PopularTeacherList } from "@/src/features/users/components/teachers/PopularTeacherList";

export default function TeachersPage() {
  return (
    <>
      <h1 className="text-primary-txt font-bold text-3xl">Find a Teacher</h1>
      <p className="text-secondary-txt mt-3">Connect with skilled mentors and learn something new today.</p>
      <PopularTeacherList />
    </>
  );
}
