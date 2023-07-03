import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export function FormInput({ label, required = false, ...props }: Props) {
  return (
    <label className="flex flex-col gap-2">
      <span>
        {label} {required ? "*" : ""}
      </span>
      <input
        {...props}
        required={required}
        className="transition-all rounded-md border-0 p-3 ring-1 ring-inset ring-gray-300 focus:ring-blue-600"
      />
    </label>
  );
}
