import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> {
  variant: "primary" | "secondary";
  icon?: React.ReactNode;
}

export function Button({ variant, icon, className = "", children, ...props }: Props) {
  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white font-semibold hover:bg-blue-600"
      : "text-primary bg-gray-50";

  return (
    <button
      className={`flex justify-center items-center gap-2 py-3 px-6 rounded-lg w-full max-w-md my-7 hover:cursor-pointer ${variantStyles} ${className}`}
      {...props}
    >
      {children} 
      {icon}
    </button>
  );
}
