import { TeacherProfile } from "@/src/features/users/components/teachers/TeacherProfile";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function TeacherInfoPage({ params }: Props) {
  const { id } = await params;
  return <TeacherProfile id={id} />;
}
