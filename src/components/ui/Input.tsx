import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"input"> {
  label: string;
  id: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string
}

export function Input({ label, id, className = "", error = "", leftIcon, rightIcon, ...props }: Props) {
  return (
    <div className={`flex flex-col justify-start items-start gap-2 ${className}`}>
      <label htmlFor={id} className="text-gray-600 font-semibold">
        {label}
      </label>
      <div className="border border-gray-300 rounded-lg relative w-full h-full">
        {leftIcon && (
          <div className="absolute left-3 top-1/6">{leftIcon}</div>
        )}
        <input
          id={id}
          {...props}
          className={`w-full h-full pl-12 pr-5 py-3 rounded-lg disabled:bg-background disabled:text-secondary-txt focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${error && "ring ring-red-500"}`}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/6">{rightIcon}</div>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
