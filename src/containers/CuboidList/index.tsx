"use client";

import React from "react";
import { Panel } from "@/components/Panel";
import { useModel } from "@/providers/ModelProvider";
import styles from "./CuboidList.module.scss";
import clsx from "clsx";

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
                <span className={styles.buttonLabel}>{cuboid.id}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
};
