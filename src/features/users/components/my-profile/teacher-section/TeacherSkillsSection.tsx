import { Switch } from "@/src/components/ui";
import { AcademicCap } from "@/src/components/ui/icons";
import { TeacherSkills } from "./TeacherSkills";

interface Props {
  isTeacher: boolean;
  onToggleTeacher: () => void;
}

export function TeacherSkillsSection({ isTeacher, onToggleTeacher }: Props) {
  return (
    <>
      <div className="bg-gray-200 rounded-sm my-5 p-3 flex justify-start items-center gap-3">
        <AcademicCap />
        <p className="text-primary-txt font-semibold text-sm grow">
          Become a Teacher
        </p>
        <Switch
          id="become-teacher"
          ariaLabel="Toggle teacher mode"
          variant="success"
          checked={isTeacher}
          onChange={onToggleTeacher}
        />
      </div>
      {isTeacher && <TeacherSkills />}
    </>
  );
}
