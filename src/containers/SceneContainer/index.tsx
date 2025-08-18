"use client";

import React, { useContext } from 'react';
import { ZoomContext } from '@/providers/ZoomProvider';
import { Scene } from '@/components/Scene';
import { CuboidControls } from '@/containers/CuboidControls';
import { useModel } from '@/providers/ModelProvider';

interface SceneProps {
  children: React.ReactNode;
}

export const SceneContainer: React.FC<SceneProps> = ({ children }) => {
  const { zoom } = useContext(ZoomContext);
  const { activeCuboidId } = useModel();
  
  return (
    <>
      <Scene style={{ transform: `scale(${zoom})` }}>{children}</Scene>
      {activeCuboidId && <CuboidControls />}
    </>
  );
};
