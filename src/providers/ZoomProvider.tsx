"use client";

import React, { useState, useCallback, createContext, ReactNode } from "react";

// Zoom settings
export const MIN_ZOOM = 0.2;
export const MAX_ZOOM = 3;
export const ZOOM_STEP = 0.2;
export const DEFAULT_ZOOM = 1;

// Define the context type
export interface ZoomContextType {
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  isDefaultZoom: boolean;
}

// Create a context to share zoom state
export const ZoomContext = createContext<ZoomContextType>({
  zoom: DEFAULT_ZOOM,
  setZoom: () => {},
  zoomIn: () => {},
  zoomOut: () => {},
  resetZoom: () => {},
  isDefaultZoom: true
});

interface ZoomProviderProps {
  children: ReactNode;
}

export const ZoomProvider: React.FC<ZoomProviderProps> = ({ children }) => {
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  
  // Check if zoom is at default value
  const isDefaultZoom = zoom === DEFAULT_ZOOM;
  
  // Zoom in by one step, up to max zoom
  const zoomIn = useCallback(() => {
    setZoom(prevZoom => Math.min(MAX_ZOOM, prevZoom + ZOOM_STEP));
  }, []);

  // Zoom out by one step, down to min zoom
  const zoomOut = useCallback(() => {
    setZoom(prevZoom => Math.max(MIN_ZOOM, prevZoom - ZOOM_STEP));
  }, []);

  // Reset zoom to default value
  const resetZoom = useCallback(() => {
    setZoom(DEFAULT_ZOOM);
  }, []);

  return (
    <ZoomContext.Provider 
      value={{ 
        zoom, 
        setZoom, 
        zoomIn, 
        zoomOut, 
        resetZoom, 
        isDefaultZoom 
      }}
    >
      {children}
    </ZoomContext.Provider>
  );
};