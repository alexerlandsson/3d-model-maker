"use client";

import React from "react";
import styles from "../EditorControls.module.scss";
import { Plus } from "@phosphor-icons/react";
import { useModel } from "@/providers/ModelProvider";

export const Rect: React.FC = () => {
  const { addRectangle, isMaxRectangles } = useModel();

  return (
    <div className={styles.group} role="group" aria-label="Canvas controls">
      <button
        className={styles.button}
        title="Add cuboid"
        onClick={addRectangle}
        disabled={isMaxRectangles}
      >
        <span className="sr-only">Add cuboid</span>
        <Plus weight="bold" className="icon" />
      </button>
    </div>
  );
};
