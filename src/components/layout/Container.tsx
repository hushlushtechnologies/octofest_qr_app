import { type HTMLAttributes, type ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container({
  className = "",
  children,
  style,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-5xl px-4 md:px-8 ${className}`}
      style={{
        paddingLeft: "max(1rem, env(safe-area-inset-left))",
        paddingRight: "max(1rem, env(safe-area-inset-right))",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
