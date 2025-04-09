import React from "react";
import styles from "./Canvas.module.scss";
import clsx from "clsx";

interface CanvasProps {
  showFrame?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Canvas: React.FC<CanvasProps> = ({
  showFrame = true,
  children,
  style,
}) => {
  return (
    <div className={styles.canvas} style={style}>
      {showFrame && (
        <>
          <div className={clsx(styles.face, styles.faceFront)}></div>
          <div className={clsx(styles.face, styles.faceBack)}></div>
          <div className={clsx(styles.face, styles.faceTop)}></div>
          <div className={clsx(styles.face, styles.faceBottom)}></div>
          <div className={clsx(styles.face, styles.faceLeft)}></div>
          <div className={clsx(styles.face, styles.faceRight)}></div>
        </>
      )}
      {children}
    </div>
  );
};
