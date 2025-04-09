"use client";

import { RectProps } from '@/components/Rect';
import React, { createContext, useContext, useState } from 'react';

// Maximum number of rectangles allowed
export const MAX_RECTANGLES = 99;

interface Rectangle extends RectProps{
  id: string;
}

interface ModelContextType {
  rectangles: Rectangle[];
  activeRectId: string | null;
  setActiveRectId: (id: string | null) => void;
  addRectangle: () => void;
  updateRectangle: (id: string, props: Partial<RectProps>) => void;
  deleteRectangle: (id: string) => void;
  isMaxRectangles: boolean;
}

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export const useModel = (): ModelContextType => {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error('useModel must be used within a ModelProvider');
  }
  return context;
};

export const ModelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rectangles, setRectangles] = useState<Rectangle[]>([]);
  const [activeRectId, setActiveRectId] = useState<string | null>(null);
  
  // Check if we've reached the maximum number of rectangles
  const isMaxRectangles = rectangles.length >= MAX_RECTANGLES;

  // Document-level click event is now handled through the Root component ref in page.tsx

  const addRectangle = () => {
    // Prevent adding more rectangles if we've reached the maximum
    if (isMaxRectangles) return;
    
    const newRectangle: Rectangle = {
      id: `R${(rectangles.length + 1).toString().padStart(3, '0')}`,
      width: 1,
      height: 1,
      depth: 1,
      posX: 0,
      posY: 0,
      posZ: 0,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
    };
    
    setRectangles(prev => [...prev, newRectangle]);
  };

  const updateRectangle = (id: string, props: Partial<RectProps>) => {
    setRectangles(prev => 
      prev.map(rect => 
        rect.id === id ? { ...rect, ...props } : rect
      )
    );
  };

  const deleteRectangle = (id: string) => {
    setRectangles(prev => prev.filter(rect => rect.id !== id));
    if (activeRectId === id) {
      setActiveRectId(null);
    }
  };

  return (
    <ModelContext.Provider 
      value={{ 
        rectangles, 
        activeRectId, 
        setActiveRectId,
        addRectangle, 
        updateRectangle,
        deleteRectangle,
        isMaxRectangles 
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};