"use client";

import React from "react";
import styles from "../EditorControls.module.scss";
import { useCanvas } from "@/providers/CanvasProvider";
import clsx from "clsx";
import { Cube, GearSix } from "@phosphor-icons/react";

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
        <Cube weight="bold" className="icon" />
      </button>
      <button
        className={styles.button}
        title="Canvas settings"
        onClick={() => {}}
      >
        <span className="sr-only">Canvas settings</span>
        <GearSix weight="bold" className="icon" />
      </button>
    </div>
  );
};
