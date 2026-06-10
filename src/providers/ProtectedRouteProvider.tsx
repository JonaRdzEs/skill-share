"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { getLoggedUser } from "../features/users/services/getLoggedUser";

interface Props {
  children: React.ReactNode;
}

export function ProtectedRouteProvider({ children }: Readonly<Props>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getLoggedUser()
      .then(({ error }) => {
        console.log({ error })
        if (error) redirect("/signin");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return <>{children}</>;
}
