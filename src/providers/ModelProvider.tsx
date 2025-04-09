"use client";

import { RectProps } from '@/components/Rect';
import React, { createContext, useContext, useState } from 'react';

interface Rectangle extends RectProps{
  id: string;
}

interface ModelContextType {
  rectangles: Rectangle[];
  addRectangle: () => void;
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

  const addRectangle = () => {
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

  return (
    <ModelContext.Provider value={{ rectangles, addRectangle }}>
      {children}
    </ModelContext.Provider>
  );
};