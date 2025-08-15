"use client";

import React from "react";
import styles from "../EditorControls.module.scss";
import { useCanvas } from "@/providers/CanvasProvider";
import clsx from "clsx";
import { Cube, SelectionPlus } from "@phosphor-icons/react";
import { useModel } from "@/providers/ModelProvider";

export const Canvas: React.FC = () => {
  const { toggleFrame, showFrame } = useCanvas();
  const { addRectangle, isMaxRectangles } = useModel();

  return (
    <div className={styles.group} role="group" aria-label="Canvas controls">
      <button
        className={styles.button}
        title="Add rectangle"
        onClick={addRectangle}
        disabled={isMaxRectangles}
      >
        <span className="sr-only">Add rectangle</span>
        <SelectionPlus weight="bold" className="icon" />
      </button>
      <button
        className={clsx(styles.button, { [styles.buttonCanvasOutlineActive]: showFrame })}
        title="Toggle canvas outline"
        onClick={toggleFrame}
      >
        <span className="sr-only">Toggle canvas outline</span>
        <Cube weight="bold" className="icon" />
      </button>
    </div>
  );
};
