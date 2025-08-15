"use client";

import React, { useContext } from "react";
import { RotationContext } from "@/providers/RotationProvider";
import { useCanvas } from "@/providers/CanvasProvider";
import { Canvas } from "@/components/Canvas";

interface CanvasProps {
  children: React.ReactNode;
}

export const CanvasContainer: React.FC<CanvasProps> = ({ children }) => {
  const { rotation } = useContext(RotationContext);
  const { showFrame } = useCanvas();

  // Apply rotation transform based on the values from the rotation sliders
  const canvasStyle = {
    transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`,
  };

  return (
    <Canvas showFrame={showFrame} style={canvasStyle}>
      {children}
    </Canvas>
  );
};
