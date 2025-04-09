import React, { forwardRef } from 'react';
import styles from './Root.module.scss';

interface RootProps {
  children: React.ReactNode;
}

export const Root = forwardRef<HTMLDivElement, RootProps>(({ children }, ref) => {
  return <main ref={ref} className={styles.root}>{children}</main>;
});

Root.displayName = 'Root';
