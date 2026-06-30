"use client";

import { type ChangeEvent, type SubmitEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, TextArea, /* Switch */ } from "@/src/components/ui";
import { EmailInput } from "@/src/features/auth/components/EmailInput";
import { User, MapPin, /* AcademicCap */ } from "@/src/components/ui/icons";
import { useInput } from "@/src/hooks/useInput";
import { updateUserInfo } from "../../services/updateUserInfo";
//import { TeacherSkills } from "./TeacherSkills";

interface Props {
  name: string;
  email: string;
  location: string | null;
  bio: string | null;
}

export function EditUserForm({ name, email, location, bio }: Props) {
  //const [isTeacher, setIsTeacher] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [bioInputValue, setBioInputValue] = useState<string>(bio ?? "");
  const { value: nameInputValue, onChange: onNameChange } = useInput(name);
  const { value: locationInputValue, onChange: onLocationChange } = useInput(
    location ?? ""
  );

  const router = useRouter();

  //const onToggleTeacher = () => setIsTeacher((prev) => !prev);
  const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setBioInputValue(e.target.value);

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const resp = await updateUserInfo({
      username: nameInputValue,
      ...(locationInputValue && { location: locationInputValue }),
      ...(bioInputValue && { bio: bioInputValue }),
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

      {/* <div className="bg-gray-200 rounded-sm my-5 p-3 flex justify-start items-center gap-3">
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
      </div> */}
      {/* {isTeacher && <TeacherSkills />} */}
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
