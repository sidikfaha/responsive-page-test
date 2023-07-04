import React, { ReactNode } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={"flex gap-1 py-2 px-5 rounded-lg font-bold transition-all " + className}
    >
      {children}
    </button>
  );
}
