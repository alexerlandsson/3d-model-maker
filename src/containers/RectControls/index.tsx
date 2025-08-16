"use client";

import React, { useState } from "react";
import { Toolbar } from "@/components/Toolbar";
import { Dialog } from "@/components/Dialog";
import { useModel } from "@/providers/ModelProvider";
import { Button } from "@/components/Button";
import { RectControlFieldset } from "./RectControlFieldset";
import styles from "./RectControls.module.scss";

export const RectControls: React.FC = () => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const {
    rectangles,
    activeRectId,
    updateRectangle,
    deleteRectangle,
    setActiveRectId,
  } = useModel();

  // If no rect is active, don't render anything
  if (!activeRectId) return null;

  // Find the active rectangle
  const activeRect = rectangles.find((rect) => rect.id === activeRectId);
  if (!activeRect) return null;

  const handleChange = (field: string, value: string | number) => {
    // Convert string inputs to numbers for numeric fields
    const numericFields = [
      "width",
      "height",
      "depth",
      "posX",
      "posY",
      "posZ",
      "zIndex",
    ];
    if (numericFields.includes(field)) {
      const numValue = typeof value === "string" ? parseFloat(value) : value;
      updateRectangle(activeRectId, { [field]: numValue });
    } else {
      updateRectangle(activeRectId, { [field]: value });
    }
  };

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    deleteRectangle(activeRectId);
    setIsDeleteDialogOpen(false);
  };

  return (
    <>
      <Toolbar
        title="Settings"
        ariaLabel="Active rectangle settings"
        onClose={() => setActiveRectId(null)}
      >
        <div className={styles.list}>
          <RectControlFieldset
            legend="Width"
            value={activeRect.width}
            min={0}
            max={100}
            field="width"
            defaultValue={1}
            increaseTitle="Increase width"
            decreaseTitle="Decrease width"
            onChange={handleChange}
            allowNegative={false}
          />

          <RectControlFieldset
            legend="Height"
            value={activeRect.height}
            min={0}
            max={100}
            field="height"
            defaultValue={1}
            increaseTitle="Increase height"
            decreaseTitle="Decrease height"
            onChange={handleChange}
            allowNegative={false}
          />

          <RectControlFieldset
            legend="Depth"
            value={activeRect.depth}
            min={0}
            max={100}
            field="depth"
            defaultValue={1}
            increaseTitle="Increase depth"
            decreaseTitle="Decrease depth"
            onChange={handleChange}
            allowNegative={false}
          />

          <hr className={styles.separator} />

          <RectControlFieldset
            legend="Pos (X)"
            value={activeRect.posX}
            min={-100}
            max={100}
            field="posX"
            defaultValue={0}
            increaseTitle="Increase X position"
            decreaseTitle="Decrease X position"
            onChange={handleChange}
          />

          <RectControlFieldset
            legend="Pos (Y)"
            value={activeRect.posY}
            min={-100}
            max={100}
            field="posY"
            defaultValue={0}
            increaseTitle="Increase Y position"
            decreaseTitle="Decrease Y position"
            onChange={handleChange}
          />

          <RectControlFieldset
            legend="Pos (Z)"
            value={activeRect.posZ}
            min={-100}
            max={100}
            field="posZ"
            defaultValue={0}
            increaseTitle="Increase Z position"
            decreaseTitle="Decrease Z position"
            onChange={handleChange}
          />

          <hr className={styles.separator} />

          <RectControlFieldset
            legend="Layer"
            value={activeRect.zIndex}
            min={-100}
            max={100}
            field="zIndex"
            defaultValue={0}
            increaseTitle="Increase layer"
            decreaseTitle="Decrease layer"
            onChange={handleChange}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              alignItems: "center",
              gap: "8px 12px",
            }}
          >
            <label>Color</label>
            <input
              type="color"
              value={activeRect.color || "#000000"}
              onChange={(e) => handleChange("color", e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
          <Button
            onClick={handleDelete}
            title="Delete rectangle"
            variant="critical"
            fullWidth
          >
            Delete rectangle
          </Button>
        </div>
      </Toolbar>

      <Dialog
        isOpen={isDeleteDialogOpen}
        title="Confirm deletion"
        id="delete-confirmation"
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
      >
        Are you sure you want to delete this rectangle? This action can nog be
        undone.
      </Dialog>
    </>
  );
};
