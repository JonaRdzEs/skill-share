import NextLink from "next/link";
import { ComponentProps } from "react";

interface Props extends ComponentProps<typeof NextLink> {
  variant?: "primary" | "secondary" | "unstyled";
}

export function Link({ className = "", variant = "unstyled", ...props }: Props) {
  
  if (variant === "unstyled") {
    return <NextLink {...props } {...(className && { className })} />;
  }

  if(variant === "secondary") {
    return <NextLink className={`text-secondary-txt hover:text-primary-txt ${className}`} {...props} />
  }

  return (
    <NextLink
      className={`text-primary hover:text-blue-600 ${className}`}
      {...props}
    />
  );
}
