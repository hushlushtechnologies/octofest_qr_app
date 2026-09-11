import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "octo-button-primary",

  secondary: "octo-button-secondary",

  ghost: "octo-button-ghost",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",

  md: "h-11 px-5 text-button",

  lg: "h-13 px-7 text-button",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  type,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type ?? "button"}
      className={`
        octo-button
        group
        inline-flex
        items-center
        justify-center
        gap-2
        font-semibold

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-accent-cyan
        focus-visible:ring-offset-2
        focus-visible:ring-offset-background

        disabled:pointer-events-none
        disabled:opacity-50

        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
