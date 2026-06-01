"use client";

import { ChangeEvent, useState } from "react";

export function useInput() {
  const [value, setValue] = useState<string>();

  return {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    clean: () => setValue(""),
  }
};