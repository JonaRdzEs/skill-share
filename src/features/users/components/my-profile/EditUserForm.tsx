"use client";

import { type ChangeEvent, type SubmitEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, TextArea } from "@/src/components/ui";
import { EmailInput } from "@/src/features/auth/components/EmailInput";
import { User, MapPin } from "@/src/components/ui/icons";
import { useInput } from "@/src/hooks/useInput";
import { updateUserInfo } from "../../services/updateUserInfo";
import { TeacherSkillsSection } from "./teacher-section/TeacherSkillsSection";

interface Props {
  name: string;
  email: string;
  location: string | null;
  bio: string | null;
  role: "student" | "teacher";
}

export function EditUserForm({ name, email, location, bio, role }: Props) {
  const [isTeacher, setIsTeacher] = useState<boolean>(role === "teacher");
  const [loading, setLoading] = useState<boolean>(false);
  const [bioInputValue, setBioInputValue] = useState<string>(bio ?? "");
  const { value: nameInputValue, onChange: onNameChange } = useInput(name);
  const { value: locationInputValue, onChange: onLocationChange } = useInput(
    location ?? ""
  );

  const router = useRouter();

  const onToggleTeacher = () => setIsTeacher((prev) => !prev);
  const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setBioInputValue(e.target.value);

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const resp = await updateUserInfo({
      username: nameInputValue,
      location: locationInputValue || null,
      bio: bioInputValue || null,
      role: isTeacher ? "teacher" : "student",
    });
    setLoading(false);
    if (resp.error) {
      console.error(resp.error);
      return;
    }
    router.refresh();
  };

  return (
    <form className="mt-10 w-full max-w-xl mx-auto" onSubmit={handleSubmit}>
      <h3 className="uppercase text-secondary-txt font-semibold">
        Personal details
      </h3>
      <Input
        className="mt-3"
        label="Full Name"
        id="name"
        value={nameInputValue}
        onChange={onNameChange}
        leftIcon={
          <User
            variant="outlined"
            width={28}
            height={28}
            className="text-gray-400"
          />
        }
      />
      <EmailInput className="mt-3" value={email} readOnly disabled />
      <Input
        className="mt-3"
        label="Location"
        id="location"
        value={locationInputValue}
        onChange={onLocationChange}
        leftIcon={<MapPin width={28} height={28} className="text-gray-400" />}
      />
      <TextArea
        className="mt-3"
        label="Bio"
        id="bio"
        value={bioInputValue}
        onChange={handleBioChange}
      />
      <TeacherSkillsSection
        isTeacher={isTeacher}
        onToggleTeacher={onToggleTeacher}
      />
      <Button
        className="w-full max-w-none"
        variant="primary"
        type="submit"
        loading={loading}
        disabled={loading}
      >
        Save Changes
      </Button>
    </form>
  );
}
