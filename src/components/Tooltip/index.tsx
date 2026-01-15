"use client";

import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import React from "react";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
  children: React.ReactNode;
  label: string;
  delay?: number;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  label,
  delay = 300,
  side = "top",
  sideOffset = 8,
}) => (
  <BaseTooltip.Provider delay={delay}>
    <BaseTooltip.Root>
      <BaseTooltip.Trigger render={children as React.ReactElement} />
      <BaseTooltip.Portal>
        <BaseTooltip.Positioner side={side} sideOffset={sideOffset}>
          <BaseTooltip.Popup className={styles.popup}>
            {label}
            <BaseTooltip.Arrow className={styles.arrow} />
          </BaseTooltip.Popup>
        </BaseTooltip.Positioner>
      </BaseTooltip.Portal>
    </BaseTooltip.Root>
  </BaseTooltip.Provider>
);
