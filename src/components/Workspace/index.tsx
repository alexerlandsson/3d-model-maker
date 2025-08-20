import React from "react";
import styles from "./Workspace.module.scss";

interface WorkspaceProps {
  children: React.ReactNode;
}

export const Workspace: React.FC<WorkspaceProps> = ({ children }) => {
  return <div className={styles.workspace}>{children}</div>;
};
