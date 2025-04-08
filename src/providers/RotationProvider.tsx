"use client";

import React, { useState, useCallback, createContext, ReactNode } from "react";

// Default rotation values (middle of the range)
export const DEFAULT_ROTATION = {
  x: 0,
  y: 0
};

// Define the context type
export interface RotationContextType {
  rotation: typeof DEFAULT_ROTATION;
  setRotation: React.Dispatch<React.SetStateAction<typeof DEFAULT_ROTATION>>;
  resetRotation: () => void;
  isDefaultRotation: boolean;
}

// Create a context to share rotation state
export const RotationContext = createContext<RotationContextType>({
  rotation: DEFAULT_ROTATION,
  setRotation: () => {},
  resetRotation: () => {},
  isDefaultRotation: true
});

interface RotationProviderProps {
  children: ReactNode;
}

export const RotationProvider: React.FC<RotationProviderProps> = ({ children }) => {
  const [rotation, setRotation] = useState(DEFAULT_ROTATION);
  
  // Check if rotation is at default values
  const isDefaultRotation = rotation.x === DEFAULT_ROTATION.x && rotation.y === DEFAULT_ROTATION.y;
  
  // Reset rotation to default values
  const resetRotation = useCallback(() => {
    setRotation(DEFAULT_ROTATION);
  }, []);

  return (
    <RotationContext.Provider 
      value={{ 
        rotation, 
        setRotation, 
        resetRotation, 
        isDefaultRotation 
      }}
    >
      {children}
    </RotationContext.Provider>
  );
};