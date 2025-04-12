"use client";

import React, { useState } from "react";
import { Toolbar } from "@/components/Toolbar";
import { Dialog } from "@/components/Dialog";
import { useModel } from "@/providers/ModelProvider";
import { Button } from "@/components/Button";

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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            alignItems: "center",
            gap: "8px 12px",
            marginBottom: "16px",
          }}
        >
          <label>Width</label>
          <input
            type="number"
            min="0"
            max="100"
            value={activeRect.width || 1}
            onChange={(e) => handleChange("width", e.target.value)}
          />
          <label>Height</label>
          <input
            type="number"
            min="0"
            max="100"
            value={activeRect.height || 1}
            onChange={(e) => handleChange("height", e.target.value)}
          />

          <label>Depth</label>
          <input
            type="number"
            min="0"
            max="100"
            value={activeRect.depth || 1}
            onChange={(e) => handleChange("depth", e.target.value)}
          />

          <label>Pos (X)</label>
          <input
            type="number"
            min="-100"
            max="100"
            value={activeRect.posX || 0}
            onChange={(e) => handleChange("posX", e.target.value)}
          />
          <label>Pos (Y)</label>
          <input
            type="number"
            min="-100"
            max="100"
            value={activeRect.posY || 0}
            onChange={(e) => handleChange("posY", e.target.value)}
          />

          <label>Pos (Z)</label>
          <input
            type="number"
            min="-100"
            max="100"
            value={activeRect.posZ || 0}
            onChange={(e) => handleChange("posZ", e.target.value)}
          />

          <label>Color</label>
          <input
            type="color"
            value={activeRect.color || "#000000"}
            onChange={(e) => handleChange("color", e.target.value)}
            style={{ width: "100%" }}
          />

          <label>Layer</label>
          <input
            type="number"
            min="-100"
            max="100"
            value={activeRect.zIndex || 0}
            onChange={(e) => handleChange("zIndex", e.target.value)}
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
