"use client";

import React, { useState } from "react";
import styles from "./Toolbar.module.scss";
import { useDragWindow } from "@/hooks/useDragWindow";
import clsx from "clsx";
import { ArrowsInLineVertical, DotsSixVertical, X } from "@phosphor-icons/react";

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

  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <aside
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
          <span className={styles.titleText}>{title}</span>
        </span>
        <div className={styles.headerActions}>
          <button
            title="Minimize toolbar"
            className={styles.headerButton}
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <ArrowsInLineVertical weight="bold" className="icon" aria-hidden="true" />
            <span className="sr-only">Minimize toolbar</span>
          </button>
          {onClose && (
            <button
              onClick={onClose}
              title="Close toolbar"
              className={styles.headerButton}
            >
              <X weight="bold" className="icon" aria-hidden="true" />
              <span className="sr-only">Close toolbar</span>
            </button>
          )}
        </div>
      </header>
      <div className={clsx(styles.body, {
        [styles.bodyMinimized]: isMinimized,
      })}>{children}</div>
    </aside>
  );
};
