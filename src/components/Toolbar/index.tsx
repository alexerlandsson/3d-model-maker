import React from "react";
import styles from "./Toolbar.module.scss";
import { Button } from "../Button";

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
  return (
    <div className={styles.toolbar} role="group" aria-label={ariaLabel}>
      <header className={styles.header}>
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
