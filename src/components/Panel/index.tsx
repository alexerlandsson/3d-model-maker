import React from "react";
import styles from "./Panel.module.scss";

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({ children, ...props }) => {
  return <aside className={styles.panel} {...props}>{children}</aside>;
};
