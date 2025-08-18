import React from "react";
import styles from "./EditorControls.module.scss";
import { Zoom } from "./Zoom";
import { Canvas } from "./Canvas";
import { Rect } from "./Rect";

export const EditorControls: React.FC = () => {
  return (
    <div className={styles.controls} role="toolbar" aria-label="Editor controls" id="editor-controls">
      <Rect />
      <Zoom />
      <Canvas />
    </div>
  );
};
