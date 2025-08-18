import React from "react";
import styles from "./Cuboid.module.scss";
import clsx from "clsx";

export interface CuboidProps {
  width?: number;
  height?: number;
  depth?: number;
  posX?: number;
  posY?: number;
  posZ?: number;
  color?: string;
  zIndex?: number;
  isActive?: boolean;
  onClick?: () => void;
}

export const Cuboid: React.FC<CuboidProps> = ({
  width,
  height,
  depth,
  posX,
  posY,
  posZ,
  color,
  zIndex,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={clsx(styles.cuboid, {
        [styles.cuboidActive]: isActive,
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
          "--z-index": zIndex,
        } as React.CSSProperties
      }
      data-cuboid="true"
      role={onClick ? "button" : undefined}
      aria-label={onClick ? "Edit cuboid" : undefined}
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
