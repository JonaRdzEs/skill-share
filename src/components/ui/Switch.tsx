"use client";

interface Props {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "success" | "danger" | "warning";
  name?: string;
  required?: boolean;
}

export function Switch({
  checked,
  onChange,
  id,
  label,
  disabled = false,
  className = "",
  ariaLabel,
  description,
  size = "md",
  variant = "primary",
  name,
  required = false,
}: Props) {
  // Size variants
  const sizeClasses = {
    sm: "h-5 w-9",
    md: "h-6 w-11",
    lg: "h-7 w-14",
  };

  const thumbSizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const thumbTranslateClasses = {
    sm: checked ? "translate-x-4" : "translate-x-0.5",
    md: checked ? "translate-x-5" : "translate-x-0.5",
    lg: checked ? "translate-x-7" : "translate-x-0.5",
  };

  // Color variants
  const colorClasses = {
    primary: checked ? "bg-blue-600" : "bg-gray-300",
    success: checked ? "bg-green-600" : "bg-gray-300",
    danger: checked ? "bg-red-600" : "bg-gray-300",
    warning: checked ? "bg-yellow-500" : "bg-gray-300",
  };

  const handleToggle = () => onChange(!checked);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-center gap-3">
        {/* Switch Button */}
        <button
          role="switch"
          type="button"
          aria-checked={checked}
          aria-label={ariaLabel || label}
          aria-labelledby={label ? id : undefined}
          disabled={disabled}
          aria-required={required}
          id={id}
          onClick={handleToggle}
          className={`
              relative inline-flex transition-all duration-300 ease-in-out
              rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
              focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed
              ${sizeClasses[size]}
              ${colorClasses[variant]}
              ${!disabled ? "cursor-pointer hover:shadow-md" : ""}
            `}
        >
          <div
            className={`
                absolute top-0.5 left-0.5 inline-flex items-center justify-center
                rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out
                ${thumbSizeClasses[size]}
                ${thumbTranslateClasses[size]}
              `}
            aria-hidden="true"
          />
        </button>

        {label && (
          <label
            htmlFor={id}
            className={`text-sm font-medium ${
              disabled
                ? "cursor-not-allowed text-gray-400"
                : "cursor-pointer text-gray-700"
            }`}
          >
            {label}
          </label>
        )}
      </div>

      {description && (
        <p className="text-xs text-gray-500 ml-12">{description}</p>
      )}

      {name && (
        <input
          type="hidden"
          name={name}
          value={checked ? "on" : "off"}
          required={required}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
