"use client";

import React from "react";
import styles from "../EditorControls.module.scss";
import { useCanvas } from "@/providers/CanvasProvider";
import clsx from "clsx";
import { Cube, GearSix, ListBullets } from "@phosphor-icons/react";
import { Tooltip } from "@/components/Tooltip";

export const Canvas: React.FC = () => {
  const { toggleFrame, showFrame, toggleCuboidList, showCuboidList } = useCanvas();

  return (
    <div className={styles.group} role="group" aria-label="Canvas controls">
      <Tooltip label="Toggle canvas outline" side="left">
        <button
          className={clsx(styles.button, {
            [styles.buttonActive]: showFrame,
          })}
          onClick={toggleFrame}
        >
          <span className="sr-only">Toggle canvas outline</span>
          <Cube weight="bold" className="icon" />
        </button>
      </Tooltip>
      <Tooltip label="Toggle list of cuboids" side="left">
        <button
          className={clsx(styles.button, {
            [styles.buttonActive]: showCuboidList,
          })}
          onClick={toggleCuboidList}
        >
          <span className="sr-only">Toggle list of cuboids</span>
          <ListBullets weight="bold" className="icon" />
        </button>
      </Tooltip>
      {false && (
        <Tooltip label="Canvas settings" side="left">
          <button
            className={styles.button}
            onClick={() => {}}
          >
            <span className="sr-only">Canvas settings</span>
            <GearSix weight="bold" className="icon" />
          </button>
        </Tooltip>
      )}
    </div>
  );
};
