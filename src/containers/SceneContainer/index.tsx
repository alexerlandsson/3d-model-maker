"use client";

import React, { useContext } from 'react';
import { ZoomContext } from '@/providers/ZoomProvider';
import { Scene } from '@/components/Scene';

interface SceneProps {
  children: React.ReactNode;
}

export const SceneContainer: React.FC<SceneProps> = ({ children }) => {
  const { zoom } = useContext(ZoomContext);
  
  return (
    <Scene style={{ transform: `scale(${zoom})` }}>{children}</Scene>
  );
};
