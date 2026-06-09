"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, SubmitEvent, useState } from "react";
import { User, RightArrow } from "@/src/components/ui/icons";
import { Button, Input, TextError } from "@/src/components/ui";
import { EmailInput } from "../EmailInput";
import { PasswordInput } from "../PasswordInput";
import { signup } from "../../services/signup";
import { validateForm } from "@/src/helpers/signupForm";
import { login } from "../../services/login";
import { PATHS } from "@/src/constants";

export function SignUpForm() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [requestError, setRequestError] = useState<string>("");
  const [errors, setErrors] = useState<{ [k: string]: string }>({
    name: "",
    email: "",
    password: "",
    passConfirm: "",
  });

  const handleCleanError = (e: ChangeEvent<HTMLInputElement>) => {
    const inputId = e.target.id;

    if (errors[inputId]) setErrors({ ...errors, [inputId]: "" });
  };

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
    setLoading(true);
    const { error: signUpError } = await signup(data);
    setLoading(false);
    
    if(signUpError) {
      setRequestError(signUpError)
      return;
    }

    login({ email, password}).then(({ user }) =>  user?.id && router.push(PATHS.HOME()));

  };

  return (
    <form className="w-full max-w-md mt-8" onSubmit={onSubmit}>
      <Input
        label="Full Name"
        id="name"
        type="text"
        name="username"
        placeholder="John Doe"
        onChange={handleCleanError}
        error={errors.name}
        leftIcon={
          <User
            variant="outlined"
            width={28}
            height={28}
            className="text-gray-400"
          />
        }
        className="mt-5"
      />
      <EmailInput
        id="email"
        name="email"
        onChange={handleCleanError}
        error={errors.email}
        className="mt-5"
      />
      {requestError && (
        <TextError className="text-left" size="xs" error={requestError} />
      )}
      <div className="mt-5">
        <PasswordInput
          id="password"
          name="pass"
          error={errors.password}
          onChange={handleCleanError}
        />
        <p className="text-gray-400 text-[10px] font-semibold">
          Password should have at least 8 characters, contain at least 1
          lowercase letter, 1 uppercase letter, 1 number and 1 special character
        </p>
      </div>
      <PasswordInput
        label="Confirm Password"
        id="passConfirm"
        name="pass-confirm"
        onChange={handleCleanError}
        error={errors.passConfirm}
        className="mt-5"
      />
      <Button
        variant="primary"
        type="submit"
        loading={loading}
        disabled={loading}
      >
        Create Account
        <RightArrow className="text-white" />
      </Button>
    </form>
  );
}
