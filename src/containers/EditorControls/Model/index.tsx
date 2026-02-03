"use client";

import React, { useContext, useState } from "react";
import styles from "../EditorControls.module.scss";
import { Export, TrashSimple } from "@phosphor-icons/react";
import { Dialog } from "@/components/Dialog";
import { useModel } from "@/providers/ModelProvider";
import { useCanvas } from "@/providers/CanvasProvider";
import { RotationContext } from "@/providers/RotationProvider";
import { Tooltip } from "@/components/Tooltip";
import { generateExportHtml, downloadHtmlFile } from "@/utils/exportModel";

export const Model: React.FC = () => {
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);
  const { clearAllCuboids, cuboids } = useModel();
  const { backgroundColor, dimensions } = useCanvas();
  const { rotation } = useContext(RotationContext);

  const handleClearModel = () => {
    setIsClearDialogOpen(true);
  };

  const confirmClearModel = () => {
    clearAllCuboids();
    setIsClearDialogOpen(false);
  };

  const handleExport = () => {
    const html = generateExportHtml({
      cuboids,
      dimensions,
      backgroundColor,
      rotation,
    });
    downloadHtmlFile(html, "css-voxel-model.html");
  };

  return (
    <>
      <div className={styles.group} role="group" aria-label="Model controls">
        <Tooltip label="Export model" side="left">
          <button
            className={styles.button}
            onClick={handleExport}
            disabled={cuboids.length === 0}
          >
            <span className="sr-only">Export model</span>
            <Export weight="bold" className="icon" />
          </button>
        </Tooltip>
        <Tooltip label="Clear model" side="left">
          <button
            className={styles.button}
            onClick={handleClearModel}
            disabled={cuboids.length === 0}
          >
            <span className="sr-only">Clear model</span>
            <TrashSimple weight="bold" className="icon" />
          </button>
        </Tooltip>
      </div>

      <Dialog
        isOpen={isClearDialogOpen}
        title="Confirm clear model"
        id="clear-model-confirmation"
        onClose={() => setIsClearDialogOpen(false)}
        onConfirm={confirmClearModel}
      >
        Are you sure you want to clear the entire model? This action will delete all cuboids and cannot be undone.
      </Dialog>
    </>
  );
};
