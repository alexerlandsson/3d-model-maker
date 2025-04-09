"use client";

import React, { useEffect, useRef } from 'react';
import { useModel } from '@/providers/ModelProvider';
import { Root } from '@/components/Root';

interface RootContainerProps {
  children: React.ReactNode;
}

export const RootContainer: React.FC<RootContainerProps> = ({ children }) => {
  const toolbarRef = useRef<HTMLDivElement>(null);
    const { activeRectId, setActiveRectId } = useModel();
    
    // Handle clicks outside the toolbar
    useEffect(() => {
      if (activeRectId) {
        const handleClickOutside = (event: MouseEvent) => {
          // Check if the toolbar element exists and if the click was outside of it
          if (toolbarRef.current && !toolbarRef.current.contains(event.target as Node)) {
            setActiveRectId(null);
          }
        };
  
        // Add event listener
        document.addEventListener('mousedown', handleClickOutside);
        
        // Clean up the event listener
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }
    }, [activeRectId, setActiveRectId]);

  return (
    <Root ref={toolbarRef}>
      {children}
    </Root>
  );
};
