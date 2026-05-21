"use client";

import { SubmitEvent, useState } from "react";
import { Button, Input } from "@/src/components/ui";
import { LockPassword, Email, RightArrow } from "@/src/components/ui/icons";
import { login } from "../../services/login";

export function SignInForm() {
  
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false);

  const onSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("pass") as string;

    setDisabledBtn(true);
    const isOk = await login({ email, password });
    console.log("Logged in successfully?", isOk);
    setDisabledBtn(false);
  };

  return (
    <form className="w-full max-w-md mt-8" onSubmit={onSubmit}>
      <Input
        label="Email"
        id="email"
        type="email"
        name="email"
        placeholder="email@example.com"
        icon={<Email width={28} height={28} className="text-gray-400" />}
      />
      <Input
        label="Password"
        type="password"
        id="password"
        name="pass"
        placeholder="*********"
        icon={<LockPassword width={28} height={28} className="text-gray-400" />}
        className="mt-3"
      />
      <Button variant="primary" disabled={disabledBtn} type="submit">
        Sign In
        <RightArrow className="text-white" />
      </Button>
    </form>
  );
}
