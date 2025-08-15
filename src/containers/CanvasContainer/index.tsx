"use client";

import React, { useCallback, useContext } from "react";
import { RotationContext } from "@/providers/RotationProvider";
import { useCanvas } from "@/providers/CanvasProvider";
import { Canvas } from "@/components/Canvas";
import { useDragRotation } from "@/hooks/useDragRotation";

interface CanvasProps {
  children: React.ReactNode;
}

export const CanvasContainer: React.FC<CanvasProps> = ({ children }) => {
  const { rotation, setRotation } = useContext(RotationContext);
  const { showFrame } = useCanvas();

  // Handle drag rotation changes
  const handleRotationChange = useCallback((deltaX: number, deltaY: number) => {
    setRotation(prev => ({
      x: Math.max(-360, Math.min(360, prev.x + deltaX)),
      y: Math.max(-360, Math.min(360, prev.y - deltaY)), // Invert Y for intuitive movement
    }));
  }, [setRotation]);

  // Set up drag rotation
  const { onMouseDown, onTouchStart } = useDragRotation({
    onRotationChange: handleRotationChange,
    sensitivity: 0.5,
  });

  // Apply rotation transform based on the values from the rotation sliders
  const canvasStyle = {
    transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`,
    cursor: 'grab',
  };

  return (
    <div 
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      style={{ cursor: 'grab' }}
    >
      <Canvas showFrame={showFrame} style={canvasStyle}>
        {children}
      </Canvas>
    </div>
  );
};
