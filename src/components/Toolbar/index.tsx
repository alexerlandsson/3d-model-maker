"use client";

import React from "react";
import styles from "./Toolbar.module.scss";
import { Button } from "../Button";
import { useDragWindow } from "@/hooks/useDragWindow";
import clsx from "clsx";
import { DotsSixVertical, X } from "@phosphor-icons/react";

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
    initialPosition: { x: 0, y: 0 }, // Default position offset from top-left
  });

  return (
    <div
      className={clsx(styles.toolbar, {
        [styles.toolbarDragging]: isDragging,
      })}
      role="group"
      aria-label={ariaLabel}
      data-toolbar="true"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <header
        className={styles.header}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        <span className={styles.title}>
          <DotsSixVertical weight="bold" className="icon" aria-hidden="true" />
          {title}
        </span>
        {onClose && (
          <Button onClick={onClose} title="Close toolbar">
            <X weight="bold" className="icon" aria-hidden="true" />
            <span className="sr-only">Close toolbar</span>
          </Button>
        )}
      </header>
      <div className={styles.body}>{children}</div>
    </div>
  );
};
