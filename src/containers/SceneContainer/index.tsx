"use client";

import React, { useContext } from 'react';
import { ZoomContext } from '@/providers/ZoomProvider';
import { Scene } from '@/components/Scene';
import { RectControls } from '@/containers/RectControls';
import { useModel } from '@/providers/ModelProvider';

interface SceneProps {
  children: React.ReactNode;
}

export const SceneContainer: React.FC<SceneProps> = ({ children }) => {
  const { zoom } = useContext(ZoomContext);
  const { activeRectId } = useModel();
  
  return (
    <>
      <Scene style={{ transform: `scale(${zoom})` }}>{children}</Scene>
      {activeRectId && <RectControls />}
    </>
  );
};
