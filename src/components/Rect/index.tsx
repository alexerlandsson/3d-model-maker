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
}

export const Rect: React.FC<RectProps> = ({
  width,
  height,
  depth,
  posX,
  posY,
  posZ,
  color,
}) => {
  return (
    <div
      className={styles.rect}
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
