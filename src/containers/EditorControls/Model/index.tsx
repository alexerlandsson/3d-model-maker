"use client";

import React, { useState } from "react";
import styles from "../EditorControls.module.scss";
import { TrashSimple } from "@phosphor-icons/react";
import { Dialog } from "@/components/Dialog";
import { useModel } from "@/providers/ModelProvider";

export const Model: React.FC = () => {
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);
  const { clearAllCuboids, cuboids } = useModel();

  const handleClearModel = () => {
    setIsClearDialogOpen(true);
  };

  const confirmClearModel = () => {
    clearAllCuboids();
    setIsClearDialogOpen(false);
  };

  return (
    <>
      <div className={styles.group} role="group" aria-label="Canvas controls">
        <button
          className={styles.button}
          title="Clear model"
          onClick={handleClearModel}
          disabled={cuboids.length === 0}
        >
          <span className="sr-only">Clear model</span>
          <TrashSimple weight="bold" className="icon" />
        </button>
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
