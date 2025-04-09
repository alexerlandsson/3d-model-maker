"use client";

import React, { useContext } from "react";
import styles from "../EditorControls.module.scss";
import { ZoomContext, MIN_ZOOM, MAX_ZOOM } from "@/providers/ZoomProvider";

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
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
            aria-hidden="true"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"
            />
          </svg>
        </button>
        <button 
          className={styles.button}
          onClick={zoomOut}
          title="Zoom out"
          disabled={zoom <= MIN_ZOOM}
        >
          <span className="sr-only">Zoom out</span>
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
            aria-hidden="true"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"
            />
          </svg>
        </button>
        <button 
          className={styles.button}
          onClick={resetZoom}
          title="Reset zoom"
          disabled={isDefaultZoom}
        >
          <span className="sr-only">Reset zoom</span>
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
            aria-hidden="true"
          >
            <path d="M244,56v48a12,12,0,0,1-12,12H184a12,12,0,1,1,0-24H201.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76,76,0,1,0,127,204h1a75.53,75.53,0,0,0,52.15-20.72,12,12,0,0,1,16.49,17.45A99.45,99.45,0,0,1,128,228h-1.37A100,100,0,1,1,198.51,57.06L220,76.72V56a12,12,0,0,1,24,0Z" />
          </svg>
        </button>
      </div>
  );
};
