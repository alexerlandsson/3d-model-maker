"use client";

import React, { useState } from "react";
import { Toolbar } from "@/components/Toolbar";
import { Dialog } from "@/components/Dialog";
import { useModel } from "@/providers/ModelProvider";
import { Button } from "@/components/Button";
import { CuboidControlFieldset } from "./CuboidControlFieldset";
import styles from "./CuboidControls.module.scss";
import clsx from "clsx";

export const CuboidControls: React.FC = () => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const {
    cuboids,
    activeCuboidId,
    updateCuboid,
    deleteCuboid,
    setActiveCuboidId,
  } = useModel();

  // If no cuboid is active, don't render anything
  if (!activeCuboidId) return null;

  // Find the active cuboid
  const activeCuboid = cuboids.find((cuboid) => cuboid.id === activeCuboidId);
  if (!activeCuboid) return null;

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
      updateCuboid(activeCuboidId, { [field]: numValue });
    } else {
      updateCuboid(activeCuboidId, { [field]: value });
    }
  };

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    deleteCuboid(activeCuboidId);
    setIsDeleteDialogOpen(false);
  };

  return (
    <>
      <Toolbar
        title={activeCuboid.id}
        ariaLabel="Active cuboid settings"
        onClose={() => setActiveCuboidId(null)}
      >
        <div className={styles.list}>
          <CuboidControlFieldset
            legend="Width"
            value={activeCuboid.width}
            min={1}
            max={100}
            field="width"
            defaultValue={1}
            increaseTitle="Increase width"
            decreaseTitle="Decrease width"
            onChange={handleChange}
            allowNegative={false}
          />

          <CuboidControlFieldset
            legend="Height"
            value={activeCuboid.height}
            min={1}
            max={100}
            field="height"
            defaultValue={1}
            increaseTitle="Increase height"
            decreaseTitle="Decrease height"
            onChange={handleChange}
            allowNegative={false}
          />

          <CuboidControlFieldset
            legend="Depth"
            value={activeCuboid.depth}
            min={1}
            max={100}
            field="depth"
            defaultValue={1}
            increaseTitle="Increase depth"
            decreaseTitle="Decrease depth"
            onChange={handleChange}
            allowNegative={false}
          />

          <hr className={styles.separator} />

          <CuboidControlFieldset
            legend="Pos. X"
            value={activeCuboid.posX}
            min={-100}
            max={100}
            field="posX"
            defaultValue={0}
            increaseTitle="Increase X position"
            decreaseTitle="Decrease X position"
            onChange={handleChange}
          />

          <CuboidControlFieldset
            legend="Pos. Y"
            value={activeCuboid.posY}
            min={-100}
            max={100}
            field="posY"
            defaultValue={0}
            increaseTitle="Increase Y position"
            decreaseTitle="Decrease Y position"
            onChange={handleChange}
          />

          <CuboidControlFieldset
            legend="Pos. Z"
            value={activeCuboid.posZ}
            min={-100}
            max={100}
            field="posZ"
            defaultValue={0}
            increaseTitle="Increase Z position"
            decreaseTitle="Decrease Z position"
            onChange={handleChange}
          />

          <hr className={styles.separator} />

          <CuboidControlFieldset
            legend="Layer"
            value={activeCuboid.zIndex}
            min={-100}
            max={100}
            field="zIndex"
            defaultValue={0}
            increaseTitle="Increase layer"
            decreaseTitle="Decrease layer"
            onChange={handleChange}
          />

          <fieldset className={clsx(styles.fieldset, styles.fieldsetSingleInput)}>
            <legend className="sr-only">Color</legend>
            <span aria-hidden="true" className={styles.label}>
              Color
            </span>
            <input
              type="color"
              value={activeCuboid.color || "#000000"}
              onChange={(e) => handleChange("color", e.target.value)}
              className={styles.inputColor}
            />
          </fieldset>

          <hr className={styles.separator} />

          <Button
            onClick={handleDelete}
            title="Delete cuboid"
            fullWidth
          >
            Delete
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
        Are you sure you want to delete this cuboid? This action cannot be
        undone.
      </Dialog>
    </>
  );
};
