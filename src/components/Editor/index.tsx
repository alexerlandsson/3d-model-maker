"use client";

import React, { useCallback, useContext } from "react";
import styles from "./Editor.module.scss";
import { RotationContext } from "@/providers/RotationProvider";
import { useDragRotation } from "@/hooks/useDragRotation";
import { useModel } from "@/providers/ModelProvider";
import clsx from "clsx";

interface EditorProps {
  children: React.ReactNode;
}

export const Editor: React.FC<EditorProps> = ({ children }) => {
  const { setRotation } = useContext(RotationContext);
  const { setActiveRectId } = useModel();

  // Handle drag rotation changes
  const handleRotationChange = useCallback((deltaX: number, deltaY: number) => {
    setRotation(prev => ({
      x: Math.max(-360, Math.min(360, prev.x + deltaX)),
      y: Math.max(-360, Math.min(360, prev.y - deltaY)), // Invert Y for intuitive movement
    }));
  }, [setRotation]);

  // Handle click outside of rectangles to deselect
  const handleEditorClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Don't deselect if clicking on toolbar elements
    const isFromToolbar = target.closest('[data-toolbar="true"]');
    if (isFromToolbar) return;
    
    // Don't deselect if clicking on a rect (they handle their own selection)
    const isFromRect = target.closest('[data-rect="true"]');
    if (isFromRect) return;
    
    // Only deselect on clean clicks (not after dragging)
    setActiveRectId(null);
  }, [setActiveRectId]);

  // Set up drag rotation
  const { isDragging, onMouseDown, onTouchStart } = useDragRotation({
    onRotationChange: handleRotationChange,
    sensitivity: 0.5,
    onClickAfterDrag: handleEditorClick,
  });

  return (
    <div
      className={clsx(styles.editor, {
        [styles.editorGrabbing]: isDragging,
      })}
      data-editor="true"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {children}
    </div>
  );
};
