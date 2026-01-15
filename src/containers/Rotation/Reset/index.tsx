"use client";

import React, { useContext } from "react";
import { RotationContext } from "@/providers/RotationProvider";
import styles from "./Reset.module.scss";
import { ArrowClockwise } from "@phosphor-icons/react";
import { Tooltip } from "@/components/Tooltip";

export const Reset: React.FC = () => {
  const { resetRotation, isDefaultRotation } = useContext(RotationContext);

  return (
    <div className={styles.reset}>
      <Tooltip label="Reset rotation" side="top">
        <button
          className={styles.button}
          onClick={resetRotation}
          disabled={isDefaultRotation}
          id="rotation-reset-btn"
        >
          <span className="sr-only">Reset rotation</span>
          <ArrowClockwise weight="bold" className="icon" aria-hidden="true" />
        </button>
      </Tooltip>
    </div>
  );
};
