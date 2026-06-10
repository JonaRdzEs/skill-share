import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> {
  variant: "primary" | "secondary";
  loading?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  variant,
  icon,
  loading = false,
  className = "",
  children,
  ...props
}: Props) {
  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white font-semibold hover:bg-blue-600"
      : "text-primary bg-gray-50";

  return (
    <button
      className={`flex justify-center items-center gap-2 py-3 px-6 rounded-lg w-full max-w-md my-7 hover:cursor-pointer disabled:bg-gray-300 disabled:cursor-auto disabled:text-white ${variantStyles} ${className}`}
      {...props}
    >
      {loading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-spin"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3a9 9 0 1 0 9 9" />
        </svg>
      ) : (
        <>
          {children}
          {icon}
        </>
      )}
    </button>
  );
}
