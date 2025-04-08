"use client";

import { InputRotation } from "@/components/InputRotation";
import React, { useCallback, useContext } from "react";
import styles from "./Rotate.module.scss";
import { Reset } from "./Reset";
import { RotationContext } from "@/providers/RotationProvider";

export const Rotation: React.FC = () => {
  const { rotation, setRotation } = useContext(RotationContext);
  
  // Handle X-axis rotation
  const handleXRotation = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setRotation(prev => ({ ...prev, x: value }));
  }, [setRotation]);
  
  // Handle Y-axis rotation
  const handleYRotation = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setRotation(prev => ({ ...prev, y: value }));
  }, [setRotation]);

  return (
    <>
      <div className={`${styles.rotate} ${styles.horizontal}`}>
        <label className={styles.label} htmlFor="rotation-slider-x">
          Rotate horizontally
        </label>
        <InputRotation
          id="rotation-slider-x"
          orientation="horizontal"
          onChange={handleXRotation}
          value={rotation.x}
          min={-360}
          max={360}
        />
      </div>
      <div className={`${styles.rotate} ${styles.vertical}`}>
        <label className={styles.label} htmlFor="rotation-slider-y">
          Rotate vertically
        </label>
        <InputRotation
          id="rotation-slider-y"
          orientation="vertical"
          onChange={handleYRotation}
          value={rotation.y}
          min={-360}
          max={360}
        />
      </div>
      <Reset />
    </>
  );
};
