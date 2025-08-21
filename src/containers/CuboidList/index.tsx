"use client";

import React from "react";
import { Panel } from "@/components/Panel";
import { useModel } from "@/providers/ModelProvider";
import styles from "./CuboidList.module.scss";
import clsx from "clsx";
import { X } from "@phosphor-icons/react";

export const CuboidList: React.FC = () => {
  const { cuboids, setActiveCuboidId, activeCuboidId } = useModel();

  return (
    <Panel aria-label="List of cuboids">
      {cuboids.length === 0 ? (
        <p className={styles.empty}>No cuboids found</p>
      ) : (
        <ul className={styles.list}>
          {cuboids.map((cuboid) => (
            <li key={cuboid.id} className={styles.item}>
              <button
                type="button"
                onClick={() => setActiveCuboidId(cuboid.id)}
                title={`Select ${cuboid.id}`}
                className={clsx(styles.button, {
                  [styles.buttonActive]: cuboid.id === activeCuboidId,
                })}
              >
                <span className={styles.buttonMeta}>
                  <span
                    className={styles.buttonColor}
                    style={{ "--_color": cuboid.color } as React.CSSProperties}
                    aria-label={`Color: ${cuboid.color}`}
                  />
                  <span className={styles.buttonDimension} aria-label={`Dimensions: ${cuboid.width}x${cuboid.height}x${cuboid.depth}`}>
                    {cuboid.width}
                    <X weight="bold" className="icon" aria-hidden="true" />
                    {cuboid.height}
                    <X weight="bold" className="icon" aria-hidden="true" />
                    {cuboid.depth}
                  </span>
                </span>
                <span className={styles.buttonLabel} aria-label={`ID: ${cuboid.id}`}>{cuboid.id}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
};
