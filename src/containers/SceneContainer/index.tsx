"use client";

import React, { useContext } from 'react';
import { ZoomContext } from '@/providers/ZoomProvider';
import { Scene } from '@/components/Scene';
import { CuboidControls } from '@/containers/CuboidControls';
import { useModel } from '@/providers/ModelProvider';
import { useCanvas } from '@/providers/CanvasProvider';

interface SceneProps {
  children: React.ReactNode;
}

export const SceneContainer: React.FC<SceneProps> = ({ children }) => {
  const { zoom } = useContext(ZoomContext);
  const { activeCuboidId } = useModel();
  const { dimensions } = useCanvas();

  const sceneStyle = {
    transform: `scale(${zoom})`,
    '--canvas-width': dimensions.width,
    '--canvas-height': dimensions.height,
    '--canvas-depth': dimensions.depth,
  } as React.CSSProperties;

  return (
    <>
      <Scene style={sceneStyle}>{children}</Scene>
      {activeCuboidId && <CuboidControls />}
    </>
  );
};
