import { SignUpData } from "../types/auth";
import { isEmailValid, isPasswordValid } from "../utils";

const isNameValid = (name: string) => !!name;

const arePasswordsEqual = (pass: string, passConfirm: string) =>
  pass === passConfirm;

export const validateForm = (data: SignUpData) => {
  const { username, email, password, confirmedPassword = "" } = data;
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
