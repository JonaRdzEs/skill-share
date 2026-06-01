"use client";

import { useRouter } from "next/navigation";
import { SubmitEvent, useState } from "react";
import {
  User,
  LockPassword,
  RightArrow,
  Email,
} from "@/src/components/ui/icons";
import { Input } from "@/src/components/ui";
import { signup } from "../../services/signup";
import { validateForm } from "@/src/helpers/signupForm";
import { login } from "../../services/login";

export function SignUpForm() {
  const router = useRouter();
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    passConfirm: "",
  });

  const onSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("pass") as string;
    const confirmedPassword = formData.get("pass-confirm") as string;

    const data = {
      username,
      email,
      password,
    };

    const { isValid, errs } = validateForm({ ...data, confirmedPassword });

    if (!isValid) {
      setErrors({ ...errs });
      return;
    }

    signup({
      data,
      onSuccess: () => {
        login({
          data: { email, password },
          onSuccess: () => router.push("/home"),
        });
      },
    });
  };

  return (
    <form className="w-full max-w-md mt-8" onSubmit={onSubmit}>
      <Input
        label="Full Name"
        id="name"
        type="text"
        name="username"
        placeholder="John Doe"
        onChange={() => {
          if (errors.name) {
            setErrors({ ...errors, name: "" });
          }
        }}
        error={errors.name}
        icon={
          <User
            variant="outlined"
            width={28}
            height={28}
            className="text-gray-400"
          />
        }
        className="mt-5"
      />
      <Input
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="user@example.com"
        onChange={() => {
          if (errors.email) {
            setErrors({ ...errors, email: "" });
          }
        }}
        error={errors.email}
        icon={<Email width={28} height={28} className="text-gray-400" />}
        className="mt-5"
      />
      <div className="mt-5">
        <Input
          label="Password"
          id="password"
          name="pass"
          type="password"
          placeholder="********"
          error={errors.password}
          onChange={() => {
            if (errors.password) {
              setErrors({ ...errors, password: "" });
            }
          }}
          icon={
            <LockPassword width={28} height={28} className="text-gray-400" />
          }
        />
        <p className="text-gray-400 text-[10px] font-semibold">
          Password should have at least 8 characters, contain at least 1
          lowercase letter, 1 uppercase letter, 1 number and 1 special character
        </p>
      </div>
      <Input
        label="Confirm Password"
        id="password-confirm"
        name="pass-confirm"
        type="password"
        placeholder="*******"
        onChange={() => {
          if (errors.passConfirm) {
            setErrors({ ...errors, passConfirm: "" });
          }
        }}
        error={errors.passConfirm}
        icon={<LockPassword width={28} height={28} className="text-gray-400" />}
        className="mt-5"
      />
      <button
        type="submit"
        className="bg-primary text-white font-semibold flex justify-center items-center gap-2 py-3 px-6 rounded-lg w-full max-w-md my-7 hover:cursor-pointer hover:bg-blue-600"
      >
        Create Account
        <RightArrow className="text-white" />
      </button>
    </form>
  );
}
