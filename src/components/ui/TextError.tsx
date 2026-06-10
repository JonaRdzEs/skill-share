interface Props {
  className?: string;
  error: string;
  size?: "xs" | "sm" | "base" | "lg"; 
}

export function TextError({ className = "", error, size = "sm" }: Props) {
  const textSize = `text-${size}`;
  return (
    <p className={`text-red-500 text-center my-4 ${textSize} ${className}`}>{error}</p>
  )
}