import { ProtectedRouteProvider } from "./ProtectedRouteProvider";

interface Props {
  children: React.ReactNode;
}

export function Provider({ children }: Readonly<Props>) {
  return (
    <ProtectedRouteProvider> 
      {children}
    </ProtectedRouteProvider>
  );
}