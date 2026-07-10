"use client";

import {
  type ChangeEvent,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useId,
  useState,
} from "react";

interface Props<T> {
  className?: string;
  id?: string;
  placeholder?: string;
  ariaLabel?: string;
  data: T[];
  onInputChange?: (value: string) => void;
  onSubmit: (value: string) => void;
  renderListItem: (item: T) => ReactNode;
  onSelect?: (value: T) => void;
}

export function AutoComplete<T>({
  className = "",
  id,
  data,
  onSubmit,
  onInputChange = () => {},
  onSelect = () => {},
  renderListItem,
  placeholder = "Search",
  ariaLabel,
}: Props<T>) {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const inputId = useId();
  const resolvedId = id ?? inputId;
  const listboxId = `${resolvedId}-listbox`;
  const activeOptionId =
    activeIndex >= 0 ? `${resolvedId}-option-${activeIndex}` : undefined;

  const closeList = () => {
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const isInputValid = () => inputValue.trim().length > 0;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    onInputChange(value);
    setActiveIndex(-1);
    setIsOpen(value.trim().length > 0);
  };

  const handleFocus = () => {
    if (inputValue.length > 0 && data.length > 0) setIsOpen(true);
  };

  const cleanInput = () => {
    setInputValue("");
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleClickOption = (item: T) => {
    onSelect(item);
    cleanInput();
  };

  const handleSubmit = () => {
    // user selected an option
    if (activeIndex >= 0) {
      onSelect(data[activeIndex]);
      cleanInput();
      return;
    }

    if (isInputValid()) onSubmit(inputValue);
    cleanInput();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      closeList();
      return;
    }

    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((current) => (current + 1) % data.length);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((current) =>
        current <= 0 ? data.length - 1 : current - 1
      );
    }
  };

  const handleOptionMouseDown = (e: MouseEvent<HTMLLIElement>) =>
    e.preventDefault();

  return (
    <div className={`w-full max-w-sm relative`}>
      <input
        id={resolvedId}
        type="text"
        role="combobox"
        aria-label={ariaLabel ?? placeholder}
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls={isOpen ? listboxId : undefined}
        aria-activedescendant={isOpen ? activeOptionId : undefined}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={closeList}
        placeholder={placeholder}
        className={`border border-gray-300 w-full h-8 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm ${className}`}
      />
      {isOpen && data.length > 0 && (
        <ul
          id={listboxId}
          role="listbox"
          className="w-full max-h-60 overflow-y-auto z-10 shadow-sm top-8.5 rounded-sm absolute bg-white"
        >
          {data.map((item, index) => (
            <li
              id={`${resolvedId}-option-${index}`}
              key={`${resolvedId}-${index}`}
              role="option"
              aria-selected={index === activeIndex}
              onMouseDown={handleOptionMouseDown}
              onClick={() => handleClickOption(item)}
              className={`w-full p-2 text-left hover:cursor-pointer ${
                index === activeIndex ? "bg-gray-100" : "hover:bg-gray-200"
              }`}
            >
              {renderListItem(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
