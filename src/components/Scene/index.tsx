import React from 'react';
import styles from './Scene.module.scss';

interface SceneProps {
  id?: string;
  children: React.ReactNode;
}

export const Scene: React.FC<SceneProps> = ({ id, children }) => {
  return <div className={styles.scene} id={id}>{children}</div>;
};
