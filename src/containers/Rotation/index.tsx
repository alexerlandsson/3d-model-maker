"use client";

import { InputRotation } from "@/components/InputRotation";
import React from "react";
import styles from "./Rotate.module.scss";
import { Reset } from "./Reset";

export const Rotation: React.FC = () => {
  return (
    <>
      <div className={`${styles.rotate} ${styles.horizontal}`}>
        <label className={styles.label} htmlFor="rotation-slider-x">
          Rotate horizontally
        </label>
        <InputRotation
          id="rotation-slider-x"
          orientation="horizontal"
          onChange={() => {}}
        />
      </div>
      <div className={`${styles.rotate} ${styles.vertical}`}>
        <label className={styles.label} htmlFor="rotation-slider-y">
          Rotate vertically
        </label>
        <InputRotation
          id="rotation-slider-y"
          orientation="vertical"
          onChange={() => {}}
        />
      </div>
      <Reset />
    </>
  );
};
