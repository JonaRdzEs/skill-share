interface Props {
  icon?: React.ReactNode;
  title: string;
}

export function CategoryChip({ icon, title}: Props) {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-xs">
      {icon}
      <span className="text-gray-600 font-semibold">
        {title}
      </span>
    </div>
  );
}
