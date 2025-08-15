"use client";

import { useCallback, useEffect, useRef, useState } from 'react';

interface DragWindowConfig {
  initialPosition?: { x: number; y: number };
}

interface DragWindowReturn {
  position: { x: number; y: number };
  isDragging: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
  onTouchStart: (e: React.TouchEvent) => void;
}

export const useDragWindow = ({
  initialPosition = { x: 0, y: 0 },
}: DragWindowConfig = {}): DragWindowReturn => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const lastPositionRef = useRef({ x: 0, y: 0 });

  // Keep ref in sync with state
  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - lastPositionRef.current.x;
    const deltaY = e.clientY - lastPositionRef.current.y;

    setPosition(prev => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY,
    }));

    lastPositionRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;

    e.preventDefault();
    const touch = e.touches[0];
    const deltaX = touch.clientX - lastPositionRef.current.x;
    const deltaY = touch.clientY - lastPositionRef.current.y;

    setPosition(prev => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY,
    }));

    lastPositionRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent other drag handlers from interfering
    setIsDragging(true);
    lastPositionRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    
    e.preventDefault();
    e.stopPropagation(); // Prevent other drag handlers from interfering
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
    position,
    isDragging,
    onMouseDown,
    onTouchStart,
  };
};