interface Props {
  id?: string;
  contentClassName?: string;
  className?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  contentClassName = "",
  className = "",
  title,
  description,
  children,
}: Props) {
  return (
    <section {...(id && { id })} className={className}>
      <div className={contentClassName}>
        <h2 className="font-bold text-3xl text-center text-primary-txt md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-secondary-txt text-lg text-center mb-12 mt-3 md:text-xl">{description}</p>
        )}
      {children}
      </div>
    </section>
  );
}
