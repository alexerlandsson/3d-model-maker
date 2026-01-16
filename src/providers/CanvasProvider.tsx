"use client";

import React, { createContext, useContext, useState } from 'react';

export interface CanvasDimensions {
  width: number;
  height: number;
  depth: number;
}

interface CanvasContextType {
  showFrame: boolean;
  toggleFrame: () => void;
  showCuboidList: boolean;
  toggleCuboidList: () => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  dimensions: CanvasDimensions;
  setDimensions: (dimensions: CanvasDimensions) => void;
}

const DEFAULT_DIMENSIONS: CanvasDimensions = {
  width: 20,
  height: 20,
  depth: 20,
};

const DEFAULT_BACKGROUND_COLOR = '#121212';

export const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

export const useCanvas = (): CanvasContextType => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error('useCanvas must be used within a CanvasProvider');
  }
  return context;
};

export const CanvasProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showFrame, setShowFrame] = useState(true);
  const [showCuboidList, setShowCuboidList] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR);
  const [dimensions, setDimensions] = useState<CanvasDimensions>(DEFAULT_DIMENSIONS);

  const toggleFrame = () => {
    setShowFrame(prev => !prev);
  };

  const toggleCuboidList = () => {
    setShowCuboidList(prev => !prev);
  };

  return (
    <CanvasContext.Provider value={{
      showFrame,
      toggleFrame,
      showCuboidList,
      toggleCuboidList,
      backgroundColor,
      setBackgroundColor,
      dimensions,
      setDimensions,
    }}>
      {children}
    </CanvasContext.Provider>
  );
};