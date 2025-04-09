import React from "react";
import styles from "./Rect.module.scss";
import clsx from "clsx";

export interface RectProps {
  width?: number;
  height?: number;
  depth?: number;
  posX?: number;
  posY?: number;
  posZ?: number;
  color?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const Rect: React.FC<RectProps> = ({
  width,
  height,
  depth,
  posX,
  posY,
  posZ,
  color,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={clsx(styles.rect, {
        [styles.rectActive]: isActive,
      })}
      style={
        {
          "--w": width,
          "--h": height,
          "--d": depth,
          "--x": posX,
          "--y": posY,
          "--z": posZ,
          "--c": color,
        } as React.CSSProperties
      }
      role={onClick ? "button" : undefined}
      aria-label={onClick ? "Edit rectangle" : undefined}
      onClick={onClick}
    >
      <div className={clsx(styles.face, styles.faceFront)}></div>
      <div className={clsx(styles.face, styles.faceBack)}></div>
      <div className={clsx(styles.face, styles.faceTop)}></div>
      <div className={clsx(styles.face, styles.faceBottom)}></div>
      <div className={clsx(styles.face, styles.faceLeft)}></div>
      <div className={clsx(styles.face, styles.faceRight)}></div>
    </div>
  );
};
