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
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <fieldset>
            <legend>Width</legend>
            <input
              type="number"
              min="0"
              max="100"
              value={activeRect.width || 1}
              onChange={(e) => handleChange("width", e.target.value)}
            />
            <button
              title="Increase width"
              onClick={() => handleChange("width", (activeRect.width || 1) + 1)}
            >
              +
            </button>
            <button
              title="Decrease width"
              onClick={() => handleChange("width", Math.max(0, (activeRect.width || 1) - 1))}
            >
              -
            </button>
          </fieldset>

          <fieldset>
            <legend>Height</legend>
            <input
              type="number"
              min="0"
              max="100"
              value={activeRect.height || 1}
              onChange={(e) => handleChange("height", e.target.value)}
            />
            <button
              title="Increase height"
              onClick={() => handleChange("height", (activeRect.height || 1) + 1)}
            >
              +
            </button>
            <button
              title="Decrease height"
              onClick={() => handleChange("height", Math.max(0, (activeRect.height || 1) - 1))}
            >
              -
            </button>
          </fieldset>

          <fieldset>
            <legend>Depth</legend>
            <input
              type="number"
              min="0"
              max="100"
              value={activeRect.depth || 1}
              onChange={(e) => handleChange("depth", e.target.value)}
            />
            <button
              title="Increase depth"
              onClick={() => handleChange("depth", (activeRect.depth || 1) + 1)}
            >
              +
            </button>
            <button
              title="Decrease depth"
              onClick={() => handleChange("depth", Math.max(0, (activeRect.depth || 1) - 1))}
            >
              -
            </button>
          </fieldset>

          <fieldset>
            <legend>Pos (X)</legend>
            <input
              type="number"
              min="-100"
              max="100"
              value={activeRect.posX || 0}
              onChange={(e) => handleChange("posX", e.target.value)}
            />
            <button
              title="Increase X position"
              onClick={() => handleChange("posX", (activeRect.posX || 0) + 1)}
            >
              +
            </button>
            <button
              title="Decrease X position"
              onClick={() => handleChange("posX", (activeRect.posX || 0) - 1)}
            >
              -
            </button>
          </fieldset>

          <fieldset>
            <legend>Pos (Y)</legend>
            <input
              type="number"
              min="-100"
              max="100"
              value={activeRect.posY || 0}
              onChange={(e) => handleChange("posY", e.target.value)}
            />
            <button
              title="Increase Y position"
              onClick={() => handleChange("posY", (activeRect.posY || 0) + 1)}
            >
              +
            </button>
            <button
              title="Decrease Y position"
              onClick={() => handleChange("posY", (activeRect.posY || 0) - 1)}
            >
              -
            </button>
          </fieldset>

          <fieldset>
            <legend>Pos (Z)</legend>
            <input
              type="number"
              min="-100"
              max="100"
              value={activeRect.posZ || 0}
              onChange={(e) => handleChange("posZ", e.target.value)}
            />
            <button
              title="Increase Z position"
              onClick={() => handleChange("posZ", (activeRect.posZ || 0) + 1)}
            >
              +
            </button>
            <button
              title="Decrease Z position"
              onClick={() => handleChange("posZ", (activeRect.posZ || 0) - 1)}
            >
              -
            </button>
          </fieldset>

          <fieldset>
            <legend>Layer</legend>
            <input
              type="number"
              min="-100"
              max="100"
              value={activeRect.zIndex || 0}
              onChange={(e) => handleChange("zIndex", e.target.value)}
            />
            <button
              title="Increase layer"
              onClick={() => handleChange("zIndex", (activeRect.zIndex || 0) + 1)}
            >
              +
            </button>
            <button
              title="Decrease layer"
              onClick={() => handleChange("zIndex", (activeRect.zIndex || 0) - 1)}
            >
              -
            </button>
          </fieldset>

          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", alignItems: "center", gap: "8px 12px" }}>
            <label>Color</label>
            <input
              type="color"
              value={activeRect.color || "#000000"}
              onChange={(e) => handleChange("color", e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
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
