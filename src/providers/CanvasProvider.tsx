"use client";

import React, { createContext, useContext, useState } from 'react';

interface CanvasContextType {
  showFrame: boolean;
  toggleFrame: () => void;
  showCuboidList: boolean;
  toggleCuboidList: () => void;
}

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

  const toggleFrame = () => {
    setShowFrame(prev => !prev);
  };

  const toggleCuboidList = () => {
    setShowCuboidList(prev => !prev);
  };

  return (
    <CanvasContext.Provider value={{ showFrame, toggleFrame, showCuboidList, toggleCuboidList }}>
      {children}
    </CanvasContext.Provider>
  );
};