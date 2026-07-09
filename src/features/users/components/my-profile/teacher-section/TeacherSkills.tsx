"use client";

import { UserSkill } from "@/src/types/users";
import { AddSkills } from "./AddSkills";
//import { Skill } from "@/src/types/skills";

interface Props {
  skills: UserSkill[]
}

export function TeacherSkills({ skills }: Props) {


  return (
    <div>
      <h3 className="uppercase text-secondary-txt font-semibold">Skills</h3>
      <AddSkills />
    </div>
  );
}
