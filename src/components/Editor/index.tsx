import React from "react";
import styles from "./Editor.module.scss";

interface EditorProps {
  children: React.ReactNode;
}

export const Editor: React.FC<EditorProps> = ({ children }) => {
  return (
    <div className={styles.editor}>
      {children}
    </div>
  );
};
