import React from "react";
import styles from "./Rect.module.scss";

interface RectProps {
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
      <div className={`${styles.face} ${styles.front}`}></div>
      <div className={`${styles.face} ${styles.back}`}></div>
      <div className={`${styles.face} ${styles.top}`}></div>
      <div className={`${styles.face} ${styles.bottom}`}></div>
      <div className={`${styles.face} ${styles.left}`}></div>
      <div className={`${styles.face} ${styles.right}`}></div>
    </div>
  );
};
