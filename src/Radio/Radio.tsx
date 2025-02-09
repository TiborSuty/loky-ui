import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styles from "./radio.module.css";

export const Radio = () => (
  <RadioGroup.Root
    className={styles.radio}
    defaultValue="default"
    aria-label="View density"
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <RadioGroup.Item className={styles.radioitem} value="default" id="r1">
        <RadioGroup.Indicator className={styles.indicator} />
      </RadioGroup.Item>
      <label className={styles.Label} htmlFor="r1">
        Default
      </label>
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <RadioGroup.Item className={styles.radioitem} value="comfortable" id="r2">
        <RadioGroup.Indicator className={styles.indicator} />
      </RadioGroup.Item>
      <label className={styles.Label} htmlFor="r2">
        Comfortable
      </label>
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <RadioGroup.Item className={styles.radioitem} value="compact" id="r3">
        <RadioGroup.Indicator className={styles.indicator} />
      </RadioGroup.Item>
      <label className={styles.Label} htmlFor="r3">
        Compact
      </label>
    </div>
  </RadioGroup.Root>
);
