import React from 'react';
import styles from './Toolbar.module.scss';

interface ToolbarProps {
  ariaLabel: string;
  children: React.ReactNode;
}

export const Toolbar: React.FC<ToolbarProps> = ({ ariaLabel, children }) => {
  return <div className={styles.toolbar} role="grop" aria-label={ariaLabel}>{children}</div>;
};
