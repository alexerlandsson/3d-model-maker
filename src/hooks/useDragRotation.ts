"use client";

import { useCallback, useEffect, useRef, useState } from 'react';

interface DragRotationConfig {
  onRotationChange: (deltaX: number, deltaY: number) => void;
  sensitivity?: number;
  onClickAfterDrag?: (e: React.MouseEvent) => void;
}

interface DragRotationReturn {
  isDragging: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
  onTouchStart: (e: React.TouchEvent) => void;
}

export const useDragRotation = ({
  onRotationChange,
  sensitivity = 0.5,
  onClickAfterDrag,
}: DragRotationConfig): DragRotationReturn => {
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);
  const mouseDownEventRef = useRef<React.MouseEvent | null>(null);

  // Keep ref in sync with state
  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - lastPositionRef.current.x;
    const deltaY = e.clientY - lastPositionRef.current.y;

    // Mark that we've moved (for distinguishing clicks from drags)
    if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
      hasMovedRef.current = true;
    }

    onRotationChange(deltaX * sensitivity, deltaY * sensitivity);

    lastPositionRef.current = { x: e.clientX, y: e.clientY };
  }, [onRotationChange, sensitivity]);

  const handleMouseUp = useCallback(() => {
    const wasDragging = isDraggingRef.current;
    const hadMoved = hasMovedRef.current;
    const mouseDownEvent = mouseDownEventRef.current;
    
    setIsDragging(false);
    
    // If we were "dragging" but never actually moved, treat it as a click
    if (wasDragging && !hadMoved && mouseDownEvent && onClickAfterDrag) {
      onClickAfterDrag(mouseDownEvent);
    }
    
    // Reset movement tracking
    hasMovedRef.current = false;
    mouseDownEventRef.current = null;
  }, [onClickAfterDrag]);

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
    setIsDragging(false);
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    // Check if the event originated from within a Toolbar or Dialog
    const target = e.target as HTMLElement;
    const isFromToolbar = target.closest('[data-toolbar="true"]');
    const isFromDialog = target.closest('[data-dialog="true"]');

    if (isFromToolbar || isFromDialog) return;

    e.preventDefault();
    setIsDragging(true);
    hasMovedRef.current = false;
    mouseDownEventRef.current = e;
    lastPositionRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;

    // Check if the event originated from within a Toolbar or Dialog
    const target = e.target as HTMLElement;
    const isFromToolbar = target.closest('[data-toolbar="true"]');
    const isFromDialog = target.closest('[data-dialog="true"]');

    if (isFromToolbar || isFromDialog) return;

    e.preventDefault();
    setIsDragging(true);
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
      setIsDragging(false);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return {
    isDragging,
    onMouseDown,
    onTouchStart,
  };
};