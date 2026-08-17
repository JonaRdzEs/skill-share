import { PageTitle, PageDescription } from "@/src/components/ui";
import { TeacherProfile } from "@/src/features/users/components/teachers/TeacherProfile";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function TeacherInfoPage({ params }: Props) {
  const { id } = await params;
  return (
    <>
      <PageTitle>Meet Your Teacher</PageTitle>
      <PageDescription>
        Get to know your teacher, explore their skills and experience, and see
        what other students have to say through their reviews. When you&apos;re
        ready, choose a time that works for you and book a personalized session.
      </PageDescription>
      <TeacherProfile id={id} />
    </>
  );
}
