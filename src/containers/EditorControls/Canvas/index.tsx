"use client";

import React, { useState } from "react";
import styles from "../EditorControls.module.scss";
import dialogStyles from "./CanvasSettingsDialog.module.scss";
import { useCanvas, CanvasDimensions } from "@/providers/CanvasProvider";
import clsx from "clsx";
import { ArrowCounterClockwise, Cube, GearSix, ListBullets, Minus, Plus } from "@phosphor-icons/react";
import { Tooltip } from "@/components/Tooltip";
import { Dialog } from "@/components/Dialog";

const DEFAULT_BACKGROUND_COLOR = "#121212";
const MIN_DIMENSION = 1;
const MAX_DIMENSION = 100;

const clampDimension = (value: number): number => {
  return Math.max(MIN_DIMENSION, Math.min(MAX_DIMENSION, value));
};

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
  // Store input values as strings to allow free typing
  const [inputValues, setInputValues] = useState({
    width: String(dimensions.width),
    height: String(dimensions.height),
    depth: String(dimensions.depth),
  });

  const handleOpenSettings = () => {
    setTempBackgroundColor(backgroundColor);
    setTempDimensions(dimensions);
    setInputValues({
      width: String(dimensions.width),
      height: String(dimensions.height),
      depth: String(dimensions.depth),
    });
    setIsSettingsDialogOpen(true);
  };

  const handleConfirmSettings = () => {
    setBackgroundColor(tempBackgroundColor);
    setDimensions(tempDimensions);
    setIsSettingsDialogOpen(false);
  };

  const handleResetBackgroundColor = () => {
    setTempBackgroundColor(DEFAULT_BACKGROUND_COLOR);
  };

  const handleDimensionChange = (field: keyof CanvasDimensions, value: string) => {
    // Allow free typing - store the raw string value
    setInputValues((prev) => ({ ...prev, [field]: value }));

    // Only update the actual dimension if it's a valid number
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue)) {
      setTempDimensions((prev) => ({ ...prev, [field]: clampDimension(numValue) }));
    }
  };

  const handleDimensionBlur = (field: keyof CanvasDimensions) => {
    // On blur, sync the input value with the clamped dimension value
    setInputValues((prev) => ({ ...prev, [field]: String(tempDimensions[field]) }));
  };

  const handleDimensionIncrement = (field: keyof CanvasDimensions) => {
    const newValue = Math.min(MAX_DIMENSION, tempDimensions[field] + 1);
    setTempDimensions((prev) => ({ ...prev, [field]: newValue }));
    setInputValues((prev) => ({ ...prev, [field]: String(newValue) }));
  };

  const handleDimensionDecrement = (field: keyof CanvasDimensions) => {
    const newValue = Math.max(MIN_DIMENSION, tempDimensions[field] - 1);
    setTempDimensions((prev) => ({ ...prev, [field]: newValue }));
    setInputValues((prev) => ({ ...prev, [field]: String(newValue) }));
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
          <fieldset className={dialogStyles.fieldsetColor}>
            <legend className="sr-only">Background color</legend>
            <span aria-hidden="true" className={dialogStyles.label}>
              Background
            </span>
            <input
              type="color"
              value={tempBackgroundColor}
              onChange={(e) => setTempBackgroundColor(e.target.value)}
              className={dialogStyles.inputColor}
              tabIndex={-1}
            />
            <Tooltip label="Reset to default" side="top">
              <button
                type="button"
                onClick={handleResetBackgroundColor}
                className={dialogStyles.stepButton}
                disabled={tempBackgroundColor === DEFAULT_BACKGROUND_COLOR}
              >
                <span className="sr-only">Reset to default</span>
                <ArrowCounterClockwise weight="bold" className="icon" aria-hidden="true" />
              </button>
            </Tooltip>
          </fieldset>

          <hr className={dialogStyles.separator} />

          <fieldset className={dialogStyles.fieldset}>
            <legend className="sr-only">Width</legend>
            <span aria-hidden="true" className={dialogStyles.label}>
              Width
            </span>
            <input
              type="number"
              value={inputValues.width}
              onChange={(e) => handleDimensionChange("width", e.target.value)}
              onBlur={() => handleDimensionBlur("width")}
              onFocus={(e) => e.target.select()}
              min={MIN_DIMENSION}
              max={MAX_DIMENSION}
              className={dialogStyles.input}
            />
            <Tooltip label="Decrease width" side="top">
              <button
                type="button"
                onClick={() => handleDimensionDecrement("width")}
                className={dialogStyles.stepButton}
                disabled={tempDimensions.width <= MIN_DIMENSION}
              >
                <span className="sr-only">Decrease width</span>
                <Minus weight="bold" className="icon" aria-hidden="true" />
              </button>
            </Tooltip>
            <Tooltip label="Increase width" side="top">
              <button
                type="button"
                onClick={() => handleDimensionIncrement("width")}
                className={dialogStyles.stepButton}
                disabled={tempDimensions.width >= MAX_DIMENSION}
              >
                <span className="sr-only">Increase width</span>
                <Plus weight="bold" className="icon" aria-hidden="true" />
              </button>
            </Tooltip>
          </fieldset>

          <fieldset className={dialogStyles.fieldset}>
            <legend className="sr-only">Height</legend>
            <span aria-hidden="true" className={dialogStyles.label}>
              Height
            </span>
            <input
              type="number"
              value={inputValues.height}
              onChange={(e) => handleDimensionChange("height", e.target.value)}
              onBlur={() => handleDimensionBlur("height")}
              onFocus={(e) => e.target.select()}
              min={MIN_DIMENSION}
              max={MAX_DIMENSION}
              className={dialogStyles.input}
            />
            <Tooltip label="Decrease height" side="top">
              <button
                type="button"
                onClick={() => handleDimensionDecrement("height")}
                className={dialogStyles.stepButton}
                disabled={tempDimensions.height <= MIN_DIMENSION}
              >
                <span className="sr-only">Decrease height</span>
                <Minus weight="bold" className="icon" aria-hidden="true" />
              </button>
            </Tooltip>
            <Tooltip label="Increase height" side="top">
              <button
                type="button"
                onClick={() => handleDimensionIncrement("height")}
                className={dialogStyles.stepButton}
                disabled={tempDimensions.height >= MAX_DIMENSION}
              >
                <span className="sr-only">Increase height</span>
                <Plus weight="bold" className="icon" aria-hidden="true" />
              </button>
            </Tooltip>
          </fieldset>

          <fieldset className={dialogStyles.fieldset}>
            <legend className="sr-only">Depth</legend>
            <span aria-hidden="true" className={dialogStyles.label}>
              Depth
            </span>
            <input
              type="number"
              value={inputValues.depth}
              onChange={(e) => handleDimensionChange("depth", e.target.value)}
              onBlur={() => handleDimensionBlur("depth")}
              onFocus={(e) => e.target.select()}
              min={MIN_DIMENSION}
              max={MAX_DIMENSION}
              className={dialogStyles.input}
            />
            <Tooltip label="Decrease depth" side="top">
              <button
                type="button"
                onClick={() => handleDimensionDecrement("depth")}
                className={dialogStyles.stepButton}
                disabled={tempDimensions.depth <= MIN_DIMENSION}
              >
                <span className="sr-only">Decrease depth</span>
                <Minus weight="bold" className="icon" aria-hidden="true" />
              </button>
            </Tooltip>
            <Tooltip label="Increase depth" side="top">
              <button
                type="button"
                onClick={() => handleDimensionIncrement("depth")}
                className={dialogStyles.stepButton}
                disabled={tempDimensions.depth >= MAX_DIMENSION}
              >
                <span className="sr-only">Increase depth</span>
                <Plus weight="bold" className="icon" aria-hidden="true" />
              </button>
            </Tooltip>
          </fieldset>
        </div>
      </Dialog>
    </>
  );
};
