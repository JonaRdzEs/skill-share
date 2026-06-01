"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { get } from "../helpers/http";

interface Props {
  children: React.ReactNode;
}

export function ProtectedRouteProvider({ children }: Readonly<Props>) {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    get({ path: "/users/me", authenticated: true })
      .then(({ isOk }) => {
        setAuthenticated(isOk);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (!isAuthenticated) redirect("/signin");

  return <>{children}</>;
}
