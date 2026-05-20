"use client";

import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"input"> {
  label: string
  id: string;
}

export function EmailInput({ label, id, ...props}: Props) {

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
}