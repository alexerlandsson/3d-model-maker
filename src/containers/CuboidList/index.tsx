import React from "react";
import { Panel } from "@/components/Panel";
import styles from "./CuboidList.module.scss";

export const CuboidList: React.FC = () => {
  return (
    <Panel aria-label="List of cuboids">
      <ul className={styles.list}>
        <li>
          <button>Cuboid 1</button>
        </li>
        <li>
          <button>Cuboid 2</button>
        </li>
        <li>
          <button>Cuboid 3</button>
        </li>
      </ul>
    </Panel>
  );
};
