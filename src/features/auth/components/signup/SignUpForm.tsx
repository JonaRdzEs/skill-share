"use client";

import { SubmitEvent, useState } from "react";
import {
  User,
  LockPassword,
  RightArrow,
  Email,
} from "@/src/components/ui/icons";
import { Input } from "@/src/components/ui";

interface SignUpData {
  username: string;
  email: string;
  password: string;
  confirmedPassword: string;
}

export function SignUpForm() {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    passConfirm: "",
  });

  const isNameValid = (name: string) => !!name;
  const isEmailValid = (email: string) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
  const isPasswordValid = (pass: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(pass);
  const arePasswordsEqual = (pass: string, passConfirm: string) =>
    pass === passConfirm;

  const validateForm = (data: SignUpData) => {
    const { username, email, password, confirmedPassword } = data;
    let nameErr = "",
      emailErr = "",
      passErr = "",
      passConfirmErr = "";

    if (!isNameValid(username)) nameErr = "Provide a valid name";
    if (!isEmailValid(email)) emailErr = "Provide a valid email";
    if (!isPasswordValid(password))
      passErr = "Password must match the following requirements:";
    if (!arePasswordsEqual(password, confirmedPassword))
      passConfirmErr = "Passwords must match";

    return {
      isValid: !nameErr && !emailErr && !passErr && !passConfirmErr,
      errs: {
        name: nameErr,
        email: emailErr,
        password: passErr,
        passConfirm: passConfirmErr,
      },
    };
  };

  const onSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const username = data.get("username") as string;
    const email = data.get("email") as string;
    const password = data.get("pass") as string;
    const confirmedPassword = data.get("pass-confirm") as string;

    const { isValid, errs } = validateForm({
      username,
      email,
      password,
      confirmedPassword,
    });
    console.log({ errs });
    if (!isValid) {
      setErrors({ ...errs });
      return;
    }

    console.log("sending data", {
      username,
      email,
      password,
      confirmedPassword,
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
          //value={password}
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
        <p className="text-secondary-txt text-xs font-semibold">
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
        //value={passConfirm}
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
