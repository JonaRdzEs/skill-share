"use client";

import { ChangeEvent, MouseEvent, useState } from "react";
import { Input } from "@/src/components/ui";
import { LockPassword, Email, RightArrow } from "@/src/components/ui/icons";
import { login } from "../services/login";

export function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false);

  const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisabledBtn(true);
    const isOk = await login({ email, password });
    console.log("Logged in successfully?", isOk);
    setDisabledBtn(false);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
  };

  return (
    <>
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="email@example.com"
        value={email}
        onChange={onInputChange}
        icon={<Email width={28} height={28} className="text-gray-400" />}
        className="w-full max-w-md mt-8"
      />
      <Input
        label="Password"
        type="password"
        id="password"
        placeholder="Type your password"
        value={password}
        onChange={onInputChange}
        icon={<LockPassword width={28} height={28} className="text-gray-400" />}
        className="w-full max-w-md mt-3"
      />
      <button onClick={onClick} disabled={disabledBtn} className="bg-primary text-white font-semibold flex justify-center items-center gap-2 py-3 px-6 rounded-lg w-full max-w-md my-7 hover:cursor-pointer hover:bg-blue-600">
        Sign In
        <RightArrow className="text-white" /> 
      </button>
    </>
  );
}
