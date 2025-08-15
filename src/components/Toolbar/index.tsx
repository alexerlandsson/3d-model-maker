"use client";

import React from "react";
import styles from "./Toolbar.module.scss";
import { Button } from "../Button";
import { useDragWindow } from "@/hooks/useDragWindow";
import clsx from "clsx";

interface ToolbarProps {
  ariaLabel: string;
  children: React.ReactNode;
  title: string;
  onClose?: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  ariaLabel,
  children,
  title,
  onClose,
}) => {
  const { position, isDragging, onMouseDown, onTouchStart } = useDragWindow({
    initialPosition: { x: 20, y: 20 }, // Default position offset from top-left
  });

  return (
    <div 
      className={clsx(styles.toolbar, {
        [styles.toolbarDragging]: isDragging,
      })} 
      role="group" 
      aria-label={ariaLabel}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <header 
        className={styles.header}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {title}
        {onClose && (
          <Button onClick={onClose} title="Close toolbar">
            CLOSE
          </Button>
        )}
      </header>
      <div className={styles.body}>{children}</div>
    </div>
  );
};
