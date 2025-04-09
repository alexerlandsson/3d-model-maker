"use client";

import React from "react";
import styles from "./Slider.module.scss";
import {
  InputRotation,
  InputRotationOrientation,
} from "@/components/InputRotation";
import clsx from "clsx";

interface SliderProps {
  label: string;
  id: string;
  orientation: InputRotationOrientation;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Slider: React.FC<SliderProps> = ({
  label,
  value,
  id,
  orientation,
  onChange,
}) => {
  // Degrees of rotation in each direction
  const rotation = 360;

  return (
    <div
      role="group"
      aria-labelledby={`${id}-label`}
      className={clsx(styles.slider, {
        [styles.sliderHorizontal]: orientation === "horizontal",
        [styles.sliderVertical]: orientation === "vertical",
      })}
    >
      <label className="sr-only" id={`${id}-label`} htmlFor={id}>
        {label}
      </label>
      <InputRotation
        id={id}
        orientation={orientation}
        onChange={onChange}
        value={value}
        min={rotation * -1}
        max={rotation}
      />
    </div>
  );
};
