import React from "react";
import styles from "./RectControls.module.scss";
import { Minus, Plus } from "@phosphor-icons/react";

interface RectControlFieldsetProps {
  legend: string;
  value: number | undefined;
  min: number;
  max: number;
  field: string;
  defaultValue: number;
  increaseTitle: string;
  decreaseTitle: string;
  onChange: (field: string, value: string | number) => void;
  allowNegative?: boolean;
}

export const RectControlFieldset: React.FC<RectControlFieldsetProps> = ({
  legend,
  value,
  min,
  max,
  field,
  defaultValue,
  increaseTitle,
  decreaseTitle,
  onChange,
  allowNegative = true,
}) => {
  const currentValue = value || defaultValue;
  const isAtMin = currentValue <= min;
  const isAtMax = currentValue >= max;

  const handleIncrement = () => {
    onChange(field, (value || defaultValue) + 1);
  };

  const handleDecrement = () => {
    const newValue = (value || defaultValue) - 1;
    const finalValue = allowNegative ? newValue : Math.max(0, newValue);
    onChange(field, finalValue);
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className="sr-only">{legend}</legend>
      <span aria-hidden="true" className={styles.label}>{legend}</span>
      <input
        type="number"
        min={min}
        max={max}
        value={value || defaultValue}
        onChange={(e) => onChange(field, e.target.value)}
        onFocus={(e) => e.target.select()}
        className={styles.input}
      />
      <button 
        title={increaseTitle} 
        onClick={handleIncrement} 
        className={styles.stepButton}
        disabled={isAtMax}
      >
        <span className="sr-only">{increaseTitle}</span>
        <Plus weight="bold" className="icon" aria-hidden="true" />
      </button>
      <button 
        title={decreaseTitle} 
        onClick={handleDecrement} 
        className={styles.stepButton}
        disabled={isAtMin}
      >
        <span className="sr-only">{decreaseTitle}</span>
        <Minus weight="bold" className="icon" aria-hidden="true" />
      </button>
    </fieldset>
  );
};