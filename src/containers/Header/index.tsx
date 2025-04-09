"use client";

import React from "react";
import { useModel } from "@/providers/ModelProvider";
import { Header } from "@/components/Header";

export const HeaderContainer: React.FC = () => {
  const { addRectangle } = useModel();

  return (
    <Header title="3D Model Maker">
      <button onClick={addRectangle} title="Add rectangle">Add rectangle</button>
    </Header>
  );
};
