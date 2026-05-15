interface Props {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: Props) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4.5 ${className ?? ""}`}>
      {children}
    </div>
  )
}