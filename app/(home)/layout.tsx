import { Provider } from "@/src/providers/Provider";

interface Props {
  children: React.ReactNode;
}

export default async function HomeLayout({ children }: Readonly<Props>) {
  return (
    <Provider>
      <>
        <h1>Home Layout</h1>
        {children}
      </>
    </Provider>
  );
}
