"use client";

import React, { useContext } from "react";
import styles from "./Canvas.module.scss";
import { RotationContext } from "@/providers/RotationProvider";

interface CanvasProps {
  showFrame?: boolean;
  children: React.ReactNode;
}

export const Canvas: React.FC<CanvasProps> = ({
  showFrame = true,
  children,
}) => {
  const { rotation } = useContext(RotationContext);
  
  // Apply rotation transform based on the values from the rotation sliders
  const canvasStyle = {
    transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`
  };

  return (
    <div className={styles.canvas} style={canvasStyle}>
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
