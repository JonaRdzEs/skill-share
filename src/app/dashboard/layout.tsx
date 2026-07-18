import { Sidebar, TopBar } from "@/src/components/ui";
import { BoardTeacher, Home, User } from "@/src/components/ui/icons";
import { PATHS } from "@/src/constants";
import { getLoggedUser } from "@/src/features/users/services/getLoggedUser";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default async function HomeLayout({ children }: Readonly<Props>) {
  const getUserResponse = await getLoggedUser();
  if (getUserResponse.error) {
    redirect(PATHS.SIGN_IN());
  }

  const user = getUserResponse.user!;

  const links = [
    {
      icon: <Home width={20} height={20} />,
      title: "Home",
      path: PATHS.HOME(),
    },
    {
      icon: <User variant="outlined" width={20} height={20} />,
      title: "Profile",
      path: PATHS.MY_PROFILE(),
    },
    {
      icon: <BoardTeacher width={20} height={20} />,
      title: "Teachers",
      path: PATHS.SEARCH_TEACHERS(),
    }
  ];

  return (
    <>
      <TopBar className="fixed right-0 left-0 top-0 z-10" user={user} />
      <main className="flex min-h-screen pt-14">
        <Sidebar links={links} />
        <section className="grow py-6 px-3 sm:px-10 bg-white">{children}</section>
      </main>
    </>
  );
}
