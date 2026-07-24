import Image from "next/image";
import { User } from "./icons";

interface Props {
  className?: string;
  src: string | null;
  size?: "sm" | "md" | "lg" | "xl";
  alt?: "";
}

export function Avatar({ className = "", src, size = "sm", alt }: Props) {
  
  const sizeClasses = {
    sm: "w-9 h-9 min-w-9 min-h-9",
    md: "w-12 h-12 min-w-12 min-h-12",
    lg: "w-18 h-18 min-w-18 min-h-18",
    xl: "w-24 h-24 min-w-24 min-h-24",
  };

  const iconSizeInPixels = {
    sm: 18,
    md: 24,
    lg: 34,
    xl: 46
  }

  if (!src) {
    return (
      <div className={`${sizeClasses[size]} rounded-full bg-gray-200 flex justify-center items-center ${className}`}>
        <User variant="filled" width={iconSizeInPixels[size]} height={iconSizeInPixels[size]} />
      </div>
    );
  }

  return <Image className={`object-cover ${sizeClasses[size]} ${className}`} src={src} alt={alt ?? "avatar"} />;
}
