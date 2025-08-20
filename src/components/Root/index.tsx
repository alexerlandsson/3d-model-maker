import React, { forwardRef } from 'react';
import styles from './Root.module.scss';

interface RootProps {
  children: React.ReactNode;
}

export const Root = forwardRef<HTMLDivElement, RootProps>(({ children }, ref) => {
  return <div ref={ref} className={styles.root}>{children}</div>;
});

Root.displayName = 'Root';
