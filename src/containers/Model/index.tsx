"use client";

import React from 'react';
import { Cuboid } from '@/components/Cuboid';
import { useModel } from '@/providers/ModelProvider';

export const Model: React.FC = () => {
  const { cuboids, activeCuboidId, setActiveCuboidId } = useModel();

  console.log(cuboids);

  return (
    <>
      {cuboids.map(cuboid => (
        <Cuboid
          key={cuboid.id}
          width={cuboid.width}
          height={cuboid.height}
          depth={cuboid.depth}
          posX={cuboid.posX}
          posY={cuboid.posY}
          posZ={cuboid.posZ}
          color={cuboid.color}
          zIndex={cuboid.zIndex}
          isActive={cuboid.id === activeCuboidId}
          onClick={() => setActiveCuboidId(cuboid.id)}
        />
      ))}
    </>
  );
};
