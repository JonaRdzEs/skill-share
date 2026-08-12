"use client";

import { type SubmitEvent, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button, Input, TextArea } from "@/src/components/ui";
import { Link, StopWatch, XIcon } from "@/src/components/ui/icons";
import { createSession } from "../services/createSession";
import { UserSkill } from "@/src/types/users";
import { PATHS } from "@/src/constants";

interface Props {
  teacherSkills: Omit<UserSkill, "description">[];
}

export function ScheduleSessionForm({ teacherSkills }: Props) {
  const today = new Date();
  const todayHours =
    today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
  const todayMinutes =
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();

  const router = useRouter();
  const { id: teacherId } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [durationError, setDurationError] = useState<string>("");
  const [scheduledAt, setScheduledAt] = useState<string>("");
  const [skillIdInput, setSkillId] = useState<string>("");

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const duration = parseInt(formData.get("duration") as string);
    const location = formData.get("locationUrl") as string;
    const message = formData.get("message") as string;
    const skillId = formData.get("skillId") as string;

    if (isNaN(duration) || duration < 5) {
      setDurationError("A session should be at least 5 minutes long");
      return;
    }

    setLoading(true);
    const resp = await createSession({
      scheduledAt: new Date(scheduledAt),
      duration,
      location,
      teacherId,
      ...(skillId && { skillId: parseInt(skillId) }),
      ...(message.trim().length > 0 && { message }),
    });
    setLoading(false);

    if (resp.isOk) {
      router.push(PATHS.TEACHER_PROFILE(teacherId));
    }
  };

  return (
    <form className="mt-10 max-w-3xl mx-auto" onSubmit={handleSubmit}>
      <Input
        required
        className="my-4"
        label="Date and Time"
        id="datetime"
        value={scheduledAt}
        type="datetime-local"
        onChange={(e) => setScheduledAt(e.target.value)}
        min={`${
          today.toISOString().split("T")[0]
        }T${todayHours}:${todayMinutes}`}
      />
      <Input
        className="my-4"
        type="number"
        id="duration"
        name="duration"
        label="Duration in Minutes"
        leftIcon={
          <StopWatch width={28} height={28} className="text-gray-400" />
        }
        error={durationError}
        onChange={() => {
          if (durationError) setDurationError("");
        }}
      />
      <Input
        className="my-4"
        id="location-url"
        required
        label="Location URL"
        name="locationUrl"
        type="url"
        leftIcon={<Link width={28} height={28} className="text-gray-400" />}
      />
      {teacherSkills.length > 0 && (
        <>
          <span className="inline-block text-gray-600 font-semibold mb-2">
            Skill to Learn (optional)
          </span>
          <div className="relative">
            <select
              name="skillId"
              value={skillIdInput}
              onChange={(e) => setSkillId(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full"
            >
              <option value="">Select option</option>
              {teacherSkills.map((userSkill) => (
                <option key={userSkill.id} value={userSkill.skill.id}>
                  {userSkill.skill.name}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="absolute right-8 top-4"
              onClick={() => setSkillId("")}
            >
              <XIcon width={16} height={16} />
            </button>
          </div>
        </>
      )}
      <TextArea
        className="my-4"
        rows={4}
        id="message"
        name="message"
        label="Optional Message"
      />
      <Button
        className="mt-10 max-w-none"
        variant="primary"
        type="submit"
        loading={loading}
        disabled={loading}
      >
        Schedule
      </Button>
    </form>
  );
}
