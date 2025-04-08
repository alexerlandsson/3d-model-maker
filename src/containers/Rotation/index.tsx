"use client";

import React, { useCallback, useContext } from "react";
import { Reset } from "./Reset";
import { RotationContext } from "@/providers/RotationProvider";
import { Slider } from "./Slider";

export const Rotation: React.FC = () => {
  const { rotation, setRotation } = useContext(RotationContext);
  
  // Handle X-axis rotation
  const handleXRotation = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setRotation(prev => ({ ...prev, x: value }));
  }, [setRotation]);
  
  // Handle Y-axis rotation
  const handleYRotation = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setRotation(prev => ({ ...prev, y: value }));
  }, [setRotation]);

  return (
    <>
      <Slider
        label="Rotate horizontally"
        id="rotation-slider-x"
        orientation="horizontal"
        value={rotation.x}
        onChange={handleXRotation}
      />
      <Slider
        label="Rotate vertically"
        id="rotation-slider-y"
        orientation="vertical"
        value={rotation.y}
        onChange={handleYRotation}
      />
      <Reset />
    </>
  );
};
