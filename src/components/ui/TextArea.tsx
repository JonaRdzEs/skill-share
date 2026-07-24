import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"textarea"> {
  label: string;
  id: string;
  error?: string;
}

export function TextArea({
  label,
  id,
  className = "",
  error = "",
  ...props
}: Props) {
  return (
    <div
      className={`flex flex-col justify-start items-start gap-2 ${className}`}
    >
      <label htmlFor={id} className="text-gray-600 font-semibold">
        {label}
      </label>
      <textarea
        id={id}
        {...props}
        className={`w-full h-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
          error && "ring ring-red-500"
        }`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
