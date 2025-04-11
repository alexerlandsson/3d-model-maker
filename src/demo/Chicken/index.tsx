import { Rect } from "@/components/Rect";
import React from "react";

export const Chicken: React.FC = () => {
  return (
    <>
      {/* Body */}
      <Rect
        width={6}
        height={13}
        depth={7}
        posX={2}
        posY={2}
        posZ={3}
        color="#fff"
      />

      {/* Back */}
      <Rect
        width={6}
        height={5}
        depth={3}
        posX={2}
        posY={10}
        posZ={10}
        color="#fff"
      />

      {/* Tail */}
      <Rect
        width={4}
        height={3}
        depth={1}
        posX={3}
        posY={10}
        posZ={13}
        color="#fff"
      />

      {/* Wing (Left) */}
      <Rect
        width={2}
        height={3}
        depth={6}
        posX={8}
        posY={11}
        posZ={5}
        color="#fff"
      />

      {/* Wing (Right) */}
      <Rect
        width={2}
        height={3}
        depth={6}
        posX={0}
        posY={11}
        posZ={5}
        color="#fff"
      />

      {/* Leg (Left) */}
      <Rect
        width={1}
        height={3}
        depth={1}
        posX={7}
        posY={15}
        posZ={7}
        color="#d8724f"
      />

      {/* Leg (Right) */}
      <Rect
        width={1}
        height={3}
        depth={1}
        posX={2}
        posY={15}
        posZ={7}
        color="#d8724f"
      />

      {/* Foot (Left) */}
      <Rect
        width={3}
        height={1}
        depth={3}
        posX={6}
        posY={18}
        posZ={6}
        color="#d8724f"
      />

      {/* Foot (Right) */}
      <Rect
        width={3}
        height={1}
        depth={3}
        posX={1}
        posY={18}
        posZ={6}
        color="#d8724f"
      />

      {/* Toe (Left, Left) */}
      <Rect
        width={1}
        height={1}
        depth={2}
        posX={8}
        posY={18}
        posZ={4}
        color="#d8724f"
      />

      {/* Toe (Left, Right) */}
      <Rect
        width={1}
        height={1}
        depth={2}
        posX={6}
        posY={18}
        posZ={4}
        color="#d8724f"
      />

      {/* Toe (Right, Left) */}
      <Rect
        width={1}
        height={1}
        depth={2}
        posX={3}
        posY={18}
        posZ={4}
        color="#d8724f"
      />

      {/* Toe (Right, Right) */}
      <Rect
        width={1}
        height={1}
        depth={2}
        posX={1}
        posY={18}
        posZ={4}
        color="#d8724f"
      />

      {/* Comb */}
      <Rect
        width={2}
        height={2}
        depth={4}
        posX={4}
        posY={0}
        posZ={4}
        color="#cc625e"
      />

      {/* Beak */}
      <Rect
        width={2}
        height={2}
        depth={3}
        posX={4}
        posY={4}
        posZ={0}
        color="#d8724f"
      />

      {/* Wattle */}
      <Rect
        width={2}
        height={2}
        depth={2}
        posX={4}
        posY={6}
        posZ={1}
        color="#cc625e"
      />

      {/* Eye (Left) */}
      <Rect
        width={0}
        height={1}
        depth={1}
        posX={8}
        posY={4}
        posZ={5}
        zIndex={1}
        color="#000"
      />

      {/* Eye (Right) */}
      <Rect
        width={0}
        height={1}
        depth={1}
        posX={2}
        posY={4}
        posZ={5}
        zIndex={1}
        color="#000"
      />
    </>
  );
};
