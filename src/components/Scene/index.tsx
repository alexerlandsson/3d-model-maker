import React from 'react';
import styles from './Scene.module.scss';

interface SceneProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Scene: React.FC<SceneProps> = ({ children, style }) => {
  return (
    <div className={styles.scene} style={style} role="img" aria-label="Voxel model">
      {children}
    </div>
  );
};
