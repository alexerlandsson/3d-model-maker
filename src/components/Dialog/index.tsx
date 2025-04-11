"use client";

import React, { useRef, useEffect } from "react";
import styles from "./Dialog.module.scss";
import clsx from "clsx";

interface DialogProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  id: string;
  className?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  title,
  children,
  id,
  className,
  onClose,
  onConfirm,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (dialogRef.current && e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className={clsx(styles.dialog, className)}
      onClick={handleBackdropClick}
      onClose={onClose}
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-body`}
      tabIndex={-1}
    >
      <div className={styles.content}>
        <h2 className={styles.title} id={`${id}-title`}>{title}</h2>
        <div className={styles.body} id={`${id}-body`}>
          {children}
        </div>
        <footer className={styles.footer}>
          <button className={styles.cancelButton} onClick={onClose} title="Cancel">
            Cancel
          </button>
          <button className={styles.confirmButton} onClick={onConfirm} title="Confirm">
            Confirm
          </button>
        </footer>
      </div>
    </dialog>
  );
};