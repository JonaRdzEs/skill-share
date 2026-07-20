"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Input } from "@/src/components/ui";
import { Search } from "@/src/components/ui/icons";
import { useInput } from "@/src/hooks/useInput";
import { ChangeEvent } from "react";
import { debounce } from "@/src/utils";

export function SearchTeacherInput() {
  const { onChange } = useInput("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    const { value } = e.target;
    const params = new URLSearchParams(searchParams);

    if (value.trim()) {
      params.set("name", value);
    } else {
      params.delete("name");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Input
      label=""
      id="search-teacher"
      placeholder="Search for a teacher"
      defaultValue={searchParams.get("name")?.toString() ?? ""}
      onChange={debounce(handleSearch, 300)}
      leftIcon={<Search width={28} height={28} className="text-gray-400" />}
    />
  );
}
