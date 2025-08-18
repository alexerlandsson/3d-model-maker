"use client";

import { CuboidProps } from '@/components/Cuboid';
import React, { createContext, useContext, useState } from 'react';

// Maximum number of cuboids allowed
export const MAX_CUBOIDS = 99;

interface Cuboid extends CuboidProps{
  id: string;
}

interface ModelContextType {
  cuboids: Cuboid[];
  activeCuboidId: string | null;
  setActiveCuboidId: (id: string | null) => void;
  addCuboid: () => void;
  updateCuboid: (id: string, props: Partial<CuboidProps>) => void;
  deleteCuboid: (id: string) => void;
  isMaxCuboids: boolean;
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
  const [cuboids, setCuboids] = useState<Cuboid[]>([]);
  const [activeCuboidId, setActiveCuboidId] = useState<string | null>(null);
  
  // Check if we've reached the maximum number of cuboids
  const isMaxCuboids = cuboids.length >= MAX_CUBOIDS;

  // Document-level click event is now handled through the Root component ref in page.tsx

  const addCuboid = () => {
    // Prevent adding more cuboids if we've reached the maximum
    if (isMaxCuboids) return;
    
    const newCuboid: Cuboid = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      width: 1, height: 1, depth: 1,
      posX: 0, posY: 0, posZ: 0,
      zIndex: 0,
      color: '#cccccc'
    };
    
    setCuboids(prev => [...prev, newCuboid]);
    // Automatically set the newly created cuboid as active
    setActiveCuboidId(newCuboid.id);
  };

  const updateCuboid = (id: string, props: Partial<CuboidProps>) => {
    setCuboids(prev => 
      prev.map(cuboid => 
        cuboid.id === id ? { ...cuboid, ...props } : cuboid
      )
    );
  };

  const deleteCuboid = (id: string) => {
    setCuboids(prev => prev.filter(cuboid => cuboid.id !== id));
    if (activeCuboidId === id) {
      setActiveCuboidId(null);
    }
  };

  return (
    <ModelContext.Provider 
      value={{ 
        cuboids, 
        activeCuboidId, 
        setActiveCuboidId,
        addCuboid, 
        updateCuboid,
        deleteCuboid,
        isMaxCuboids 
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};