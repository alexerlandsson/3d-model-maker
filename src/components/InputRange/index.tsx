import React from "react";
import styles from "./InputRange.module.scss";
import clsx from "clsx";

export type InputRangeOrientation = "vertical" | "horizontal";

interface InputRangeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  orientation?: InputRangeOrientation;
}

export const InputRange: React.FC<InputRangeProps> = ({
  orientation = "horizontal",
  ...props
}) => {
  return (
    <input
      type="range"
      className={clsx(styles.input, {
        [styles.horizontal]: orientation === "horizontal",
        [styles.vertical]: orientation === "vertical",
      })}
      {...props}
    />
  );
};
