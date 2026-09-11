import { type HTMLAttributes, type ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container({
  className = "",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-5xl px-4 md:px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
