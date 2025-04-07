import React from 'react';
import styles from './Root.module.scss';

interface RootProps {
  children: React.ReactNode;
}

export const Root: React.FC<RootProps> = ({ children }) => {
  return <main className={styles.root}>{children}</main>;
};
