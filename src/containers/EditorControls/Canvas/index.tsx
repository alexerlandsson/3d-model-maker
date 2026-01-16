"use client";

import React, { useState } from "react";
import styles from "../EditorControls.module.scss";
import dialogStyles from "./CanvasSettingsDialog.module.scss";
import { useCanvas, CanvasDimensions } from "@/providers/CanvasProvider";
import clsx from "clsx";
import { Cube, GearSix, ListBullets } from "@phosphor-icons/react";
import { Tooltip } from "@/components/Tooltip";
import { Dialog } from "@/components/Dialog";

export const Canvas: React.FC = () => {
  const {
    toggleFrame,
    showFrame,
    toggleCuboidList,
    showCuboidList,
    backgroundColor,
    setBackgroundColor,
    dimensions,
    setDimensions,
  } = useCanvas();

  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState(false);
  const [tempBackgroundColor, setTempBackgroundColor] = useState(backgroundColor);
  const [tempDimensions, setTempDimensions] = useState<CanvasDimensions>(dimensions);

  const handleOpenSettings = () => {
    setTempBackgroundColor(backgroundColor);
    setTempDimensions(dimensions);
    setIsSettingsDialogOpen(true);
  };

  const handleConfirmSettings = () => {
    setBackgroundColor(tempBackgroundColor);
    setDimensions(tempDimensions);
    setIsSettingsDialogOpen(false);
  };

  const handleDimensionChange = (field: keyof CanvasDimensions, value: string) => {
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= 1 && numValue <= 100) {
      setTempDimensions((prev) => ({ ...prev, [field]: numValue }));
    }
  };

  return (
    <>
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
        <Tooltip label="Edit canvas" side="left">
          <button
            className={styles.button}
            onClick={handleOpenSettings}
          >
            <span className="sr-only">Edit canvas</span>
            <GearSix weight="bold" className="icon" />
          </button>
        </Tooltip>
      </div>

      <Dialog
        isOpen={isSettingsDialogOpen}
        title="Canvas settings"
        id="canvas-settings"
        onClose={() => setIsSettingsDialogOpen(false)}
        onConfirm={handleConfirmSettings}
      >
        <div className={dialogStyles.form}>
          <fieldset className={dialogStyles.fieldset}>
            <legend className="sr-only">Background color</legend>
            <span aria-hidden="true" className={dialogStyles.label}>
              Background
            </span>
            <input
              type="color"
              value={tempBackgroundColor}
              onChange={(e) => setTempBackgroundColor(e.target.value)}
              className={dialogStyles.inputColor}
            />
          </fieldset>

          <hr className={dialogStyles.separator} />

          <fieldset className={dialogStyles.fieldset}>
            <legend className="sr-only">Width</legend>
            <span aria-hidden="true" className={dialogStyles.label}>
              Width
            </span>
            <input
              type="number"
              value={tempDimensions.width}
              onChange={(e) => handleDimensionChange("width", e.target.value)}
              min={1}
              max={100}
              className={dialogStyles.input}
            />
          </fieldset>

          <fieldset className={dialogStyles.fieldset}>
            <legend className="sr-only">Height</legend>
            <span aria-hidden="true" className={dialogStyles.label}>
              Height
            </span>
            <input
              type="number"
              value={tempDimensions.height}
              onChange={(e) => handleDimensionChange("height", e.target.value)}
              min={1}
              max={100}
              className={dialogStyles.input}
            />
          </fieldset>

          <fieldset className={dialogStyles.fieldset}>
            <legend className="sr-only">Depth</legend>
            <span aria-hidden="true" className={dialogStyles.label}>
              Depth
            </span>
            <input
              type="number"
              value={tempDimensions.depth}
              onChange={(e) => handleDimensionChange("depth", e.target.value)}
              min={1}
              max={100}
              className={dialogStyles.input}
            />
          </fieldset>
        </div>
      </Dialog>
    </>
  );
};
