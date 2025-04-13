import React from "react";
import styles from "./EditorControls.module.scss";
import { Zoom } from "./Zoom";
import { Canvas } from "./Canvas";
import { ListBullets, Palette, VectorThree } from "@phosphor-icons/react";

export const EditorControls: React.FC = () => {
  return (
    <div className={styles.controls} role="toolbar" aria-label="Editor controls" id="editor-controls">
      <Zoom />
      <Canvas />
      {false && (
        <div className="editor__controls-group" role="group" aria-label="Canvas settings">
          <button id="btn-canvas-settings" disabled>
            <span className="sr-only">Canvas settings</span>
            <VectorThree weight="bold" className="icon" aria-hidden="true" />
          </button>
          <button id="btn-set-editor-bg" disabled>
            <span className="sr-only">Set editor background color</span>
            <Palette weight="bold" className="icon" aria-hidden="true" />
          </button>
          <button id="btn-toggle-list-view" disabled>
            <span className="sr-only">Toggle list view</span>
            <ListBullets weight="bold" className="icon" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
};
