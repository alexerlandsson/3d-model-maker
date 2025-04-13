"use client";

import React, { useContext } from "react";
import styles from "../EditorControls.module.scss";
import { ZoomContext, MIN_ZOOM, MAX_ZOOM } from "@/providers/ZoomProvider";
import { ArrowClockwise, Minus, Plus } from "@phosphor-icons/react";

export const Zoom: React.FC = () => {
  const { zoom, zoomIn, zoomOut, resetZoom, isDefaultZoom } = useContext(ZoomContext);
  
  return (
      <div className={styles.group} role="group" aria-label="Zoom controls">
        <button 
          className={styles.button} 
          onClick={zoomIn}
          title="Zoom in"
          disabled={zoom >= MAX_ZOOM}
        >
          <span className="sr-only">Zoom in</span>
          <Plus weight="bold" className="icon" aria-hidden="true" />
        </button>
        <button 
          className={styles.button}
          onClick={zoomOut}
          title="Zoom out"
          disabled={zoom <= MIN_ZOOM}
        >
          <span className="sr-only">Zoom out</span>
          <Minus weight="bold" className="icon" aria-hidden="true" />
        </button>
        <button 
          className={styles.button}
          onClick={resetZoom}
          title="Reset zoom"
          disabled={isDefaultZoom}
        >
          <span className="sr-only">Reset zoom</span>
          <ArrowClockwise weight="bold" className="icon" aria-hidden="true" />
        </button>
      </div>
  );
};
