"use client";

import { useRouter } from "next/navigation";
import { SubmitEvent, useState } from "react";
import { Button, TextError } from "@/src/components/ui";
import { RightArrow } from "@/src/components/ui/icons";
import { EmailInput } from "../EmailInput";
import { PasswordInput } from "../PasswordInput";
import { login } from "../../services/login";
import { PATHS } from "@/src/constants";

export function SignInForm() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const cleanError = () => setError("");

  const onSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("pass") as string;

    if (!email || !password) return;

    setLoading(true);
    const { error: loginError } = await login({ email, password });
    setLoading(false);

    if (loginError) {
      setError(loginError);
      return;
    }

    router.push(PATHS.HOME());
  };

  return (
    <form className="w-full max-w-md mt-8" onSubmit={onSubmit}>
      <EmailInput name="email" onChange={cleanError} />
      <PasswordInput
        id="password"
        name="pass"
        className="mt-3"
        onChange={cleanError}
      />
      {error && <TextError error={error} />}
      <Button
        variant="primary"
        loading={loading}
        disabled={loading}
        type="submit"
      >
        Sign In
        <RightArrow className="text-white" />
      </Button>
    </form>
  );
}
