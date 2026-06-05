import { TopBar } from "@/src/components/ui";

interface Props {
  children: React.ReactNode;
}

export default async function HomeLayout({ children }: Readonly<Props>) {
  return (
      <>
        <TopBar />
        <h1>Home Layout</h1>
        {children}
      </>
  );
}
