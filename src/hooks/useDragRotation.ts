"use client";

import { useCallback, useEffect, useRef } from 'react';

interface DragRotationConfig {
  onRotationChange: (deltaX: number, deltaY: number) => void;
  sensitivity?: number;
}

interface DragRotationReturn {
  isDragging: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
  onTouchStart: (e: React.TouchEvent) => void;
}

export const useDragRotation = ({
  onRotationChange,
  sensitivity = 0.5,
}: DragRotationConfig): DragRotationReturn => {
  const isDraggingRef = useRef(false);
  const lastPositionRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - lastPositionRef.current.x;
    const deltaY = e.clientY - lastPositionRef.current.y;

    onRotationChange(deltaX * sensitivity, deltaY * sensitivity);

    lastPositionRef.current = { x: e.clientX, y: e.clientY };
  }, [onRotationChange, sensitivity]);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    document.body.style.cursor = '';
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;

    e.preventDefault();
    const touch = e.touches[0];
    const deltaX = touch.clientX - lastPositionRef.current.x;
    const deltaY = touch.clientY - lastPositionRef.current.y;

    onRotationChange(deltaX * sensitivity, deltaY * sensitivity);

    lastPositionRef.current = { x: touch.clientX, y: touch.clientY };
  }, [onRotationChange, sensitivity]);

  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    lastPositionRef.current = { x: e.clientX, y: e.clientY };
    document.body.style.cursor = 'grabbing';
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    
    e.preventDefault();
    isDraggingRef.current = true;
    const touch = e.touches[0];
    lastPositionRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      isDraggingRef.current = false;
      document.body.style.cursor = '';
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return {
    isDragging: isDraggingRef.current,
    onMouseDown,
    onTouchStart,
  };
};