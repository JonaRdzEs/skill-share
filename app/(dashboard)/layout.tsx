import { TopBar } from "@/src/components/ui";
import { getLoggedUser } from "@/src/features/users/services/getLoggedUser";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default async function HomeLayout({ children }: Readonly<Props>) {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  const response = await getLoggedUser(token);

  if (response.error) redirect("/signin");

  const { name, email, photoUrl = "" } = response.user!;

  return (
    <>
      <TopBar user={{ name, email, photoUrl }} />
      <h1>Home Layout</h1>
      {children}
    </>
  );
}
