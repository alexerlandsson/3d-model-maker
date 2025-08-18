"use client";

import React from "react";
import styles from "../EditorControls.module.scss";
import { TrashSimple } from "@phosphor-icons/react";

export const Model: React.FC = () => {
  return (
    <div className={styles.group} role="group" aria-label="Canvas controls">
      <button
        className={styles.button}
        title="Clear model"
        onClick={() => {}}
      >
        <span className="sr-only">Clear model</span>
        <TrashSimple weight="bold" className="icon" />
      </button>
    </div>
  );
};
