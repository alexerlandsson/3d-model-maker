import React from "react";
import styles from "./InputRange.module.scss";
import clsx from "clsx";

export type InputRotationOrientation = "vertical" | "horizontal";

interface InputRotationProps extends React.InputHTMLAttributes<HTMLInputElement> {
  orientation?: InputRotationOrientation;
}

export const InputRotation: React.FC<InputRotationProps> = ({
  orientation = "horizontal",
  ...props
}) => {
  return (
    <input
      type="range"
      className={clsx(styles.input, {
        [styles.inputVertical]: orientation === "vertical",
      })}
      {...props}
    />
  );
};
