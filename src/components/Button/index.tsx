import clsx from "clsx";
import React from "react";
import styles from "./Button.module.scss";

export type ButtonVariant = "primary" | "critical";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: ButtonVariant;
  children?: React.ReactNode;
  ariaLabel?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  ariaLabel,
  fullWidth,
  ...props
}) => (
  <button
    type="button"
    className={clsx(styles.button, {
      [styles.buttonPrimary]: variant === "primary",
      [styles.buttonCritical]: variant === "critical",
      [styles.buttonFullWidth]: fullWidth,
    })}
    aria-label={ariaLabel}
    {...props}
  >
    {children}
  </button>
);
