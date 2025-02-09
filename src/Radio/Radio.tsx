import React from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import styles from "./switch.module.css";

export const Switch = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <label
      className={styles.Label}
      htmlFor="airplane-mode"
      style={{ paddingRight: 15 }}
    >
      Airplane mode
    </label>
    <RadixSwitch.Root className={styles.switch} id="airplane-mode">
      <RadixSwitch.Thumb className={styles.thumb} />
    </RadixSwitch.Root>
  </div>
);
