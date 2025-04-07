import React from 'react';
import styles from './SrOnly.module.scss';

interface SrOnlyProps {
  children: React.ReactNode;
}

export const SrOnly: React.FC<SrOnlyProps> = ({ children }) => {
  return <span className={styles.srOnly}>{children}</span>;
};
