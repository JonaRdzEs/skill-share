"use client";

import { useState } from "react";
import { XIcon } from "@/src/components/ui/icons";
import { UserSkill } from "@/src/types/users";
import { AddSkills } from "./AddSkills";
import { createUserSkills } from "../../../services/createUserSkills";
import { deleteUserSkills } from "../../../services/deleteUserSkills";
import { SkillBadge } from "@/src/features/skills/components/SkillBadge";
import { Skill } from "@/src/types/skills";

interface Props {
  skills: UserSkill[];
}

export function TeacherSkills({ skills }: Props) {
  const [userSkills, setUserSkills] = useState<UserSkill[]>(skills);

  const onAddSkill = async (skill: Skill) => {
    const existingSkill = userSkills.find(
      (userSkill) => userSkill.skill.id === skill.id
    );
    if (existingSkill) return;

    const resp = await createUserSkills([skill.id]);

    if (resp.error) {
      console.error(resp.error);
      return;
    }

    const { userSkillId, ...rest } = resp.skills![0];
    setUserSkills((prevSkills) => [
      ...prevSkills,
      {
        id: userSkillId,
        ...rest,
        skill,
      },
    ]);
  };

  const handleDeleteSkill = async (userSkillId: number) => {
    const resp = await deleteUserSkills([userSkillId]);
    if (resp?.error) return;
    const updatedSkills = userSkills.filter((userSkill) => userSkill.id !== userSkillId);
    setUserSkills(updatedSkills);
  };

  return (
    <div>
      <h3 className="uppercase text-secondary-txt font-semibold">Skills</h3>
      <p className="text-secondary-txt text-xs">
        Show students what you&apos;re great at by adding your areas of
        expertise. It helps them understand what they can learn from you.
      </p>
      {userSkills.length > 0 && (
        <div className="my-4 flex justify-start items-center gap-2 flex-wrap">
          {userSkills.map((userSkill) => (
            <SkillBadge
              key={userSkill.id}
              className="flex justify-center items-center gap-2 bg-primary/70 text-white rounded-2xl text-sm w-auto py-1 px-3"
            >
              {userSkill.skill.name}
              <button aria-label={`Delete ${userSkill.skill.name} skill`} type="button" onClick={() => handleDeleteSkill(userSkill.id)}>
                <XIcon
                  width={14}
                  height={14}
                  className="transition-colors hover:stroke-red-400 hover:cursor-pointer"
                />
              </button>
            </SkillBadge>
          ))}
        </div>
      )}
      <AddSkills onAddSkill={onAddSkill} />
    </div>
  );
}
