"use client";

import { useState } from "react";
import { AutoComplete } from "@/src/components/ui";
import { debounce } from "@/src/utils";
import { Plus } from "@/src/components/ui/icons";
import type { Skill } from "@/src/types/skills";
import { searchSkills } from "@/src/features/skills/services/searchSkills";
import { createSkills } from "@/src/features/skills/services/createSkills";

interface Props {
  onAddSkill?: (item: Skill) => void;
}

export function AddSkills({ onAddSkill = () => {} }: Props) {
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);

  const handleChange = async (inputValue: string) => {
    if (inputValue.trim().length === 0) return;

    const resp = await searchSkills(inputValue);
    setFilteredSkills(resp.isOk ? resp.data.skills : []);
  };

  const handleSubmit = async (value: string) => {
    if (value.trim().length === 0) return;

    const resp = await searchSkills(value);

    if (resp.isOk && resp.data.skills.length === 0) {
      const skillResp = await createSkills([value]);
      if (!skillResp.isOk) return;
      onAddSkill(skillResp.data.skills[0]);
    } else if(resp.isOk) {
      onAddSkill(resp.data.skills[0]);
    }
  };

  return (
    <div className="mt-3 flex justify-stretch items-center gap-2 [&_div:first-of-type]:grow">
      <AutoComplete
        data={filteredSkills}
        onInputChange={debounce(handleChange, 600)}
        onSubmit={handleSubmit}
        renderListItem={(item) => item.name}
        placeholder="Add your skill"
        onSelect={onAddSkill}
      />
      <button
        type="button"
        className="flex justify-center items-center gap-2 h-8 text-sm w-full text-primary sm:max-w-46 bg-gray-50 hover:cursor-pointer hover:bg-gray-200 rounded-sm py-1 px-2"
      >
        Add skill
        <Plus width={16} height={16} />
      </button>
    </div>
  );
}
