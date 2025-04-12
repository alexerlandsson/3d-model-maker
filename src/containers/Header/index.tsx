"use client";

import React from "react";
import { useModel } from "@/providers/ModelProvider";
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";

export const HeaderContainer: React.FC = () => {
  const { addRectangle, isMaxRectangles } = useModel();

  return (
    <Header title="3D Model Maker">
      <Button
        onClick={addRectangle}
        title={
          isMaxRectangles
            ? "Maximum limit of 99 rectangles reached"
            : "Add rectangle"
        }
        disabled={isMaxRectangles}
      >
        Add rectangle
      </Button>
    </Header>
  );
};
