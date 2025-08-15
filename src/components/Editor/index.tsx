"use client";

import React, { useCallback, useContext } from "react";
import styles from "./Editor.module.scss";
import { RotationContext } from "@/providers/RotationProvider";
import { useDragRotation } from "@/hooks/useDragRotation";

interface EditorProps {
  children: React.ReactNode;
}

export const Editor: React.FC<EditorProps> = ({ children }) => {
  const { setRotation } = useContext(RotationContext);

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

  return (
    <div
      className={styles.editor}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {children}
    </div>
  );
};
