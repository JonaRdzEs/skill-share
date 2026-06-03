"use client";

import { type ComponentProps, useState } from "react";
import { Input } from "@/src/components/ui";
import { LockPassword, Eye, SlashEye } from "@/src/components/ui/icons";

interface Props
  extends Omit<
    ComponentProps<typeof Input>,
    "label" | "leftIcon" | "type" | "placeholder" | "rightIcon"
  > {
  label?: string;
  id: string;
  placeholder?: string;
}

export function PasswordInput({
  label = "Password",
  id,
  placeholder = "*********",
  ...props
}: Props) {
  const [showedPassword, setShowedPassword] = useState<boolean>(false);

  const onToggleVisibility = () => setShowedPassword((prevState) => !prevState);

  return (
    <Input
      label={label}
      type={showedPassword ? "text" : "password"}
      id={id}
      placeholder={placeholder}
      leftIcon={
        <LockPassword width={28} height={28} className="text-gray-400" />
      }
      rightIcon={
        <button
          type="button"
          aria-label={`${showedPassword ? "hide" : "show"} password`}
          onClick={onToggleVisibility}
        >
          {showedPassword ? (
            <SlashEye width={28} height={28} className="text-gray-400" />
          ) : (
            <Eye width={28} height={28} className="text-gray-400" />
          )}
        </button>
      }
      className="mt-3"
      {...props}
    />
  );
}
