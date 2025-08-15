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

    setPosition(prev => {
      // Get Editor boundaries
      const editorElement = document.querySelector('[data-editor="true"]');
      if (!editorElement) {
        return { x: prev.x + deltaX, y: prev.y + deltaY };
      }

      const toolbarElement = document.querySelector('[data-toolbar="true"]');
      if (!toolbarElement) {
        return { x: prev.x + deltaX, y: prev.y + deltaY };
      }

      const padding = 16; // 1rem padding
      const newX = prev.x + deltaX;
      const newY = prev.y + deltaY;

      // Get dimensions for boundary calculation
      const editorRect = editorElement.getBoundingClientRect();
      const toolbarRect = toolbarElement.getBoundingClientRect();

      // Calculate boundaries considering Toolbar's initial CSS positioning
      // Toolbar starts at bottom: 16px, left: 16px, then transform is applied
      const toolbarInitialLeft = 16; // from CSS: left: var(--_toolbar-offset)
      const toolbarInitialBottom = 16; // from CSS: bottom: var(--_toolbar-offset)
      
      // Calculate available movement range
      // For X: can move from initial left position to right edge minus toolbar width and padding
      const minX = -(toolbarInitialLeft - padding); // Can move left up to padding from edge
      const maxX = editorRect.width - toolbarRect.width - toolbarInitialLeft - padding;
      
      // For Y: negative values move up, positive values move down
      // Initial position is bottom: 16px, so Y=0 is already 16px from bottom
      const maxY = -(toolbarInitialBottom - padding); // Can move up to padding from top
      const minY = -(editorRect.height - toolbarRect.height - toolbarInitialBottom - padding);

      return {
        x: Math.max(minX, Math.min(maxX, newX)),
        y: Math.max(minY, Math.min(maxY, newY)),
      };
    });

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

    setPosition(prev => {
      // Get Editor boundaries
      const editorElement = document.querySelector('[data-editor="true"]');
      if (!editorElement) {
        return { x: prev.x + deltaX, y: prev.y + deltaY };
      }

      const toolbarElement = document.querySelector('[data-toolbar="true"]');
      if (!toolbarElement) {
        return { x: prev.x + deltaX, y: prev.y + deltaY };
      }

      const padding = 16; // 1rem padding
      const newX = prev.x + deltaX;
      const newY = prev.y + deltaY;

      // Get dimensions for boundary calculation
      const editorRect = editorElement.getBoundingClientRect();
      const toolbarRect = toolbarElement.getBoundingClientRect();

      // Calculate boundaries considering Toolbar's initial CSS positioning
      // Toolbar starts at bottom: 16px, left: 16px, then transform is applied
      const toolbarInitialLeft = 16; // from CSS: left: var(--_toolbar-offset)
      const toolbarInitialBottom = 16; // from CSS: bottom: var(--_toolbar-offset)
      
      // Calculate available movement range
      // For X: can move from initial left position to right edge minus toolbar width and padding
      const minX = -(toolbarInitialLeft - padding); // Can move left up to padding from edge
      const maxX = editorRect.width - toolbarRect.width - toolbarInitialLeft - padding;
      
      // For Y: negative values move up, positive values move down
      // Initial position is bottom: 16px, so Y=0 is already 16px from bottom
      const maxY = -(toolbarInitialBottom - padding); // Can move up to padding from top
      const minY = -(editorRect.height - toolbarRect.height - toolbarInitialBottom - padding);

      return {
        x: Math.max(minX, Math.min(maxX, newX)),
        y: Math.max(minY, Math.min(maxY, newY)),
      };
    });

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