"use client";

import React from "react";
import styles from "../EditorControls.module.scss";
import { useCanvas } from "@/providers/CanvasProvider";
import clsx from "clsx";

export const Canvas: React.FC = () => {
  const { toggleFrame, showFrame } = useCanvas();

  return (
    <div className={styles.group} role="group" aria-label="Canvas controls">
      <button
        className={clsx(styles.button, { [styles.buttonCanvasOutlineActive]: showFrame })}
        title="Toggle canvas outline"
        onClick={toggleFrame}
      >
        <span className="sr-only">Toggle canvas outline</span>
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          aria-hidden="true"
        >
          <path d="M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z" />
        </svg>
      </button>
    </div>
  );
};
