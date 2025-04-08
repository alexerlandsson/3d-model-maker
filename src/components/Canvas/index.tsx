import React from "react";
import styles from "./Canvas.module.scss";

interface CanvasProps {
  showFrame?: boolean;
  children: React.ReactNode;
}

export const Canvas: React.FC<CanvasProps> = ({
  showFrame = true,
  children,
}) => {
  return (
    <div className={styles.canvas}>
      {showFrame && (
        <>
          <div className={`${styles.face} ${styles.faceFront}`}></div>
          <div className={`${styles.face} ${styles.faceBack}`}></div>
          <div className={`${styles.face} ${styles.faceTop}`}></div>
          <div className={`${styles.face} ${styles.faceBottom}`}></div>
          <div className={`${styles.face} ${styles.faceLeft}`}></div>
          <div className={`${styles.face} ${styles.faceRight}`}></div>
        </>
      )}
      {children}
    </div>
  );
};
