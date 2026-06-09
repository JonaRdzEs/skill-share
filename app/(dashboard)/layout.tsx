import { Sidebar, TopBar } from "@/src/components/ui";
import { Home, User } from "@/src/components/ui/icons";
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

  if (response.error) redirect("/");

  const { name, email, photoUrl = "" } = response.user!;

  const links = [
    {
      icon: <Home width={20} height={20} />,
      title: "Home",
      path: "/home",
    },
    {
      icon: <User variant="outlined" width={20} height={20} />,
      title: "Profile",
      path: "/profile/me",
    },
  ];

  return (
    <>
      <TopBar className="fixed right-0 left-0 top-0" user={{ name, email, photoUrl }} />
      <div className="flex min-h-screen pt-14">
        <Sidebar links={links} />
        <section className="grow py-6 px-10">{children}</section>
      </div>
    </>
  );
}
