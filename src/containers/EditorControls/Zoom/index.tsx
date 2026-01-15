"use client";

import React, { useContext } from "react";
import styles from "../EditorControls.module.scss";
import { ZoomContext, MIN_ZOOM, MAX_ZOOM } from "@/providers/ZoomProvider";
import { ArrowClockwise, MagnifyingGlassMinus, MagnifyingGlassPlus } from "@phosphor-icons/react";
import { Tooltip } from "@/components/Tooltip";

export const Zoom: React.FC = () => {
  const { zoom, zoomIn, zoomOut, resetZoom, isDefaultZoom } = useContext(ZoomContext);

  return (
      <div className={styles.group} role="group" aria-label="Zoom controls">
        <Tooltip label="Zoom in" side="left">
          <button
            className={styles.button}
            onClick={zoomIn}
            disabled={zoom >= MAX_ZOOM}
          >
            <span className="sr-only">Zoom in</span>
            <MagnifyingGlassPlus weight="bold" className="icon" aria-hidden="true" />
          </button>
        </Tooltip>
        <Tooltip label="Zoom out" side="left">
          <button
            className={styles.button}
            onClick={zoomOut}
            disabled={zoom <= MIN_ZOOM}
          >
            <span className="sr-only">Zoom out</span>
            <MagnifyingGlassMinus weight="bold" className="icon" aria-hidden="true" />
          </button>
        </Tooltip>
        <Tooltip label="Reset zoom" side="left">
          <button
            className={styles.button}
            onClick={resetZoom}
            disabled={isDefaultZoom}
          >
            <span className="sr-only">Reset zoom</span>
            <ArrowClockwise weight="bold" className="icon" aria-hidden="true" />
          </button>
        </Tooltip>
      </div>
  );
};
