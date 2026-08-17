import { Sidebar, TopBar } from "@/src/components/ui";
import { BoardTeacher, CalendarClock, Home, User } from "@/src/components/ui/icons";
import { PATHS } from "@/src/constants";
import { getLoggedUser } from "@/src/features/users/services/getLoggedUser";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default async function HomeLayout({ children }: Readonly<Props>) {
  const getUserResponse = await getLoggedUser();
  if (!getUserResponse.isOk) {
    redirect(PATHS.SIGN_IN());
  }

  const { user } = getUserResponse.data;

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
      icon: <CalendarClock width={20} height={20} />,
      title: "Sessions",
      path: PATHS.MY_SESSIONS(),
    },
    {
      icon: <BoardTeacher width={20} height={20} />,
      title: "Teachers",
      path: PATHS.TEACHER_LIST(),
    }
  ];

  return (
    <>
      <TopBar className="fixed right-0 left-0 top-0 z-10" user={user} />
      <main className="flex min-h-screen pt-14">
        <Sidebar links={links} />
        <section className="grow pt-6 pb-18 px-3 sm:py-6 sm:px-10 bg-white">{children}</section>
      </main>
    </>
  );
}
