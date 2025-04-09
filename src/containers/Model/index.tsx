"use client";

import React from 'react';
import { Rect } from '@/components/Rect';
import { useModel } from '@/providers/ModelProvider';

export const Model: React.FC = () => {
  const { rectangles } = useModel();

  console.log(rectangles);

  return (
    <>
      {rectangles.map(rect => (
        <Rect
          key={rect.id}
          width={rect.width}
          height={rect.height}
          depth={rect.depth}
          posX={rect.posX}
          posY={rect.posY}
          posZ={rect.posZ}
          color={rect.color}
        />
      ))}
    </>
  );
};
