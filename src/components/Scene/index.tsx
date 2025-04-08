import React from 'react';
import styles from './Scene.module.scss';

interface SceneProps {
  children: React.ReactNode;
}

export const Scene: React.FC<SceneProps> = ({ children }) => {
  return <div className={styles.scene}>{children}</div>;
};
