"use client";

import { Input } from "@/src/components/ui";
import { Email } from "@/src/components/ui/icons";
import { ComponentProps } from "react";

interface Props
  extends Omit<ComponentProps<typeof Input>, "label" | "leftIcon" | "type" | "placeholder" | "id"> {
  label?: string;
  id?: string;
  placeholder?: string;
}

export function EmailInput({
  label = "Email",
  id = "email",
  placeholder = "email@example.com",
  ...props
}: Props) {
  return (
    <Input
      label={label}
      id={id}
      type="email"
      placeholder={placeholder}
      leftIcon={<Email width={28} height={28} className="text-gray-400" />}
      {...props}
    />
  );
}
